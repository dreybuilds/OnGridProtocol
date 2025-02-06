#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "driver/gpio.h"
#include "ds18b20.h"
#include "onewire_bus.h"

#define ONEWIRE_BUS_GPIO    13  
#define MAX_DS18B20_SENSORS 2  

static const char *TAG = "DS18B20_READER";

// Struct to store temperature readings
typedef struct {
    float temperature[MAX_DS18B20_SENSORS];
    int sensor_count;
} TemperatureReadings;

// Function to initialize and read temperature sensors
TemperatureReadings temp_read() {
    TemperatureReadings readings = { .sensor_count = 0 };

    // Initialize the 1-Wire bus
    onewire_bus_handle_t bus = NULL;
    ds18b20_device_handle_t ds18b20s[MAX_DS18B20_SENSORS];

    onewire_bus_config_t bus_config = { .bus_gpio_num = ONEWIRE_BUS_GPIO };
    onewire_bus_rmt_config_t rmt_config = { .max_rx_bytes = 10 };

    ESP_ERROR_CHECK(onewire_new_bus_rmt(&bus_config, &rmt_config, &bus));
    ESP_LOGI(TAG, "1-Wire bus initialized on GPIO %d", ONEWIRE_BUS_GPIO);

    // Create a 1-Wire device iterator for device discovery
    onewire_device_iter_handle_t iter = NULL;
    ESP_ERROR_CHECK(onewire_new_device_iter(bus, &iter));

    onewire_device_t device;
    esp_err_t search_result;

    // Search for DS18B20 sensors
    while ((search_result = onewire_device_iter_get_next(iter, &device)) == ESP_OK) {
        ds18b20_config_t ds_cfg = {};
        if (ds18b20_new_device(&device, &ds_cfg, &ds18b20s[readings.sensor_count]) == ESP_OK) {
            ESP_LOGI(TAG, "Found DS18B20[%d], address: %016llX", readings.sensor_count, device.address);
            readings.sensor_count++;
            if (readings.sensor_count >= MAX_DS18B20_SENSORS) break;
        }
    }

    ESP_ERROR_CHECK(onewire_del_device_iter(iter));
    ESP_LOGI(TAG, "Total DS18B20 sensors found: %d", readings.sensor_count);

    // Read temperature from each DS18B20 sensor
    for (int i = 0; i < readings.sensor_count; i++) {
        ESP_ERROR_CHECK(ds18b20_trigger_temperature_conversion(ds18b20s[i]));
        vTaskDelay(pdMS_TO_TICKS(750));  // Wait for conversion (12-bit mode)

        ESP_ERROR_CHECK(ds18b20_get_temperature(ds18b20s[i], &readings.temperature[i]));
        ESP_LOGI(TAG, "Temperature from DS18B20[%d]: %.2f°C", i, readings.temperature[i]);
    }

    return readings;
}