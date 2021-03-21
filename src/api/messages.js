import axios from 'axios';

export async function getUnreadMessages(session) {
  let res;

  try {
    res = await axios.post('/messages/unread', { session });
  } catch (error) {
    throw error;
  }

  if (res.status === 301) return null;

  return res;
}

export async function getArchiveMessages(session) {
  let res;

  try {
    res = await axios.post('/messages/archive', { session });
  } catch (error) {
    throw error;
  }
  console.error(res.status);
  if (res.status === 301) return null;

  return res;
}
