package com.hsbc.weatherapi.util;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Http util unit testing
 *
 * @author Jayakumar Jayraman
 */
class HttpUtilTest {

    final String URI = "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22";

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void send() throws IOException, InterruptedException {

        HttpResponse response = HttpUtil.send(URI);
        assertNotNull(response);
        assertNotNull(response.body());
        assertEquals(200, response.statusCode());
    }
}