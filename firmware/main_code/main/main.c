#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"

// Include header files for sensors
#include "temp_read.c"    // DS18B20 temperature sensor
#include "current_read.c" // Current sensor
#include "voltage_read.c" // Voltage sensor
#include "brightness.c"   // LDR sensor
#include "pzem004t.c"     // PZEM-004T energy monitor

// Tag for logging
static const char *TAG = "MAIN";

void app_main(void) {
    // Initialize all sensors
    ds18b20_init();          // Initialize DS18B20 temperature sensors
    current_sensor_init();   // Initialize current sensors
    voltage_sensor_init();   // Initialize voltage sensors
    ldr_sensor_init(LDR_ADC_CHANNEL); // Initialize LDR sensor
    // Initialize UART for PZEM-004T communication
    pzem_uart_init();
    uint8_t response[25];
    // Variables to store sensor readings
    int raw_value1, raw_value2, raw_value3, raw_value4;
    int voltage_mv1, voltage_mv2, voltage_mv3, voltage_mv4;
    int current_ma1, current_ma2, current_ma3, current_ma4;
    int ac_voltage, ac_current, ac_power, ac_energy,ac_frequency, ac_power_factor;

    float temperature;

    while (1) {

        // Send the read command to the PZEM-004T
        pzem_send_command((uint8_t *)pzem_read_cmd, sizeof(pzem_read_cmd));
        // Read the response from the PZEM-004T
        int len = pzem_read_data(response, sizeof(response));

        if (len > 0) {
            // Parse and print the measurement data
            pzem_parse_data(response);

        } else {
            ESP_LOGE(TAG, "No data received from PZEM-004T");
        }

        // Read the raw analog value from the LDR
        int ldr_value = ldr_sensor_read_raw(LDR_ADC_CHANNEL);

        // Convert the raw analog value to voltage
        float voltage = ldr_sensor_read_voltage(ldr_value);

        // Classify light intensity
        const char* intensity = ldr_sensor_classify_intensity(ldr_value);

        // Read and process current sensor data
        raw_value1 = current_sensor_read_raw(ADC_CHANNEL_1);
        raw_value2 = current_sensor_read_raw(ADC_CHANNEL_2);
        raw_value3 = current_sensor_read_raw(ADC_CHANNEL_3);
        raw_value4 = current_sensor_read_raw(ADC_CHANNEL_4);

        voltage_mv1 = current_sensor_read_mv(ADC_CHANNEL_1, raw_value1);
        voltage_mv2 = current_sensor_read_mv(ADC_CHANNEL_2, raw_value2);
        voltage_mv3 = current_sensor_read_mv(ADC_CHANNEL_3, raw_value3);
        voltage_mv4 = current_sensor_read_mv(ADC_CHANNEL_4, raw_value4);

        current_ma1 = current_sensor_read_ma(voltage_mv1, SENSOR_SENSITIVITY_HC);
        current_ma2 = current_sensor_read_ma(voltage_mv2, SENSOR_SENSITIVITY_HC);
        current_ma3 = current_sensor_read_ma(voltage_mv3, SENSOR_SENSITIVITY_HC);
        current_ma4 = current_sensor_read_ma(voltage_mv4, SENSOR_SENSITIVITY_LC);

        // Read and process voltage sensor data
        raw_value1 = voltage_sensor_read_raw(1);
        raw_value2 = voltage_sensor_read_raw(2);
        raw_value3 = voltage_sensor_read_raw(3);
        raw_value4 = voltage_sensor_read_raw(4);

        voltage_mv1 = voltage_sensor_read_mv(1, raw_value1);
        voltage_mv2 = voltage_sensor_read_mv(2, raw_value2);
        voltage_mv3 = voltage_sensor_read_mv(3, raw_value3);
        voltage_mv4 = voltage_sensor_read_mv(4, raw_value4);

        // Read and process temperature sensor data
        for (int i = 0; i < 2; i++) {
            float temperature = ds18b20_read_temp(i);
        }

        // Delay before the next reading
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}