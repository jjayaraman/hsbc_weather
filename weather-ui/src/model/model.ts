export interface Cities {
    cod: string;
    calctime: number;
    cnt: number;
    list: List[];
}

export interface List {
    id: number;
    name: string;
    coord: Coord;
    main: MainClass;
    dt: number;
    wind: Wind;
    rain?: Rain;
    clouds: Clouds;
    weather: Weather[];
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface MainClass {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
}

export interface Rain {
    "3h": number;
}

export interface Weather {
    id: number;
    main: MainEnum;
    description: string;
    icon: string;
}

export enum MainEnum {
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface Wind {
    speed: number;
    deg: number;
    var_beg?: number;
    var_end?: number;
}
