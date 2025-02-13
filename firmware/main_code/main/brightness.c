#include "driver/adc.h"
#include "esp_log.h"

// Tag for logging
static const char *TAG_4 = "LDR_SENSOR";
// Define the analog pin where the LDR is connected
#define LDR_ADC_CHANNEL ADC1_CHANNEL_4 // GPIO4 corresponds to ADC1_CHANNEL_4 on ESP32-S3

// Initialize the LDR sensor
void ldr_sensor_init(adc1_channel_t adc_channel) {
    // Configure the ADC
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits (0-4095)
    adc1_config_channel_atten(adc_channel, ADC_ATTEN_DB_12); // Set attenuation to 11dB for full range (0-3.3V)
    ESP_LOGI(TAG_4, "LDR sensor initialized on ADC channel %d", adc_channel);
}

// Read the raw analog value from the LDR
int ldr_sensor_read_raw(adc1_channel_t adc_channel) {
    return adc1_get_raw(adc_channel);
}

// Convert the raw analog value to voltage
float ldr_sensor_read_voltage(int raw_value) {
    return raw_value * (3.3 / 4095.0); // ESP32 ADC resolution is 12-bit (0-4095), reference voltage is 3.3V
}

// Classify light intensity based on the raw value
const char* ldr_sensor_classify_intensity(int raw_value) {
    if (raw_value < 1000) {
        return "High";
    } else if (raw_value < 2000) {
        return "Dim";
    } else {
        return "Low";
    }
}