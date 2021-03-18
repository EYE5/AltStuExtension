import axios from 'axios';

export async function getUnreadMessages(session) {
  return await axios.post('/messages/unread', { session });
}

export async function getArchiveMessages(session) {
  return await axios.post('/messages/archive', { session });
}
