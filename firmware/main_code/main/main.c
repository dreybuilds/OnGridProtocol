#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "cJSON.h"

// Include header files for sensors
#include "temp_read.c"    // DS18B20 temperature sensor
#include "current_read.c" // Current sensor
#include "voltage_read.c" // Voltage sensor
#include "brightness.c"   // LDR sensor
#include "pzem004t.c"     // PZEM-004T energy monitor

// Tag for logging
static const char *TAG = "MAIN";

// Function to create a JSON string from sensor data
char* create_json_string(float temperature1, float temperature2,
                         int ldr_value, float ldr_voltage, const char* ldr_intensity,
                         int current_adc1, int current_adc2, int current_adc3, int current_adc4,
                         int current_voltage_adc1, int current_voltage_adc2, int current_voltage_adc3, int current_voltage_adc4,
                         int current_ma1, int current_ma2, int current_ma3, int current_ma4,
                         int voltage_adc1, int voltage_adc2, int voltage_adc3, int voltage_adc4,
                         int voltage_mv1, int voltage_mv2, int voltage_mv3, int voltage_mv4,
                         float ac_voltage, float ac_current, float ac_power, float ac_energy,
                         float ac_frequency, float ac_power_factor) {
    cJSON *root = cJSON_CreateObject();

    // Add temperature data
    cJSON *temperature = cJSON_CreateObject();
    cJSON_AddNumberToObject(temperature, "sensor1", temperature1);
    cJSON_AddNumberToObject(temperature, "sensor2", temperature2);
    cJSON_AddItemToObject(root, "temperature", temperature);

    // Add LDR data
    cJSON *ldr = cJSON_CreateObject();
    cJSON_AddNumberToObject(ldr, "raw_value", ldr_value);
    cJSON_AddNumberToObject(ldr, "voltage", ldr_voltage);
    cJSON_AddStringToObject(ldr, "intensity", ldr_intensity);
    cJSON_AddItemToObject(root, "ldr", ldr);

    // Add current sensor data
    cJSON *current = cJSON_CreateObject();
    cJSON_AddNumberToObject(current, "sensor1_adc", current_adc1);
    cJSON_AddNumberToObject(current, "sensor2_adc", current_adc2);
    cJSON_AddNumberToObject(current, "sensor3_adc", current_adc3);
    cJSON_AddNumberToObject(current, "sensor4_adc", current_adc4);

    cJSON_AddNumberToObject(current, "sensor1_voltage_adc", current_voltage_adc1);
    cJSON_AddNumberToObject(current, "sensor2_voltage_adc", current_voltage_adc2);
    cJSON_AddNumberToObject(current, "sensor3_voltage_adc", current_voltage_adc3);
    cJSON_AddNumberToObject(current, "sensor4_voltage_adc", current_voltage_adc4);

    cJSON_AddNumberToObject(current, "sensor1_ma", current_ma1);
    cJSON_AddNumberToObject(current, "sensor2_ma", current_ma2);
    cJSON_AddNumberToObject(current, "sensor3_ma", current_ma3);
    cJSON_AddNumberToObject(current, "sensor4_ma", current_ma4);
    cJSON_AddItemToObject(root, "current", current);

    // Add voltage sensor data
    cJSON *voltage = cJSON_CreateObject();
    cJSON_AddNumberToObject(voltage, "sensor1_adc", voltage_adc1);
    cJSON_AddNumberToObject(voltage, "sensor2_adc", voltage_adc2);
    cJSON_AddNumberToObject(voltage, "sensor3_adc", voltage_adc3);
    cJSON_AddNumberToObject(voltage, "sensor4_adc", voltage_adc4);

    cJSON_AddNumberToObject(voltage, "sensor1_mv", voltage_mv1);
    cJSON_AddNumberToObject(voltage, "sensor2_mv", voltage_mv2);
    cJSON_AddNumberToObject(voltage, "sensor3_mv", voltage_mv3);
    cJSON_AddNumberToObject(voltage, "sensor4_mv", voltage_mv4);
    cJSON_AddItemToObject(root, "voltage", voltage);

    // Add PZEM-004T data
    cJSON *pzem = cJSON_CreateObject();
    cJSON_AddNumberToObject(pzem, "voltage", ac_voltage);
    cJSON_AddNumberToObject(pzem, "current", ac_current);
    cJSON_AddNumberToObject(pzem, "power", ac_power);
    cJSON_AddNumberToObject(pzem, "energy", ac_energy);
    cJSON_AddNumberToObject(pzem, "frequency", ac_frequency);
    cJSON_AddNumberToObject(pzem, "power_factor", ac_power_factor);
    cJSON_AddItemToObject(root, "pzem", pzem);

    // Convert JSON object to string
    char *json_str = cJSON_PrintUnformatted(root);
    cJSON_Delete(root);

    return json_str;
}

void app_main(void) {
    // Initialize all sensors
    ds18b20_init();          // Initialize DS18B20 temperature sensors
    current_sensor_init();   // Initialize current sensors
    voltage_sensor_init();   // Initialize voltage sensors
    ldr_sensor_init(LDR_ADC_CHANNEL); // Initialize LDR sensor
    pzem_uart_init();        // Initialize PZEM-004T

    // Variables to store sensor readings
    int current_raw_value1, current_raw_value2, current_raw_value3, current_raw_value4;
    int current_voltage_mv1, current_voltage_mv2, current_voltage_mv3, current_voltage_mv4;
    int current_ma1, current_ma2, current_ma3, current_ma4;
    int voltage_raw_value1, voltage_raw_value2, voltage_raw_value3, voltage_raw_value4;
    int voltage_mv1, voltage_mv2, voltage_mv3, voltage_mv4;
    int ldr_value;
    float ldr_voltage;
    const char* ldr_intensity;
    float ac_voltage = 0, ac_current = 0, ac_power = 0, ac_energy = 0, ac_frequency = 0, ac_power_factor = 0;
    uint8_t response[25];

    while (1) {
        // Read PZEM-004T data
        pzem_send_command((uint8_t *)pzem_read_cmd, sizeof(pzem_read_cmd));
        vTaskDelay(pdMS_TO_TICKS(1000));
        int len = pzem_read_data(response, sizeof(response));

        if (len > 0) {
            ac_voltage = ((response[3] << 8) | response[4]) / 10.0;
            ac_current = ((response[5] << 8) | response[6]) / 1000.0;
            ac_power = ((response[7] << 8) | response[8]) / 10.0;
            ac_energy = ((response[9] << 16) | (response[10] << 8) | response[11]) / 1000.0;
            ac_frequency = ((response[12] << 8) | response[13]) / 10.0;
            ac_power_factor = ((response[14] << 8) | response[15]) / 100.0;
        }

        // Read LDR data
        ldr_value = ldr_sensor_read_raw(LDR_ADC_CHANNEL);
        ldr_voltage = ldr_sensor_read_voltage(ldr_value);
        ldr_intensity = ldr_sensor_classify_intensity(ldr_value);

        // Read current sensor data
        current_raw_value1 = current_sensor_read_raw(ADC_CHANNEL_1);
        current_raw_value2 = current_sensor_read_raw(ADC_CHANNEL_2);
        current_raw_value3 = current_sensor_read_raw(ADC_CHANNEL_3);
        current_raw_value4 = current_sensor_read_raw(ADC_CHANNEL_4);

        current_voltage_mv1 = current_sensor_read_mv(ADC_CHANNEL_1, current_raw_value1);
        current_voltage_mv2 = current_sensor_read_mv(ADC_CHANNEL_2, current_raw_value2);
        current_voltage_mv3 = current_sensor_read_mv(ADC_CHANNEL_3, current_raw_value3);
        current_voltage_mv4 = current_sensor_read_mv(ADC_CHANNEL_4, current_raw_value4);

        current_ma1 = current_sensor_read_ma(current_voltage_mv1, SENSOR_SENSITIVITY_HC);
        current_ma2 = current_sensor_read_ma(current_voltage_mv2, SENSOR_SENSITIVITY_HC);
        current_ma3 = current_sensor_read_ma(current_voltage_mv3, SENSOR_SENSITIVITY_HC);
        current_ma4 = current_sensor_read_ma(current_voltage_mv4, SENSOR_SENSITIVITY_LC);

        // Read voltage sensor data
        voltage_raw_value1 = voltage_sensor_read_raw(1);
        voltage_raw_value2 = voltage_sensor_read_raw(2);
        voltage_raw_value3 = voltage_sensor_read_raw(3);
        voltage_raw_value4 = voltage_sensor_read_raw(4);

        voltage_mv1 = voltage_sensor_read_mv(1, voltage_raw_value1);
        voltage_mv2 = voltage_sensor_read_mv(2, voltage_raw_value2);
        voltage_mv3 = voltage_sensor_read_mv(3, voltage_raw_value3);
        voltage_mv4 = voltage_sensor_read_mv(4, voltage_raw_value4);

        // Read temperature sensor data
        float temperature1 = ds18b20_read_temp(0);
        float temperature2 = ds18b20_read_temp(1);

        // Create JSON string
        char *json_str = create_json_string(temperature1, temperature2,
                                           ldr_value, ldr_voltage, ldr_intensity,
                                           current_raw_value1, current_raw_value2, current_raw_value3, current_raw_value4,
                                           current_voltage_mv1, current_voltage_mv2, current_voltage_mv3, current_voltage_mv4,
                                           current_ma1, current_ma2, current_ma3, current_ma4,
                                           voltage_raw_value1, voltage_raw_value2, voltage_raw_value3, voltage_raw_value4,
                                           voltage_mv1, voltage_mv2, voltage_mv3, voltage_mv4,
                                           ac_voltage, ac_current, ac_power, ac_energy,
                                           ac_frequency, ac_power_factor);

        // Print JSON string to console
        ESP_LOGI(TAG, "JSON Data: %s", json_str);

        // Free the JSON string
        free(json_str);

        // Delay before the next reading
        vTaskDelay(pdMS_TO_TICKS(5000));
    }
}