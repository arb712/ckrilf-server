// Axios module to fetch Flickr API
import axios from "axios";
// API Constants
import { URL, FORMAT_FEED } from "../constants/constants.js";

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
    console.log(error);
  }
};
