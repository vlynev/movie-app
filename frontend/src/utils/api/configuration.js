import * as storage from '../storage';

const {images} = storage.getVal('configuration');
const baseUrl = images.base_url;

export const sizes = {
  FULL_POSTER: 6,
  GRID_POSTER: 3,
  SINGLE_POSTER: 4
};

export const getBasePosterUrl = (size = sizes.FULL_POSTER) => {
  return `${baseUrl}${images.poster_sizes[size]}/`;
};

/*

{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",

    "secure_base_url": "https://image.tmdb.org/t/p/",

    "backdrop_sizes": ["w300", "w780", "w1280", "original"],

    "logo_sizes" : ["w45", "w92", "w154", "w185", "w300", "w500", "original"],

    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],

    "profile_sizes" :["w45", "w185", "h632", "original"],

    "still_sizes" :["w92", "w185", "w300", "original"]
  }
}

*/