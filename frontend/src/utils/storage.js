const isObject = (val) => typeof val === "object";

export const setVal = (key, value) => {
  if (isObject(value)) {
    value = JSON.stringify(value);
  }

  window.localStorage.setItem(key, value);
};

export const getVal = (key) => {
  const value = window.localStorage.getItem(key);

  if (!value) {
    return false;
  }

  try {
    return JSON.parse(value);
  } catch (e) {}

  return value;
};

export const clearVal = (key) => {
  window.localStorage.removeItem(key);
};