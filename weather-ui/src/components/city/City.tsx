import { List } from "../../model/model"
import { Table } from "react-bootstrap"

interface CityProps {
    cities: Array<List>;
}

const City: React.FC<CityProps> = (props) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Wind</th>
                        <th>Forecast</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cities.map((city, idx) =>
                        <tr key={idx} style={{ textAlign: 'left' }}>
                            <td>{idx + 1}</td>
                            <td>{city.name}</td>
                            <td>
                                <span className="badge badge-info">{city.main.temp} &deg;С</span>
                                <span> {city.main.temp_min} ~ {city.main.temp_max} &deg;С</span>
                            </td>
                            <td><span> {city.main.humidity}</span></td>
                            <td><span> {city.wind.speed} m/s</span></td>
                            <td>
                                <div>
                                    <img src={"http://openweathermap.org/img/wn/" + city.weather[0].icon + "@2x.png"} alt="" width="30px" height="30px" />
                                    {city.weather[0].description}</div>
                            </td>

                        </tr>
                    )}


                </tbody>
            </Table>
        </div >
    )
}

export default City