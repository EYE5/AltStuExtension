import { useEffect } from 'react';
import { List, Icon, FlexboxGrid } from 'rsuite';
import { useHistory } from 'react-router-dom';

import { getStore } from '../../store/globalStore';

import './navigation.css';

const store = getStore();

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
};

const styleCenterLeft = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  height: '60px',
};

const Navigation = () => {
  const history = useHistory();

  const loadMessages = () => {
    store.unreadMessages();
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

  useEffect(() => {
    store.reset(true);
  }, []);

  return (
    <List hover className="navigation">
      <List.Item onClick={() => loadSchedule()}>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={2} style={styleCenter}>
            <Icon
              icon="list"
              style={{
                color: 'darkgrey',
                fontSize: '1.5em',
              }}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            colspan={6}
            style={{ ...styleCenterLeft, fontSize: '1.2em' }}
          >
            Расписание
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </List.Item>
      <List.Item onClick={() => loadMessages()}>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={2} style={styleCenter}>
            <Icon
              icon="commenting"
              style={{
                color: 'darkgrey',
                fontSize: '1.5em',
              }}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            colspan={6}
            style={{ ...styleCenterLeft, fontSize: '1.2em' }}
          >
            Сообщения
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </List.Item>
      <List.Item onClick={() => loadFiles()}>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={2} style={styleCenter}>
            <Icon
              icon="file-text"
              style={{
                color: 'darkgrey',
                fontSize: '1.5em',
              }}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            colspan={6}
            style={{ ...styleCenterLeft, fontSize: '1.2em' }}
          >
            Файлы
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </List.Item>
    </List>
  );
};

export default Navigation;
