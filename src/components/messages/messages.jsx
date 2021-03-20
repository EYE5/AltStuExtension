import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Loader } from 'rsuite';

import { getStore } from '../../store/globalStore';

import './messages.css';

const store = getStore();

const MessagesList = observer(() => {
  const messages = store.messages;

  useEffect(() => {
    store.header = 'Сообщения';
  }, []);

  const messagesUI = messages.map((message, index) => (
    <List.Item key={index}>{message.details.sender}</List.Item>
  ));

  return (
    <List autoScroll className="messages-list">
      {store.loading ? <Loader center size="lg" /> : messagesUI}
    </List>
  );
});

export default MessagesList;
