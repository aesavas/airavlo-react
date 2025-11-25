type Coordinate = {lat: number, lng: number}

export type Continent =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface IAirport {
  code: string
  name: string
  city: string
  country: string
  type: string
  continent: string
  timezone: string
  passengerVolume: string
  yearOpened: number
  majorAirlines: string[]
  coordinates: Coordinate
  website: string
}

export interface ICountry {
  name: string
  countryCode: string
  continent: string
  flag: string
}

export type Types = "Domestic" | "International"

export type PassengerVolume = "Medium" | "Large" | "Major Hub"

export interface ISortOption {
  id: number
  menuText: string
  column: string
  direction: "asc" | "desc"
}
