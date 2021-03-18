import axios from 'axios';

export async function getSchedule(session) {
  return await axios.post('/schedule', { session });
}
