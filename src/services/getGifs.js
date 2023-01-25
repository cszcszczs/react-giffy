import { API_KEY, API_URL } from "./settings";

export default function getGifs({
  keyword = "pandas",
  limit = 5,
  page = 0,
  rating = "g",
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;

      if (Array.isArray(data)) {
        const gifs = data.map((img) => {
          const { images, title, id } = img;
          const { url } = images?.fixed_height;

          return { title, id, url };
        });

        return gifs;
      }
    });
}
