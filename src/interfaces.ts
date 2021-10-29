 
// {
//   "options": [
//     {
//       "optionType": "Model",
//       "data": [
//         {
//           "id": "model_1", 
//           "name": "pickup struck",
//           "price": 50000,
//           "nextOptId": ["type_1", "type_2"]
//         },
//         {
//           "id": "model_2",
//           "name": "SUV",
//           "price": 70000,
//           "nextOptId": ["type_1", "type_2", "type_3"]
//         }
//       ]
//     },
//     {
//       "optionType": "Type",
//       "data": [
//         {
//           "id": "type_1",
//           "name": "v-cross",
//           "price": 5000,
//           "nextOptId": ["color_1", "color_2", "color_3"]
//         },
//         {
//           "id": "type_2",
//           "name": "2 doors",
//           "price": 1000,
//           "nextOptId": ["color_1", "color_2"]
//         },
//         {
//           "id": "type_3",
//           "name": "4 doors",
//           "price": 2000,
//           "nextOptId": ["color_1", "color_2", "color_3", "color_4"]
//         }
//       ]
//     },
//     {
//       "optionType": "Color",
//       "data": [
//         {
//           "id": "color_1",
//           "name": "black",
//           "price": 2000,
//           "color": "#000000",
//           "nextOptId": ["insurance_1", "insurance_2"]
//         },
//         {
//           "id": "color_2",
//           "name": "white",
//           "price": 1000,
//           "color": "#ffffff",
//           "nextOptId": ["insurance_1", "insurance_2"]
//         },
//         {
//           "id": "color_3",
//           "name": "red",
//           "price": 3000,
//           "color": "#dd1a1a",
//           "nextOptId": ["insurance_1"]
//         },
//         {
//           "id": "color_4",
//           "name": "blue",
//           "price": 2000,
//           "color": "#1a43dd",
//           "nextOptId": ["insurance_1"]
//         }
//       ]
//     },
//     {
//       "optionType": "Insurance Package",
//       "data": [
//         {
//           "id": "insurance_1",
//           "name": "1 year",
//           "price": 2000
//         },
//         {
//           "id": "insurance_2",
//           "name": "5 years",
//           "price": 8000
//         }
//       ]
//     }
//   ]
// }
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