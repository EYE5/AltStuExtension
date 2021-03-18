import axios from 'axios';

export async function getFiles(session) {
  return await axios.post('/files', { session });
}
