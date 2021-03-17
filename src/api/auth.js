import axios from 'axios';

/**
 *
 * @param {string} login
 * @param {string} password
 *
 * @returns {string}
 */

async function auth(login, password) {
  const formData = new FormData();

  formData.append('login', login);
  formData.append('password', password);

  let res;

  res = await axios.post('https://student.altstu.ru/login/', formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return res.headers['set-cookie'];
}
