const isObject = (val) => typeof val === "object";

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

  try {
    return JSON.parse(value);
  } catch (e) {}

  return value;
};

export const clearVal = (key) => {
  localStorage.removeItem(key);
};