import config from '../../config';

export const types = {
  CREATE_USER: 'CREATE_USER',
  LOGIN: 'LOGIN',
  MOVIES: 'MOVIES',
  MOVIE: 'MOVIES/:id',
  CONFIGURATION: 'CONFIGURATION',
  FAVORITES: 'FAVORITES',
  ADD_FAVORITES: 'ADD_FAVORITES',
};

const endpointsBuilders = {
  [types.CREATE_USER]() {
    return '/user';
  },
  [types.LOGIN]() {
    return '/login';
  },
  [types.MOVIES]() {
    return '/movies';
  },
  [types.MOVIE](id) {
    return `/movies/${id}`;
  },
  [types.CONFIGURATION]() {
    return '/movies/configuration';
  },
  [types.FAVORITES]() {
    return '/user/favorites';
  },
  [types.ADD_FAVORITES]() {
    return '/user/favorites';
  }
};

function buildApiUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return `${config.apiBaseUrl}${adjustedPath}`;
}

export default function buildUrl(type, data) {
  const basicUrl = endpointsBuilders[type](data);
  return buildApiUrl(basicUrl);
}