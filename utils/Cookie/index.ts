interface CookieOptions {
  exp?: number;
  path?: string;
}

const set = (
  key: string,
  value: string | number | boolean,
  option: CookieOptions,
) =>
  (document.cookie = `${key}=${value};expires=${new Date(
    Date.now() + option.exp! * 864e5,
  )}`);

const get = (key: string) =>
  document.cookie
    .split('; ')
    .find((el) => el.startsWith(key + '='))
    ?.split('=')[1];

function cookie() {
  return {
    set: set,
    remove: function (key: string) {
      set(key, '', { exp: -1 });
    },
    get: get,
  };
}

export default cookie();
