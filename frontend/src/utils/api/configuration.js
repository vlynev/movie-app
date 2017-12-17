import * as storage from '../storage';

const {images} = storage.getVal('configuration');
const baseUrl = images.base_url;

export const poster_sizes = {
  FULL: 6,
  GRID: 3,
  SINGLE: 4
};

export const backdrop_sizes = {
  DEFAULT: 3
};

export const getBackdropUrl = (size = backdrop_sizes.DEFAULT) => {
  return `${baseUrl}${images.backdrop_sizes[size]}/`;
};

export const getBasePosterUrl = (size = poster_sizes.FULL) => {
  return `${baseUrl}${images.poster_sizes[size]}/`;
};