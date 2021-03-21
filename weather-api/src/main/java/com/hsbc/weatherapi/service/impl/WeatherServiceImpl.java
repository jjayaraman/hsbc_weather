package com.hsbc.weatherapi.service.impl;

import com.hsbc.weatherapi.service.WeatherService;
import com.hsbc.weatherapi.util.HttpUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.http.HttpResponse;

/**
 * Service to make an external API call
 *
 * @author Jayakumar Jayaraman
 */
@Service
public class WeatherServiceImpl implements WeatherService {

    @Value(value = "${weather.uri}")
    private String WEATHER_URI;

    @Override
    public HttpResponse getWeather() throws IOException, InterruptedException {
        return HttpUtil.send(WEATHER_URI);
    }


}
