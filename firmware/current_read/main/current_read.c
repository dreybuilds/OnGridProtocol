#include <stdio.h>
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// GPIO pin for the current sensor
#define CURRENT_SENSOR_GPIO GPIO_NUM_5

// ADC channel for GPIO 5 (ADC1_CHANNEL_4)
#define ADC_CHANNEL ADC1_CHANNEL_4

// Reference voltage (in mV) for the ESP32-S3 ADC (usually 1100 mV)
#define ADC_REF_VOLTAGE 1100

// ADC resolution (12 bits for ESP32-S3)
#define ADC_RESOLUTION 4095

// Current sensor sensitivity (mV/A)
// For example, ACS712-5A has a sensitivity of 185 mV/A
#define SENSOR_SENSITIVITY 185

// Voltage at 0 current (typically VCC/2 for ACS712)
#define ZERO_CURRENT_VOLTAGE 2500 // 2.5V for ACS712

static const char *TAG = "CurrentSensor";

// Function to initialize the ADC
void current_sensor_init() {
    // Configure ADC
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits
    adc1_config_channel_atten(ADC_CHANNEL, ADC_ATTEN_DB_11); // Set attenuation to 11 dB for full range (0-3.3V)
}

// Function to read the raw ADC value
int current_sensor_read_raw() {
    return adc1_get_raw(ADC_CHANNEL);
}

// Function to convert the raw ADC value to voltage (in mV)
int current_sensor_read_mv() {
    int raw_value = current_sensor_read_raw();
    return (raw_value * ADC_REF_VOLTAGE) / ADC_RESOLUTION;
}

// Function to convert the voltage to current (in mA)
int current_sensor_read_ma() {
    int voltage_mv = current_sensor_read_mv();
    return (voltage_mv - ZERO_CURRENT_VOLTAGE) * 1000 / SENSOR_SENSITIVITY;
}

void app_main(void) {
    // Initialize the current sensor
    current_sensor_init();

    while (1) {
        // Read the raw ADC value
        int raw_value = current_sensor_read_raw();

        // Convert the raw ADC value to voltage (in mV)
        int voltage_mv = current_sensor_read_mv();

        // Convert the voltage to current (in mA)
        int current_ma = current_sensor_read_ma();

        // Print the raw ADC value, voltage, and current
        ESP_LOGI(TAG, "Raw ADC Value: %d", raw_value);
        ESP_LOGI(TAG, "Voltage: %d mV", voltage_mv);
        ESP_LOGI(TAG, "Current: %d mA", current_ma);

        // Delay for 1 second
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}