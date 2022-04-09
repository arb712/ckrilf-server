// Axios module to fetch Flickr API
import axios from "axios";
// API Constants
import { URL, FORMAT_FEED, KEY, SEARCH } from "../constants/constants.js";

// Flickr API
export const getFeed = async (req, res) => {
  try {
    // Fetch data from API
    await axios
      .get(`${URL}/services/feeds/photos_public.gne?${FORMAT_FEED}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send({ err });
      });
  } catch (error) {
    res.status(500).json("Error");
  }
};

export const searchFeed = async (req, res, { tags, per_page, page, text }) => {
  try {
    await axios
      .get(
        `${URL}/services/rest/?method=${SEARCH}&${KEY}&tags=${tags}&text=${text}&per_page=${per_page}&page=${page}&${FORMAT_FEED}&nojsoncallback=1`
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.status(500).json("Error");
  }
};
