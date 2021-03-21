package com.hsbc.weatherapi.service;

import java.io.IOException;
import java.net.http.HttpResponse;

/**
 * @author Jayakumar Jayaraman
 */
public interface WeatherService {
    HttpResponse getWeather() throws IOException, InterruptedException;
}
