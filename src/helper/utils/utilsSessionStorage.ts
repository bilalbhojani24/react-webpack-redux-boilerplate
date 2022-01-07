
export const checkStorage = (callback : () => any) => {
  if (typeof Storage !== 'undefined') {
    if (typeof callback === 'function') callback();
    return true;
  }
  throw new Error('Sorry! No Web Storage support..');
};

export const setToSessionStorage = (key: string, data : any) => {
  if (data) checkStorage(() => sessionStorage.setItem(key, btoa(JSON.stringify(data))));
};

export const setToSessionStoragePromise = (key : string, data : any, expiry : any) =>
  new Promise((resolve, reject) => {
    try {
      setToSessionStorage(key, data);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });

export const getFromSessionStorage = (key : string) => {
  let data = null;
  if (key) {
    checkStorage(() => {
      const criteriaStr = sessionStorage.getItem(key);
      if (criteriaStr) {
        data = JSON.parse(atob(criteriaStr));
      }
    });
  }
  return data;
};

export const getFromSessionStoragePromise = (key : string) =>
  new Promise((resolve, reject) => {
    try {
      resolve(getFromSessionStorage(key));
    } catch (e) {
      reject(e);
    }
  });

export const deleteKeyFromSessionStorage = (key : string) => {
  if (key) {
    checkStorage(() => sessionStorage.removeItem(key));
  }
};

export const deleteKeyFromSessionStoragePromise = (key : string) =>
  new Promise((resolve, reject) => {
    try {
      deleteKeyFromSessionStorage(key);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });

