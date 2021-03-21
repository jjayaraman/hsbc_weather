import service from './WeatherService';

/**
 *  Unit tests with mock data using 'Mock Service Worker' framework  https://mswjs.io/docs/comparison
 * 
 */
describe('WeatherService test suite with mock data', () => {
    it('should get search results of size 3 for searct text z', async () => {
        let cities;
        await service.prototype.findCities("z")
            .then(data => {
                cities = data;
                expect(cities).toBeTruthy()
                expect(cities.length).toEqual(3)
            })
    })

    it('should get search results of size 1 for searct text a', async () => {
        let cities;
        await service.prototype.findCities("a")
            .then(data => {
                cities = data;
                expect(cities).toBeTruthy()
                expect(cities.length).toEqual(1)
            })
    })

    it('should get search results of size 0 for searct text c', async () => {
        let cities;
        await service.prototype.findCities("c")
            .then(data => {
                cities = data;
                expect(cities).toBeTruthy()
                expect(cities.length).toEqual(0)
            })
    })
})
