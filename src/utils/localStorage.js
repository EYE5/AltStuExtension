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
export function get(key, func) {
  if (chrome.storage) {
    try {
      chrome.storage.sync.get([key], result => func(result));
    } catch (error) {
      return;
    }
  } else return localStorage.getItem(key);
}
