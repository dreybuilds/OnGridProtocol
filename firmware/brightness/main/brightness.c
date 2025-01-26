#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "driver/adc.h"

// Define the analog pin where the LDR is connected
#define LDR_ADC_CHANNEL ADC1_CHANNEL_4 // GPIO4 corresponds to ADC1_CHANNEL_4 on ESP32-S3

// Tag for logging
static const char *TAG = "LDR_SENSOR";

void app_main(void) {
    // Configure the ADC
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits (0-4095)
    adc1_config_channel_atten(LDR_ADC_CHANNEL, ADC_ATTEN_DB_12); // Set attenuation to 11dB for full range (0-3.3V)

    while (1) {
        // Read the raw analog value from the LDR
        int ldrValue = adc1_get_raw(LDR_ADC_CHANNEL);

        // Print the raw analog value to the Serial Monitor
        ESP_LOGI(TAG, "LDR Value: %d", ldrValue);

        // Convert the analog value to a voltage
        float voltage = ldrValue * (3.3 / 4095.0); // ESP32-S3 ADC resolution is 12-bit (0-4095)
        ESP_LOGI(TAG, "Voltage: %.2f V", voltage);

        // Optional: Add a simple light intensity classification
        if (ldrValue < 1000) {
            ESP_LOGI(TAG, "Light Intensity: Dark");
        } else if (ldrValue < 2000) {
            ESP_LOGI(TAG, "Light Intensity: Dim");
        } else {
            ESP_LOGI(TAG, "Light Intensity: Bright");
        }

        // Wait for 500 milliseconds before the next reading
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}