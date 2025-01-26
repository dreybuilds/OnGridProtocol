#include <stdio.h>
#include <string.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_system.h"
#include "esp_wifi.h"
#include "esp_event.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "mqtt_client.h"
#include "cJSON.h"

// Wi-Fi credentials
#define WIFI_SSID "Audrey's iPhone" // Replace with your Wi-Fi SSID
#define WIFI_PASSWORD "Drey1234"

// MQTT Broker details
#define MQTT_BROKER "196.96.60.82" // Replace with your local IP (e.g., "192.168.1.100")
#define MQTT_PORT 1883
#define MQTT_TOPIC "sensor/data"

// Logging tag
static const char *TAG = "MQTT_EXAMPLE";

// MQTT client handle
esp_mqtt_client_handle_t mqtt_client;

// Function to handle MQTT events
static void mqtt_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data) {
    esp_mqtt_event_handle_t event = event_data;
    switch (event->event_id) {
        case MQTT_EVENT_CONNECTED:
            ESP_LOGI(TAG, "MQTT_EVENT_CONNECTED");
            break;
        case MQTT_EVENT_DISCONNECTED:
            ESP_LOGI(TAG, "MQTT_EVENT_DISCONNECTED");
            break;
        case MQTT_EVENT_PUBLISHED:
            ESP_LOGI(TAG, "MQTT_EVENT_PUBLISHED");
            break;
        case MQTT_EVENT_ERROR:
            ESP_LOGI(TAG, "MQTT_EVENT_ERROR");
            break;
        default:
            break;
    }
}

// Function to publish sensor data
void publish_sensor_data() {
    // Create a JSON object
    cJSON *json = cJSON_CreateObject();
    cJSON_AddStringToObject(json, "sensor", "ESP32-S3");
    cJSON_AddNumberToObject(json, "temperature", 25.5); // Replace with actual sensor data
    cJSON_AddNumberToObject(json, "humidity", 60.0);    // Replace with actual sensor data
    cJSON_AddNumberToObject(json, "light", 1023);       // Replace with actual sensor data

    // Convert JSON object to a string
    char *json_str = cJSON_Print(json);
    ESP_LOGI(TAG, "Publishing: %s", json_str);

    // Publish the JSON string to the MQTT topic
    esp_mqtt_client_publish(mqtt_client, MQTT_TOPIC, json_str, 0, 1, 0);

    // Free memory
    cJSON_Delete(json);
    cJSON_free(json_str);
}

// Main application
void app_main(void) {
    // Initialize NVS (Non-Volatile Storage)
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);

    // Initialize Wi-Fi
    ESP_ERROR_CHECK(esp_netif_init());
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();

    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));

    wifi_config_t wifi_config = {
        .sta = {
            .ssid = WIFI_SSID,
            .password = WIFI_PASSWORD,
        },
    };
    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA));
    ESP_ERROR_CHECK(esp_wifi_set_config(ESP_IF_WIFI_STA, &wifi_config));
    ESP_ERROR_CHECK(esp_wifi_start());

    // Wait for Wi-Fi to connect
    ESP_LOGI(TAG, "Connecting to Wi-Fi...");
    while (esp_wifi_connect() != ESP_OK) {
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
    ESP_LOGI(TAG, "Connected to Wi-Fi");

    // Configure MQTT client
    esp_mqtt_client_config_t mqtt_cfg = {
        .broker.address.uri = MQTT_BROKER,
        .broker.address.port = MQTT_PORT,
    };
    mqtt_client = esp_mqtt_client_init(&mqtt_cfg);
    esp_mqtt_client_register_event(mqtt_client, ESP_EVENT_ANY_ID, mqtt_event_handler, NULL);
    esp_mqtt_client_start(mqtt_client);

    // Main loop
    while (1) {
        // Publish sensor data every 5 seconds
        publish_sensor_data();
        vTaskDelay(pdMS_TO_TICKS(5000));
    }
}