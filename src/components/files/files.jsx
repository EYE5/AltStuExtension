import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Loader } from 'rsuite';

import { getStore } from '../../store/globalStore';

import './files.css';

const store = getStore();

const Files = observer(() => {
  const files = store.files;

  useEffect(() => {
    store.header = 'Файлы';
  }, []);

  const filesUI = files.map((file, index) => {
    const fileName = file.link.slice(
      file.link.lastIndexOf('/') + 1,
      file.link.length,
    );
    return (
      <List.Item key={index}>
        <h4>{fileName}</h4>
        <h4>{file.data.receiver}</h4>
      </List.Item>
    );
  });

  return (
    <List className="files-list">
      {store.loading ? <Loader center size="lg" /> : filesUI}
    </List>
  );
});

export default Files;
