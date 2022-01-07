export const getFromBetweenChars = (baseString : string, startChar : string, endChar : string) => {
  const result: Array<string> = [];
  if (!(baseString.includes(startChar) && baseString.includes(endChar))) return result;

  const stringArray = baseString.split(startChar);
  stringArray.forEach((el, i) => {
    if (i === 0) return;

    const temp = el.split(endChar);
    if (temp.length > 1) result.push(temp[0]);
  });

  return result;
};

// removed all undefined entries from an object
export const cleanObject = (obj : any) => {
  if (!obj) return obj;
  const updatedObj = {} as any;
  Object.keys(obj).forEach((el) => {
    if (typeof obj[el] === 'object') {
      updatedObj[el] = cleanObject(obj[el]);
      return;
    }
    if (obj[el] !== undefined) updatedObj[el] = obj[el];
  });
  return updatedObj;
};

export const parseJwt = (token : string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

export const isValidObject = (input: any) => input && typeof input === 'object' && Object.keys(input).length;
