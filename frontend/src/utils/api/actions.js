import request from './request';
import buildUrl, { types } from './endpoints';

/**
 * Try to login into the application
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export const postLogin = (username, password) => {
  const url = buildUrl(types.LOGIN);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  });
};

/**
 * Get all movies
 * @return {Promise<array>}
 * */
export const getMovies = () => {
  const url = buildUrl(types.MOVIES);
  return request(url).then((response) => response.data.movies || []);
};

/**
 * Get all favorites
 * @return {Promise<array>}
 * */
export const getFavorites = () => {
  const url = buildUrl(types.FAVORITES);
  return request(url).then((response) => response.data.movies || []);
};