import axios from 'axios';

export async function getSchedule(session) {
  let res;

  try {
    res = await axios.post('/schedule', { session });
  } catch (error) {
    throw error;
  }

  if (res.status === 301) return null;

  return res;
}
