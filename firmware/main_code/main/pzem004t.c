#include "driver/uart.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// PZEM-004T UART configuration
#define PZEM_UART_PORT UART_NUM_2
#define PZEM_TX_PIN GPIO_NUM_1
#define PZEM_RX_PIN GPIO_NUM_3

#define PZEM_BAUD_RATE 9600
#define PZEM_BUF_SIZE 1024

// Tag for logging
static const char *TAG_5 = "PZEM-004T";

// PZEM-004T command to read measurement data
static const uint8_t pzem_read_cmd[] = {0xF8, 0x04, 0x00, 0x00, 0x00, 0x0A, 0x64, 0x64};

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

    ESP_LOGI(TAG_5, "UART initialized for PZEM-004T communication");
}

// Function to parse PZEM-004T measurement data
void pzem_parse_data(uint8_t *data) {
    float voltage = ((data[3] << 8) | data[4]) / 10.0;
    float current = ((data[5] << 8) | data[6]) / 1000.0;
    float power = ((data[7] << 8) | data[8]) / 10.0;
    float energy = ((data[9] << 16) | (data[10] << 8) | data[11]) / 1000.0;
    float frequency = ((data[12] << 8) | data[13]) / 10.0;
    float power_factor = ((data[14] << 8) | data[15]) / 100.0;

}