import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Loader, Radio, RadioGroup, Content } from 'rsuite';

import Message from './message';
import { getStore } from '../../store/globalStore';

import './messages.css';

const store = getStore();

const Messages = observer(() => {
  useEffect(() => {
    store.footerActions = [
      {
        func: () => (store.messagesSorted = undefined),
        text: 'Стандартный вид',
      },
      {
        func: () => store.messagesSort('date'),
        text: 'По дате',
      },
      {
        func: () => store.messagesSort('sender'),
        text: 'По преподавателю',
      },
    ];

    store.headerActions = [
      {
        func: () => store.unreadMessages(),
        text: 'Не прочитанные',
      },
      {
        func: () => store.archiveMessages(),
        text: 'Архив',
      },
    ];
  }, []);

  let messagesUI;

  if (store.messagesSorted) {
    messagesUI = [];
    let idx = 1;

    for (const header in store.messagesSorted) {
      messagesUI.push(<h3 key={`${header}${idx}`}>{header}</h3>);

      for (const item of store.messagesSorted[header]) {
        messagesUI.push(
          <Message message={item} key={`${header}${++idx}`}></Message>,
        );
      }
    }
  } else {
    messagesUI = store.messages.map((message, index) => {
      return <Message message={message} key={index}></Message>;
    });
  }

  return (
    <Content>
      {store.loading ? (
        <List className="messages-list" hover>
          <Loader center size="lg" />
        </List>
      ) : messagesUI.length === 0 ? (
        <div className="no-messages-block">
          В данный момент новых сообщений нет
        </div>
      ) : (
        <List className="messages-list" hover>
          {messagesUI}
        </List>
      )}
    </Content>
  );
});

export default Messages;
