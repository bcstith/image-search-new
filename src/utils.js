import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
