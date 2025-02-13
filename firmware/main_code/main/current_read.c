#include <stdio.h>
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// GPIO pins for the current sensor
#define CURRENT_SENSOR_GPIO_1 GPIO_NUM_15
#define CURRENT_SENSOR_GPIO_2 GPIO_NUM_16
#define CURRENT_SENSOR_GPIO_3 GPIO_NUM_17
#define CURRENT_SENSOR_GPIO_4 GPIO_NUM_3

// ADC channels for each sensor
#define ADC_CHANNEL_1 ADC2_CHANNEL_4
#define ADC_CHANNEL_2 ADC2_CHANNEL_5
#define ADC_CHANNEL_3 ADC2_CHANNEL_6
#define ADC_CHANNEL_4 ADC1_CHANNEL_2

// Reference voltages (in mV) for ADC readings
#define ADC_REF_VOLTAGE_1 2528
#define ADC_REF_VOLTAGE_2 2542
#define ADC_REF_VOLTAGE_3 2537
#define ADC_REF_VOLTAGE_4 2535

// ADC resolution (12-bit for ESP32-S3)
#define ADC_RESOLUTION 4095

// Current sensor sensitivity (mV/A)
#define SENSOR_SENSITIVITY_HC 66  // High current sensor
#define SENSOR_SENSITIVITY_LC 185 // Low current sensor

// Voltage at 0 current (typically VCC/2 for ACS712)
#define ZERO_CURRENT_VOLTAGE 2500 // 2.5V for ACS712

static const char *TAG_2 = "CurrentSensor";

// Function to initialize the ADC channels
void current_sensor_init() {
    adc1_config_width(ADC_WIDTH_BIT_12);
    adc1_config_channel_atten(ADC_CHANNEL_4, ADC_ATTEN_DB_12);
    
    adc2_config_channel_atten(ADC_CHANNEL_1, ADC_ATTEN_DB_12);
    adc2_config_channel_atten(ADC_CHANNEL_2, ADC_ATTEN_DB_12);
    adc2_config_channel_atten(ADC_CHANNEL_3, ADC_ATTEN_DB_12);
}

// Function to read the raw ADC value for a given channel
int current_sensor_read_raw(adc_channel_t channel) {
    int raw_value = 0;
    if ((adc_channel_t)channel == (adc_channel_t)ADC_CHANNEL_4) { 
        // ADC1 read
        raw_value = adc1_get_raw(channel);
    } else if ((adc_channel_t)channel == (adc_channel_t)ADC_CHANNEL_1 || (adc_channel_t)channel == (adc_channel_t)ADC_CHANNEL_2 || (adc_channel_t)channel == (adc_channel_t)ADC_CHANNEL_3) {
        // ADC2 read
        adc2_get_raw(channel, ADC_WIDTH_BIT_12, &raw_value);
    } else {
        ESP_LOGE(TAG_2, "Invalid ADC channel: %d", channel);
    }
    return raw_value;
}

// Function to convert raw ADC value to voltage (mV)
int current_sensor_read_mv(adc_channel_t channel, int raw_value) {
    int ref_voltage = 0;
    switch (channel) {
        case ADC_CHANNEL_1:
            ref_voltage = ADC_REF_VOLTAGE_1;
            break;
        case ADC_CHANNEL_2:
            ref_voltage = ADC_REF_VOLTAGE_2;
            break;
        case ADC_CHANNEL_3:
            ref_voltage = ADC_REF_VOLTAGE_3;
            break;
        case ADC_CHANNEL_4:
            ref_voltage = ADC_REF_VOLTAGE_4;
            break;
        default:
            ESP_LOGE(TAG_2, "Invalid ADC channel");
            return 0;
    }
    return (raw_value * ref_voltage) / ADC_RESOLUTION;
}

// Function to convert voltage to current (mA)
int current_sensor_read_ma(int voltage_mv, int sensitivity) {
    return ((voltage_mv - ZERO_CURRENT_VOLTAGE) * 1000) / sensitivity;
}