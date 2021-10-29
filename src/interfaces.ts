 
export interface OptionInfo {
  id: string,
  name: string,
  price: number,
  nextOptId: string[]
}

export interface Option extends OptionInfo {
  optionType: string
}

export interface DBOption {
  optionType: string,
  data: OptionInfo[],
}

export interface JSONFile {
  options: DBOption[]
}

export interface Location {
  lat: number,
  lng: number,
  label : string,
  name: string
}

export interface MapStoreState {
  labels: string[],
  name: string
}