import { observer } from 'mobx-react-lite';
import { List } from 'rsuite';

import { getStore } from '../../store/globalStore';

const store = getStore();

const MessagesList = observer(() => {
  const messages = store.messages;
  return (
    <List autoScroll>
      {messages.map((message, index) => (
        <List.Item key={index}>{message.details.sender}</List.Item>
      ))}
    </List>
  );
});

export default MessagesList;
