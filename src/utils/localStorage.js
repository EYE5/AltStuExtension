/* eslint-disable no-undef */

/**
 *
 * @param {string} key
 * @param {any} value
 */
export function set(key, value) {
  if (chrome.storage) chrome.storage.sync.set({ [key]: value });
  else localStorage.setItem(key, value);
}

/**
 *
 * @param {string} key
 * @returns Storage data
 */
export function get(key) {
  if (chrome.storage) {
    let res;

    try {
      res = chrome.storage.sync.get(key);
    } catch (error) {
      console.log('No item in storage for this key: ', key);
      return;
    }

    return res;
  } else localStorage.getItem(key);
}
