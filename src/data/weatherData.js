import Week1 from "../assets/Vineyard.jpg";
import Week2 from "../assets/Vineyard.jpg";
import Week3 from "../assets/Vineyard.jpg";

export const vineyardWeeklyData = [
  {
    week: "10.11-17.11",
    image: Week1,
    weather: {
      condition: "Light Rainy",
      temperature: "5°C",
      humidity: "51%",
      wind: "9 km/h",
    },
    affectedPlants: [
      { id: 1, x: "44%", y: "10%" },
      { id: 2, x: "49%", y: "10%" },
      { id: 3, x: "55%", y: "10%" },
      { id: 4, x: "60%", y: "8%" },
    ],
  },
  {
    week: "18.11-24.11",
    image: Week2,
    weather: {
      condition: "Partly Cloudy",
      temperature: "7°C",
      humidity: "34%",
      wind: "8-11 km/h",
    },
    affectedPlants: [
      { id: 1, x: "44%", y: "10%" },
      { id: 2, x: "49%", y: "10%" },
      { id: 3, x: "55%", y: "10%" },
      { id: 4, x: "60%", y: "8%" },
      { id: 5, x: "55%", y: "18%" },
      { id: 6, x: "49%", y: "28%" },
    ],
  },
  {
    week: "25.11-01.12",
    image: Week3,
    weather: {
      condition: "Partly Cloudy",
      temperature: "4°C",
      humidity: "31",
      wind: "11-17km/h",
    },
    affectedPlants: [
      { id: 1, x: "44%", y: "10%" },
      { id: 2, x: "49%", y: "10%" },
      { id: 3, x: "55%", y: "10%" },
      { id: 4, x: "60%", y: "8%" },
      { id: 5, x: "55%", y: "18%" },
      { id: 6, x: "49%", y: "28%" },
      { id: 7, x: "72%", y: "33%" },
      { id: 8, x: "88%", y: "40%" },
      { id: 9, x: "55%", y: "42%" },
      { id: 10, x: "45%", y: "53%" },
    ],
  },
];
