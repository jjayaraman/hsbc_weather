package com.hsbc.weatherapi.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Service integration testing
 *
 * @author Jayakumar Jayraman
 */
@SpringBootTest
class WeatherServiceTest {

    @Autowired
    public WeatherService weatherService;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getWeather() throws IOException, InterruptedException {
        HttpResponse response = weatherService.getWeather();
        assertNotNull(response.body());
        assertEquals(200, response.statusCode());
        System.out.println(response.body());

    }
}