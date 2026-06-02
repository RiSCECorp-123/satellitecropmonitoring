import Week1 from "../assets/Vineyard.jpg";
import Week2 from "../assets/Vineyard.jpg";
import Week3 from "../assets/Vineyard.jpg";


export const vineyardWeeklyData = [
  {
    week: "18.05-25.05",
    image: Week1,
    weather: {
      condition: "Sunny",
      temperature: "27°C",
      humidity: "62%",
      wind: "9 km/h",
      alert: "No weather alerts"
    },
    affectedPlants: [
      { id: 1, x: "44%", y: "10%" },
      { id: 2, x: "49%", y: "10%" },
      { id: 3, x: "55%", y: "10%" },
      { id: 4, x: "60%", y: "8%" }
    ]
  },
  {
    week: "25.05-31.05",
    image: Week2,
    weather: {
      condition: "Partly Cloudy",
      temperature: "24°C",
      humidity: "70%",
      wind: "11 km/h",
      alert: "Light rainfall expected"
    },
    affectedPlants: [
      { id: 1, x: "44%", y: "10%" },
      { id: 2, x: "49%", y: "10%" },
      { id: 3, x: "55%", y: "10%" },
      { id: 4, x: "60%", y: "8%" },
      { id: 5, x: "55%", y: "18%" },
      { id: 6, x: "49%", y: "28%" }
    ]
  },
  {
    week: "01.06-08.06",
    image: Week3,
    weather: {
      condition: "Rainy",
      temperature: "22°C",
      humidity: "81%",
      wind: "13 km/h",
      alert: "High fungal risk"
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
      { id: 10, x: "45%", y: "53%" }
    ]
  }
];