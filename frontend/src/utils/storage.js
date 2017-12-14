const isObject = (val) => typeof val === "object";
const isJson = (str) => str.charAt(0) === '"' && str.charAt(str.length-1) === '"';

export const setVal = (key, value) => {
  if (isObject(value)) {
    value = JSON.stringify(value);
  }

  localStorage.setItem(key, value);
};

export const getVal = (key) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return false;
  }

  if (isJson(value)) {
    return JSON.parse(value);
  }

  return value;
};

export const clearVal = (key) => {
  localStorage.removeItem(key);
};