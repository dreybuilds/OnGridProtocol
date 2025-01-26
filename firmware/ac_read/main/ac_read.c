#include <stdio.h>
#include "driver/uart.h"
#include "driver/gpio.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// PZEM-004T UART configuration
#define PZEM_UART_PORT UART_NUM_1
#define PZEM_TX_PIN GPIO_NUM_17
#define PZEM_RX_PIN GPIO_NUM_16
#define PZEM_BAUD_RATE 9600
#define PZEM_BUF_SIZE 1024

// PZEM-004T command to read measurement data
static const uint8_t pzem_read_cmd[] = {0xF8, 0x04, 0x00, 0x00, 0x00, 0x0A, 0x64, 0x64};

static const char *TAG = "PZEM-004T";

// Function to send a command to the PZEM-004T
void pzem_send_command(uint8_t *cmd, size_t len) {
    uart_write_bytes(PZEM_UART_PORT, (const char *)cmd, len);
}

// Function to read data from the PZEM-004T
int pzem_read_data(uint8_t *buf, size_t len) {
    return uart_read_bytes(PZEM_UART_PORT, buf, len, pdMS_TO_TICKS(100));
}

// Function to initialize UART for PZEM-004T communication
void pzem_uart_init() {
    uart_config_t uart_config = {
        .baud_rate = PZEM_BAUD_RATE,
        .data_bits = UART_DATA_8_BITS,
        .parity = UART_PARITY_DISABLE,
        .stop_bits = UART_STOP_BITS_1,
        .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        .source_clk = UART_SCLK_DEFAULT,
    };

    // Configure UART parameters
    ESP_ERROR_CHECK(uart_param_config(PZEM_UART_PORT, &uart_config));

    // Set UART pins
    ESP_ERROR_CHECK(uart_set_pin(PZEM_UART_PORT, PZEM_TX_PIN, PZEM_RX_PIN, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE));

    // Install UART driver
    ESP_ERROR_CHECK(uart_driver_install(PZEM_UART_PORT, PZEM_BUF_SIZE, PZEM_BUF_SIZE, 0, NULL, 0));
}

// Function to parse PZEM-004T measurement data
void pzem_parse_data(uint8_t *data) {
    float voltage = ((data[3] << 8) | data[4]) / 10.0;
    float current = ((data[5] << 8) | data[6]) / 1000.0;
    float power = ((data[7] << 8) | data[8]) / 10.0;
    float energy = ((data[9] << 16) | (data[10] << 8) | data[11]) / 1000.0;
    float frequency = ((data[12] << 8) | data[13]) / 10.0;
    float power_factor = ((data[14] << 8) | data[15]) / 100.0;

    ESP_LOGI(TAG, "Voltage: %.1f V", voltage);
    ESP_LOGI(TAG, "Current: %.3f A", current);
    ESP_LOGI(TAG, "Power: %.1f W", power);
    ESP_LOGI(TAG, "Energy: %.3f kWh", energy);
    ESP_LOGI(TAG, "Frequency: %.1f Hz", frequency);
    ESP_LOGI(TAG, "Power Factor: %.2f", power_factor);
}

void app_main(void) {
    // Initialize UART for PZEM-004T communication
    pzem_uart_init();

    uint8_t response[25];

    while (1) {
        // Send the read command to the PZEM-004T
        pzem_send_command((uint8_t *)pzem_read_cmd, sizeof(pzem_read_cmd));

        // Wait for the response
        vTaskDelay(pdMS_TO_TICKS(200));

        // Read the response from the PZEM-004T
        int len = pzem_read_data(response, sizeof(response));

        if (len > 0) {
            // Parse and print the measurement data
            pzem_parse_data(response);
        } else {
            ESP_LOGE(TAG, "No data received from PZEM-004T");
        }

        // Delay before the next reading
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}