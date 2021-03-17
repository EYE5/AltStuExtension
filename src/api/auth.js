import axios from 'axios';

/**
 *
 * @param {string} login
 * @param {string} password
 *
 * @returns {string}
 */

export async function auth(login, password) {
  const formData = new FormData();

  formData.append('login', login);
  formData.append('password', password);

  let res;

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  res = await axios.post('https://student.altstu.ru/login/', formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  console.log(res);

  return res.headers['set-cookie'];
}
