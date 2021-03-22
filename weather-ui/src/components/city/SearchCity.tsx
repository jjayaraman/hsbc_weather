import React, { useState } from 'react'
import City from './City'

import weatherService from './../../service/WeatherService'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { List } from '../../model/model'

const SearchCity = () => {

    const [name, setname] = useState("")
    const [cities, setcities] = useState<Array<List>>([])
    const [error, seterror] = useState(false)


    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setname(value)

        await weatherService.prototype.findCities(value)
            .then(data => {
                setcities(data)
            })
            .catch(er => {
                seterror(true)
                setcities([])
            })
    }

    const showAll = async () => {
        setname("")

        await weatherService.prototype.findCities("all")
            .then(data => {
                setcities(data)
                seterror(false)
            })
            .catch(er => {
                seterror(true)
                setcities([])
            })
    }

    const clear = () => {
        setname("")
        setcities([])
        seterror(false)
    }


    return (
        <div>
            <h2>Weather Station</h2>

            <br /><br />

            <Container>

                <div style={{ textAlign: 'left' }}>
                    {error &&
                        <Alert variant="danger">A system error occured.</Alert>
                    }

                    {!error && cities.length !== 0 &&
                        <Alert variant="success">Search success and found {cities.length} cities</Alert>
                    }

                    {!error && name && cities.length === 0 &&
                        <Alert variant="warning">No results found for your search</Alert>
                    }

                </div>

                <Card >
                    <Card.Body>

                        <Row>
                            <Col md={2}>
                                <label htmlFor="name">City Name</label>
                            </Col>

                            <Col md={3}>
                                <input id="name" data-testid="name" type="text" value={name} onChange={handleOnChange} style={{ 'width': '100%' }} placeholder="Enter a city name to search"></input>
                            </Col>

                            <Col md={3}>
                                <Button data-testid="clear" type="button" variant="warning" onClick={clear} className="mr-1">Clear</Button>
                                <Button data-testid="showAll" type="button" onClick={showAll} className="mr-1">Show All</Button>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Container>



            <Container>
                <br />
                <Row>
                    <Col>
                        {cities.length !== 0 &&
                            <City cities={cities} />
                        }
                    </Col>
                </Row>
            </Container>

            <br /><br />
        </div >
    )
}



export default SearchCity
