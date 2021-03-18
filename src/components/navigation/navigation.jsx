import { List } from 'rsuite';
import { Link } from 'react-router-dom';

import { getStore } from '../../store/globalStore';

const store = getStore();

const Navigation = () => {
  const loadMessages = () => store.archiveMessages();
  return (
    <List hover>
      <List.Item>
        <Link to="/schedule">Расписание</Link>
      </List.Item>
      <List.Item onClick={() => loadMessages()}>
        <Link to="/messages">Сообщения</Link>
      </List.Item>
      <List.Item>
        <Link to="/files">Файлы</Link>
      </List.Item>
    </List>
  );
};

export default Navigation;
