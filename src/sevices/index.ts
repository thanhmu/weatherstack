const DOMAIN_URL =
  "http://api.weatherstack.com/current";

const ACCESS_KEY = "610acf4c1d203448cd6f671955c5e8aa";

const fetchWeatherStackData = async (zipcode: string) => {
  const url = `${DOMAIN_URL}?access_key=${ACCESS_KEY}&query=${zipcode}`;
  const response = fetch(url);
  return await (await response).json();
};

export default fetchWeatherStackData;
