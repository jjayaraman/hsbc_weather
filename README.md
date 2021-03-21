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
 
 
 Application Screenshots:-
 
<img width="1780" alt="Screenshot 2021-03-21 at 17 11 06" src="https://user-images.githubusercontent.com/3359193/111914302-4fcd8400-8a69-11eb-82ed-a91d9e1625e7.png">

<img width="2048" alt="Screenshot 2021-03-21 at 17 12 50" src="https://user-images.githubusercontent.com/3359193/111914293-4d6b2a00-8a69-11eb-8fcd-fcf029a016b9.png">

<img width="1765" alt="Screenshot 2021-03-21 at 17 12 30" src="https://user-images.githubusercontent.com/3359193/111914296-4f34ed80-8a69-11eb-8235-72c349b4a86b.png">

<img width="1761" alt="Screenshot 2021-03-21 at 17 12 07" src="https://user-images.githubusercontent.com/3359193/111914298-4f34ed80-8a69-11eb-92a7-3855b3484d6f.png">

<img width="1830" alt="Screenshot 2021-03-21 at 17 11 20" src="https://user-images.githubusercontent.com/3359193/111914300-4fcd8400-8a69-11eb-9877-18ef7fa070f7.png">

<img width="1833" alt="Screenshot 2021-03-21 at 17 13 13" src="https://user-images.githubusercontent.com/3359193/111914292-4d6b2a00-8a69-11eb-96c8-1da4045eb61c.png">

<img width="2048" alt="Screenshot 2021-03-21 at 17 18 50" src="https://user-images.githubusercontent.com/3359193/111914370-8acfb780-8a69-11eb-88bf-6fc7237d1a7d.png">


