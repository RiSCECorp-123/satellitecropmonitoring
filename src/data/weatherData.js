import Week1 from "../assets/Vineyard.jpg";
import Week2 from "../assets/Vineyard.jpg";
import Week3 from "../assets/Vineyard.jpg";

export const vineyardWeeklyData = [
  {
    week: "17.08-23.08",
    image: Week1,
    weather: {
      condition: "Moderately Rainy",
      temperature: "20°C",
      humidity: "58%",
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
    week: "24.08-30.08",
    image: Week2,
    weather: {
      condition: "Partly Cloudy",
      temperature: "18°C",
      humidity: "55%",
      wind: "11 km/h",
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
    week: "31.08-06.09",
    image: Week3,
    weather: {
      condition: "Cloudy",
      temperature: "16°C",
      humidity: "22%",
      wind: "13 km/h",
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
