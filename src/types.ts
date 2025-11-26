/**
 * Coordinate interface
 */
type Coordinate = {lat: number, lng: number}

/**
 * Continent types
 */
export type Continent =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

/**
 * Airport interface
 */
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

/**
 * Country interface
 */
export interface ICountry {
  name: string
  countryCode: string
  continent: string
  flag: string
}

/**
 * Types enum
 */
export type Types = "Domestic" | "International"

/**
 * Passenger volume enum
 */
export type PassengerVolume = "Medium" | "Large" | "Major Hub"

/**
 * Sort option interface
 */
export interface ISortOption {
  id: number
  menuText: string
  column: string
  direction: "asc" | "desc"
}

/**
 * Filters interface
 */
export interface IFilters {
  continent: string
  country: string
  passengerVolume: string
  type: string
}
