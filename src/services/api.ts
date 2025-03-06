import axios from "axios";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = "f20fa2157b6495ad86c8bcbd32fa218b";

const marvelApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const getCharacters = async ({ name = "" }) => {
  let url = "/characters?limit=50&";

  if (name !== "") {
    url += `nameStartsWith=${encodeURIComponent(name)}&`;
  }

  const response = await marvelApi.get(url);
  return response.data.data.results;
};

export const getCharacterById = async (id: string) => {
  const response = await marvelApi.get(`/characters/${id}`);
  return response.data.data.results[0];
};

export const getComicsById = async (id: string) => {
  const response = await marvelApi.get(`/characters/${id}/comics?limit=20`);
  return response.data.data.results;
};

export default marvelApi;