#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "driver/adc.h"

// Define the analog pin where the LDR is connected
#define LDR_ADC_CHANNEL ADC1_CHANNEL_1 // GPIO4 corresponds to ADC1_CHANNEL_1 on ESP32-S3
#define ADC_RESOLUTION 4095
#define ADC_REF_VOLTAGE 3.3 // Reference voltage in volts

// Tag for logging
static const char *TAG = "LDR_SENSOR";

// Function to initialize the ADC
void ldr_sensor_init() {
    adc1_config_width(ADC_WIDTH_BIT_12); // Set ADC resolution to 12 bits (0-4095)
    adc1_config_channel_atten(LDR_ADC_CHANNEL, ADC_ATTEN_DB_12); // Set attenuation to 11dB for full range (0-3.3V)
}

// Function to read the raw ADC value
int ldr_sensor_read_raw() {
    return adc1_get_raw(LDR_ADC_CHANNEL);
}

// Function to convert raw ADC value to voltage
float ldr_sensor_read_voltage(int raw_value) {
    return raw_value * (ADC_REF_VOLTAGE / ADC_RESOLUTION);
}

// Function to classify light intensity
const char* ldr_sensor_get_intensity(int raw_value) {
    if (raw_value < 1000) {
        return "High";
    } else if (raw_value < 2000) {
        return "Dim";
    } else {
        return "Low";
    }
}

typedef struct {
    int raw_value;
    float voltage;
    const char* intensity;
} LDRReading;

// Function to read LDR sensor data
LDRReading ldr_sensor_read_data() {
    LDRReading reading;
    reading.raw_value = ldr_sensor_read_raw();
    reading.voltage = ldr_sensor_read_voltage(reading.raw_value);
    reading.intensity = ldr_sensor_get_intensity(reading.raw_value);
    return reading;
}