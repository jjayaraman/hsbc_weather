# hsbc_weather
Weather Application

This application consists of 2 parts.

1) weather-api - Rest API built using Java 11, Springboot, Maven
2) weather-ui  - The UI application built using ReactJS 17, Bootstrap, Javascript, Html, CSS

Tools used - InteliJ IDEA, VSCode

Application Setup:-

1) Source code:-

  - Download the source code from github from repo https://github.com/jjayaraman/hsbc_weather
  - Or git clone git@github.com:jjayaraman/hsbc_weather.git



2) weather-api

  - Import the project into IDE as a maven project
  - Run the command **mvn clean install**
  - Run command  **./mvnw spring-boot:run** to start the application
  - The API server runs on URI http://localhost:8080/api/weather
  - The CORS is configured and the UI server whitelisted for http://localhost:3000
  - Swagger - http://localhost:8080/swagger-ui/index.html?configUrl=/weather/swagger-config

2) weather-ui

  - Open the folder weather-ui in VSCode
  - In terminal run the below commands 
  - **npm install**
  - **npm start**
  - The UI server runs on http://localhost:3000
  - Test cases can be run using command **npm test**
 


