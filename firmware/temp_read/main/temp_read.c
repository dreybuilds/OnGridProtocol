#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "driver/gpio.h"
#include "ds18b20.h"
#include "onewire_bus.h"

// GPIO where the DS18B20 is connected
#define EXAMPLE_ONEWIRE_BUS_GPIO    4  // Changed to GPIO4 for better compatibility
#define EXAMPLE_ONEWIRE_MAX_DS18B20 2

// Tag for logging
static const char *TAG = "DS18B20_EXAMPLE";

void app_main(void) {
    // Variables
    onewire_bus_handle_t bus = NULL;
    ds18b20_device_handle_t ds18b20s[EXAMPLE_ONEWIRE_MAX_DS18B20];
    float temperature = 0.0f;
    int ds18b20_device_num = 0;

    // Configure the 1-Wire bus
    onewire_bus_config_t bus_config = {
        .bus_gpio_num = EXAMPLE_ONEWIRE_BUS_GPIO,
    };
    onewire_bus_rmt_config_t rmt_config = {
        .max_rx_bytes = 10, // 1byte ROM command + 8byte ROM number + 1byte device command
    };

    // Initialize the 1-Wire bus
    ESP_ERROR_CHECK(onewire_new_bus_rmt(&bus_config, &rmt_config, &bus));
    ESP_LOGI(TAG, "1-Wire bus initialized on GPIO %d", EXAMPLE_ONEWIRE_BUS_GPIO);

    // Create a 1-Wire device iterator for device discovery
    onewire_device_iter_handle_t iter = NULL;
    ESP_ERROR_CHECK(onewire_new_device_iter(bus, &iter));
    ESP_LOGI(TAG, "Device iterator created, starting search...");

    // Search for devices on the 1-Wire bus
    onewire_device_t next_onewire_device;
    esp_err_t search_result = ESP_OK;
    do {
        search_result = onewire_device_iter_get_next(iter, &next_onewire_device);
        if (search_result == ESP_OK) { // Found a device
            ds18b20_config_t ds_cfg = {};
            // Check if the device is a DS18B20
            if (ds18b20_new_device(&next_onewire_device, &ds_cfg, &ds18b20s[ds18b20_device_num]) == ESP_OK) {
                ESP_LOGI(TAG, "Found DS18B20[%d], address: %016llX", ds18b20_device_num, next_onewire_device.address);
                ds18b20_device_num++;
            } else {
                ESP_LOGI(TAG, "Found unknown device, address: %016llX", next_onewire_device.address);
            }
        }
    } while (search_result != ESP_ERR_NOT_FOUND);

    // Clean up the iterator
    ESP_ERROR_CHECK(onewire_del_device_iter(iter));
    ESP_LOGI(TAG, "Search complete, %d DS18B20 device(s) found", ds18b20_device_num);

    // Read temperature from each DS18B20 sensor
    while (1) {
        for (int i = 0; i < ds18b20_device_num; i++) {
            // Trigger temperature conversion
            ESP_ERROR_CHECK(ds18b20_trigger_temperature_conversion(ds18b20s[i]));

            // Wait for conversion to complete (DS18B20 requires up to 750ms for 12-bit resolution)
            vTaskDelay(pdMS_TO_TICKS(750));

            // Read temperature
            ESP_ERROR_CHECK(ds18b20_get_temperature(ds18b20s[i], &temperature));
            ESP_LOGI(TAG, "Temperature from DS18B20[%d]: %.2f°C", i, temperature);
        }

        // Wait before the next reading
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}