#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "driver/gpio.h"
#include "ds18b20.h"
#include "onewire_bus.h"


#define SENSOR_GPIO 13
#define MAX_DS18B20_SENSORS 2

static onewire_bus_handle_t bus = NULL;
static ds18b20_device_handle_t sensors[MAX_DS18B20_SENSORS];
static int sensor_count = 0;

void ds18b20_init() {
    // Configure 1-Wire bus
    onewire_bus_config_t bus_config = {
        .bus_gpio_num = SENSOR_GPIO,
    };
    onewire_bus_rmt_config_t rmt_config = {
        .max_rx_bytes = 10,
    };

    // Initialize 1-Wire bus
    ESP_ERROR_CHECK(onewire_new_bus_rmt(&bus_config, &rmt_config, &bus));

    // Search for DS18B20 devices
    onewire_device_iter_handle_t iter;
    ESP_ERROR_CHECK(onewire_new_device_iter(bus, &iter));

    onewire_device_t device;
    while (onewire_device_iter_get_next(iter, &device) == ESP_OK && sensor_count < MAX_DS18B20_SENSORS) {
        ds18b20_config_t cfg = {};
        if (ds18b20_new_device(&device, &cfg, &sensors[sensor_count]) == ESP_OK) {
            sensor_count++;
        }
    }
    onewire_del_device_iter(iter);
}

float ds18b20_read_temp(int sensor_index) {
    if (sensor_index >= sensor_count) return -100.0; // Invalid index

    float temp;
    ds18b20_trigger_temperature_conversion(sensors[sensor_index]);
    vTaskDelay(pdMS_TO_TICKS(750));  // Wait for conversion
    ds18b20_get_temperature(sensors[sensor_index], &temp);
    return temp;
}
