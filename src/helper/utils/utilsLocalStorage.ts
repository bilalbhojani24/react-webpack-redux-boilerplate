import lscache from 'lscache';

export const setToLocalStorage = (key : string, data : any, expiry : Date | any) => {
  if (data) {
    lscache.flushExpired();
    lscache.set(key, btoa(JSON.stringify(data)), expiry || 600);
  }
};

export const setToLocalStoragePromise = (key : string, data : any, expiry : Date | any) => new Promise((resolve, reject) => {
  try {
    setToLocalStorage(key, data, expiry);
    resolve(true);
  } catch (e) {
    reject(e);
  }
});

export const getFromLocalStorage = (key : string) => {
  let data = null;
  if (key) {
    const criteriaStr = lscache.get(key);
    if (criteriaStr) {
      data = JSON.parse(atob(criteriaStr));
    }
  }
  return data;
};

export const getFromLocalStoragePromise = (key : string) => new Promise((resolve, reject) => {
  try {
    resolve(getFromLocalStorage(key));
  } catch (e) {
    reject(e);
  }
});

export const deleteKeyFromLocalStorage = (key : string) => {
  if (key) {
    lscache.remove(key);
  }
};

export const deleteKeyFromLocalStoragePromise = (key : string) => new Promise((resolve, reject) => {
  try {
    deleteKeyFromLocalStorage(key);
    resolve(true);
  } catch (e) {
    reject(e);
  }
});
