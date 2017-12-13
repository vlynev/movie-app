/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {Promise} A promise that when resolved will return the parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {objct} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response, requestName) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // 'Api request' name should not be changed, it's used to group erros in rollbar
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Added the token to reader options if token exists
 *
 * @param {options} request
 * */
function wrapToken(options = {}) {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = options.headers || {};
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise.<object>}           An object containing either "data" or "err"
 * @property {?object} data   - Response data
 * @property {?object} err    - Response error
 */
export default function request(url, options, {shouldParseJSON = true, requestName = 'unknown'} = {}) {
  return fetch(url, wrapToken(options))
    .then(response => checkStatus(response, requestName))
    .then(shouldParseJSON ? parseJSON : () => Promise.resolve({}))
    .then(data => ({data}))
    .catch(err => ({err}));
}