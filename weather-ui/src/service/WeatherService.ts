import { Cities, List } from '../model/model';

const API_PREFIX = process.env.REACT_APP_WEATHER_API_PREFIX;

export default class WeatherService {

    /**
     * Gets all the weather data
     * 
     * @returns 
     */
    async getAllWeather(): Promise<Cities> {

        const URI = API_PREFIX + "/api/weather";
        try {
            const result = await fetch(URI)

            if (!result.ok) {
                throw new Error(`Weather API request failed. Status  ${result.status}`);
            }
            const cities = await result.json()
            return cities;

        } catch (error) {
            return Promise.reject("Error calling API...")
        }

    }


    /**
     * 
     * Search the weather data for the given city name search criteria. 
     * Search is case insensitve
     * 
     * @param searchString 
     * 
     * @returns 
     */
    async findCities(searchString: string): Promise<Array<List>> {

        let cities: Array<List> = [];

        if (!searchString) {
            return cities;
        }

        await this.getAllWeather()
            .then(data => {
                if (searchString === "all") {
                    cities = data.list
                } else {
                    cities = data.list.filter(city => city.name.toLowerCase().startsWith(searchString.toLowerCase()))
                }
            })
            .catch(er => {
                cities = []
                return Promise.reject("Error calling API...")
            })
        return cities;
    }
}
