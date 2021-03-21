
/**
 *  Test server with mock data using 'Mock Service Worker' framework  https://mswjs.io/docs/comparison
 *  for unit testing
 */

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import cities from './mock/data.json'
const API_PREFIX = process.env.REACT_APP_WEATHER_API_PREFIX;
const URI = API_PREFIX + "/api/weather";

// Sets up the mock service worker (msw)
const server = setupServer(
    rest.get(URI, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(cities)
        )
    })
)

// Life cycle for msw testing
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


export { server, rest }