package com.hsbc.weatherapi.controller;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
/**
 * REST controller integration testing
 *
 * @author Jayakumar Jayraman
 */
class WeatherControllerTest {

    @Autowired
    public WeatherController weatherController;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getWeather() {
        ResponseEntity<String> responseEntity = weatherController.getWeather();
        assertNotNull(responseEntity);
        assertNotNull(responseEntity.getBody());
        assertNotNull(responseEntity.getStatusCode());
        assertEquals(200, responseEntity.getStatusCode().value());
        assertFalse(responseEntity.getStatusCode().isError());
        assertTrue(responseEntity.getStatusCode().is2xxSuccessful());
    }
}