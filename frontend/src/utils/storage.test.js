import 'mock-local-storage';
import * as storage from './storage';

const KEY = 'test_key';
const VALUE = 'test_value';

describe('Test storage.js', () => {
  it('Should be able to store some data', () => {
    storage.setVal(KEY, VALUE);
    expect(storage.getVal(KEY)).toEqual(VALUE);
  });

  it('Should be able to clean data', () => {
    storage.clearVal(KEY);
    expect(window.localStorage.length).toEqual(0);
  });
});