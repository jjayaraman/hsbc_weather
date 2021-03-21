package com.hsbc.weatherapi.util;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

/**
 * Utility to make http calls using Java11 feature
 *
 * @author Jayakumar Jayaraman
 */
public class HttpUtil {


    public static HttpResponse send(String uri) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder(URI.create(uri))
                .header("accept", "application/json")
                .build();

        return HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
    }
}
