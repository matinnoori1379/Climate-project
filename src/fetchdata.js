import axios from "axios";

export const fetchData = async (input) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=71b5526c91d8a87649c639bbe2df06a5`);
    const data = res.data
    return data;
  }