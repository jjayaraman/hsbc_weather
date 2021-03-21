package com.hsbc.weatherapi.controller;

import com.hsbc.weatherapi.service.WeatherService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.http.HttpResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * REST controller to expose API
 *
 * @author Jayakumar Jayaraman
 */
@RequestMapping(path = "/api")
@RestController
public class WeatherController {

    final Logger log = LogManager.getLogger(this.getClass().getName());

    @Autowired
    private WeatherService weatherService;

    private long counter = 1;

    @GetMapping(path = "/weather", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getWeather() {

        try {
            HttpResponse response = weatherService.getWeather();
            log.info("Weather api called {} time(s), and the response status code is {} ", counter++, response.statusCode());
            return ResponseEntity.status(response.statusCode()).body(response.body().toString());

        } catch (IOException e) {
            log.error("IOException occurred: " + e.getMessage());
        } catch (InterruptedException e) {
            log.error("InterruptedException occurred : " + e.getMessage());
        }
        return ResponseEntity.badRequest().build();
    }
}
