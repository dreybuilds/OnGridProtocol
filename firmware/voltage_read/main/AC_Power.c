#include <stdio.h>
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// GPIO pin for the voltage sensor
#define VOLTAGE_SENSOR_GPIO GPIO_NUM_4

// ADC channel for GPIO 4 (ADC1_CHANNEL_3)
#define ADC_CHANNEL ADC1_CHANNEL_3

// Reference voltage (in mV) for the ESP32-S3 ADC (usually 1100 mV)
#define ADC_REF_VOLTAGE 1100

// ADC resolution (12 bits for ESP32-S3)
#define ADC_RESOLUTION 4095

static const char *TAG = "VoltageSensor";

// Function to initialize the ADC
void voltage_sensor_init() {
    // Configure ADC
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
}

// Function to read the raw ADC value
int voltage_sensor_read_raw() {
    return adc1_get_raw(ADC_CHANNEL);
}

// Function to convert the raw ADC value to voltage (in mV)
int voltage_sensor_read_mv() {
    int raw_value = voltage_sensor_read_raw();
    return (raw_value * ADC_REF_VOLTAGE) / ADC_RESOLUTION;
}

void app_main(void) {
    // Initialize the voltage sensor
    voltage_sensor_init();

    while (1) {
        // Read the raw ADC value
        int raw_value = voltage_sensor_read_raw();

        // Convert the raw ADC value to voltage (in mV)
        int voltage_mv = voltage_sensor_read_mv();

        // Print the raw ADC value and voltage
        ESP_LOGI(TAG, "Raw ADC Value: %d", raw_value);
        ESP_LOGI(TAG, "Voltage: %d mV", voltage_mv);

        // Delay for 1 second
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}