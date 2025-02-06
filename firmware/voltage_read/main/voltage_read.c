#include <stdio.h>
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// GPIO pins for the voltage sensor
#define VOLTAGE_SENSOR_GPIO_1 GPIO_NUM_4
#define VOLTAGE_SENSOR_GPIO_2 GPIO_NUM_5
#define VOLTAGE_SENSOR_GPIO_3 GPIO_NUM_6
#define VOLTAGE_SENSOR_GPIO_4 GPIO_NUM_7

// ADC channels
#define ADC_CHANNEL_1 ADC1_CHANNEL_3
#define ADC_CHANNEL_2 ADC1_CHANNEL_4
#define ADC_CHANNEL_3 ADC1_CHANNEL_5
#define ADC_CHANNEL_4 ADC1_CHANNEL_6

// Reference voltage (in mV) for the ESP32-S3 ADC (usually 1100 mV)
#define ADC_REF_VOLTAGE_1 43
#define ADC_REF_VOLTAGE_2 40.6
#define ADC_REF_VOLTAGE_3 38.3
#define ADC_REF_VOLTAGE_4 40.72

// ADC resolution (12 bits for ESP32-S3)
#define ADC_RESOLUTION 4095

static const char *TAG = "VoltageSensor";

// Function to initialize the ADC
void voltage_sensor_init() {
    // Configure ADC width and attenuation for all channels
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL_1, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL_2, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL_3, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL_4, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
}

// Function to read the raw ADC values from all channels
int voltage_sensor_read_raw(int channel) {
    int raw_value = 0;
    switch (channel) {
        case 1:
            raw_value = adc1_get_raw(ADC_CHANNEL_1);
            break;
        case 2:
            raw_value = adc1_get_raw(ADC_CHANNEL_2);
            break;
        case 3:
            raw_value = adc1_get_raw(ADC_CHANNEL_3);
            break;
        case 4:
            raw_value = adc1_get_raw(ADC_CHANNEL_4);
            break;
        default:
            ESP_LOGE(TAG, "Invalid ADC channel");
            break;
    }
    return raw_value;
}

// Function to convert the raw ADC value to voltage (in mV)
int voltage_sensor_read_mv(int channel, int raw_value) {
    int voltage_mv = 0;
    switch (channel) {
        case 1:
            voltage_mv = (raw_value * ADC_REF_VOLTAGE_1) / ADC_RESOLUTION;
            break;
        case 2:
            voltage_mv = (raw_value * ADC_REF_VOLTAGE_2) / ADC_RESOLUTION;
            break;
        case 3:
            voltage_mv = (raw_value * ADC_REF_VOLTAGE_3) / ADC_RESOLUTION;
            break;
        case 4:
            voltage_mv = (raw_value * ADC_REF_VOLTAGE_4) / ADC_RESOLUTION;
            break;
        default:
            ESP_LOGE(TAG, "Invalid ADC channel");
            break;
    }
    return voltage_mv;
}

void app_main(void) {
    // Initialize the voltage sensor
    voltage_sensor_init();

    while (1) {
        // Read the raw ADC values for each channel
        int raw_value1 = voltage_sensor_read_raw(1);
        int raw_value2 = voltage_sensor_read_raw(2);
        int raw_value3 = voltage_sensor_read_raw(3);
        int raw_value4 = voltage_sensor_read_raw(4);

        // Convert the raw ADC values to voltage (in mV)
        int voltage_mv1 = voltage_sensor_read_mv(1, raw_value1);
        int voltage_mv2 = voltage_sensor_read_mv(2, raw_value2);
        int voltage_mv3 = voltage_sensor_read_mv(3, raw_value3);
        int voltage_mv4 = voltage_sensor_read_mv(4, raw_value4);

        // Print the raw ADC values and voltages
        ESP_LOGI(TAG, "Channel 1 Raw ADC Value: %d, Voltage: %d mV", raw_value1, voltage_mv1);
        ESP_LOGI(TAG, "Channel 2 Raw ADC Value: %d, Voltage: %d mV", raw_value2, voltage_mv2);
        ESP_LOGI(TAG, "Channel 3 Raw ADC Value: %d, Voltage: %d mV", raw_value3, voltage_mv3);
        ESP_LOGI(TAG, "Channel 4 Raw ADC Value: %d, Voltage: %d mV", raw_value4, voltage_mv4);

        // Delay for 1 second
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}
