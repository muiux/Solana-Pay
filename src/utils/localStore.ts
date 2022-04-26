import { aesDecryptData, aesEncryptData } from './aesEncrypt';
import config from './config';

const set = (key: string, value: any): void => {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    window.localStorage.setItem(key, value);
  }
};

const setEncrypted = (key: string, value: any): void => {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, aesEncryptData(JSON.stringify(value), config.kadoClient.aes));
  } else {
    window.localStorage.setItem(key, aesEncryptData(value, config.kadoClient.aes));
  }
}

const get = (key: string): any | null => {
  const item = window.localStorage.getItem(key);
  if (item === null) {
    return null;
  }
  try {
    return JSON.parse(item);
  } catch {
    return item;
  }
};

const getEncrypted = (key: string): any | null => {
  const item = window.localStorage.getItem(key);
  if (item === null) {
    return null;
  }
  try {
    return JSON.parse(aesDecryptData(item, config.kadoClient.aes));
  } catch {
    return aesDecryptData(item, config.kadoClient.aes);
  }
};

const deleteItem = (key: string): boolean => {
  window.localStorage.removeItem(key);
  return true;
}

const isAvailable = (): boolean => {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

const localStore = {
  get,
  getEncrypted,
  set,
  setEncrypted,
  isAvailable,
  deleteItem
};

export default localStore;
