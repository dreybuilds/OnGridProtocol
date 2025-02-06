#include <stdio.h>
#include "driver/uart.h"
#include "driver/gpio.h"
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_mqtt.h"
#include "cJSON.h"
#include "pzem_uart.h"
#include "ds18b20.h"


// Sensor configurations (from your code)
#define PZEM_UART_PORT UART_NUM_1
#define PZEM_TX_PIN GPIO_NUM_17
#define PZEM_RX_PIN GPIO_NUM_16
#define PZEM_BAUD_RATE 9600
#define PZEM_BUF_SIZE 1024

#define LDR_ADC_CHANNEL ADC1_CHANNEL_4

#define EXAMPLE_ONEWIRE_BUS_GPIO 13
#define EXAMPLE_ONEWIRE_MAX_DS18B20 2

// // MQTT configuration
// #define MQTT_BROKER "mqtt://your_broker_ip" // Replace with your MQTT broker IP
// #define MQTT_TOPIC "sensor/data"

// static const char *TAG = "Sensor_MQTT";

// // Global MQTT client handle
// esp_mqtt_client_handle_t mqtt_client;

// // Function to initialize MQTT
// void mqtt_init() {
//     esp_mqtt_client_config_t mqtt_cfg = {
//         .uri = MQTT_BROKER,
//     };
//     mqtt_client = esp_mqtt_client_init(&mqtt_cfg);
//     esp_mqtt_client_start(mqtt_client);
//     ESP_LOGI(TAG, "MQTT client initialized");
// }

// // Function to publish sensor data via MQTT
// void mqtt_publish_data(cJSON *sensor_data) {
//     char *json_str = cJSON_Print(sensor_data);
//     if (json_str) {
//         esp_mqtt_client_publish(mqtt_client, MQTT_TOPIC, json_str, 0, 1, 0);
//         ESP_LOGI(TAG, "Published: %s", json_str);
//         free(json_str);
//     }
// }

// Function to read PZEM-004T data (from your code)
void pzem_read_data(float *voltage, float *current, float *power, float *energy, float *frequency, float *power_factor) {
    // Your PZEM-004T reading logic here
    *voltage = 230.0;
    *current = 1.234;
    *power = 283.5;
    *energy = 12.345;
    *frequency = 50.0;
    *power_factor = 0.98;
}

// Function to read LDR data (from your code)
int ldr_read_data() {
    return adc1_get_raw(LDR_ADC_CHANNEL);
}

// Function to read DS18B20 data (from your code)
float ds18b20_read_data() {
    return 25.5; // Example temperature
}

// Function to read current sensor data (from your code)
int current_sensor_read_data(int channel) {
    return 500; // Example current in mA
}

// Function to read voltage sensor data (from your code)
int voltage_sensor_read_data(int channel) {
    return 3300; // Example voltage in mV
}

void app_main(void) {
    // Initialize MQTT
    mqtt_init();

    // Initialize sensors (add your sensor initialization code here)
    pzem_uart_init();
    adc1_config_width(ADC_WIDTH_BIT_12);
    adc1_config_channel_atten(LDR_ADC_CHANNEL, ADC_ATTEN_DB_11);

    while (1) {
        // Create a JSON object to store sensor data
        cJSON *sensor_data = cJSON_CreateObject();

        // Read PZEM-004T data
        float voltage, current, power, energy, frequency, power_factor;
        pzem_read_data(&voltage, &current, &power, &energy, &frequency, &power_factor);
        cJSON_AddNumberToObject(sensor_data, "voltage", voltage);
        cJSON_AddNumberToObject(sensor_data, "current", current);
        cJSON_AddNumberToObject(sensor_data, "power", power);
        cJSON_AddNumberToObject(sensor_data, "energy", energy);
        cJSON_AddNumberToObject(sensor_data, "frequency", frequency);
        cJSON_AddNumberToObject(sensor_data, "power_factor", power_factor);

        // Read LDR data
        int ldr_value = ldr_read_data();
        cJSON_AddNumberToObject(sensor_data, "ldr_value", ldr_value);

        // Read DS18B20 data
        float temperature = ds18b20_read_data();
        cJSON_AddNumberToObject(sensor_data, "temperature", temperature);

        // Read current sensor data
        int current_ma1 = current_sensor_read_data(1);
        int current_ma2 = current_sensor_read_data(2);
        cJSON_AddNumberToObject(sensor_data, "current_ma1", current_ma1);
        cJSON_AddNumberToObject(sensor_data, "current_ma2", current_ma2);

        // Read voltage sensor data
        int voltage_mv1 = voltage_sensor_read_data(1);
        int voltage_mv2 = voltage_sensor_read_data(2);
        cJSON_AddNumberToObject(sensor_data, "voltage_mv1", voltage_mv1);
        cJSON_AddNumberToObject(sensor_data, "voltage_mv2", voltage_mv2);

        // // Publish sensor data via MQTT
        // mqtt_publish_data(sensor_data);

        // Free the JSON object
        cJSON_Delete(sensor_data);

        // Delay before the next reading
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}