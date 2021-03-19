import { List } from 'rsuite';
import { useHistory } from 'react-router-dom';

import { getStore } from '../../store/globalStore';

const store = getStore();

const Navigation = () => {
  const history = useHistory();

  const loadMessages = () => {
    store.archiveMessages();
    history.push('/messages');
  };

  const loadSchedule = () => {
    store.getSchedule();
    history.push('/schedule');
  };

  const loadFiles = () => {
    store.getFiles();
    history.push('/files');
  };
  return (
    <List hover>
      <List.Item onClick={() => loadSchedule()}>Расписание</List.Item>
      <List.Item onClick={() => loadMessages()}>Сообщения</List.Item>
      <List.Item onClick={() => loadFiles()}>Файлы</List.Item>
    </List>
  );
};

export default Navigation;
