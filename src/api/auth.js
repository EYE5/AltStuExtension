import axios from 'axios';

/**
 *
 * @param {string} login
 * @param {string} password
 *
 * @returns {string}
 */

export async function auth(login, password) {
  return await axios.post('/auth', {
    login,
    password,
  });
}
