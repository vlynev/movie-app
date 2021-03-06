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
    body: JSON.stringify({ username, password })
  });
};

/**
 * Try to create user into the application
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export const postSignUp = (username, password) => {
  const url = buildUrl(types.CREATE_USER);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password })
  })
};

/**
 * @param movieDBId of movie
 * */
export const addFavorites = (movieDBId) => {
  const url = buildUrl(types.ADD_FAVORITES);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ movieDBId })
  });
};

/**
 * @param movieDBId of movie
 * */
export const removeFavorites = (movieDBId) => {
  const url = buildUrl(types.REMOVE_FAVORITES, movieDBId);
  return request(url, {
    method: 'DELETE'
  });
};

/**
 * Get movie
 * @return {Promise<object>}
 * */
export const getMovie = (id) => {
  const url = buildUrl(types.MOVIE, id);
  return request(url).then((response) => response.data.movie || {});
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

/**
 * Get configuration
 * @return {Promise<object>}
 * */
export const getConfiguration = () => {
  const url = buildUrl(types.CONFIGURATION);

  return request(url).then((response) => response.data);
};