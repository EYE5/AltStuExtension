import { observer } from 'mobx-react-lite';
import { List, Loader } from 'rsuite';

import File from './file';
import { getStore } from '../../store/globalStore';

import './files.css';

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

const styleCenterRight = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  height: '60px',
};

const Files = observer(() => {
  const files = store.files;

  const filesUI = files.map((file, index) => {
    return <File file={file} key={index}></File>;
  });

  return (
    <List className="files-list" hover>
      {store.loading ? <Loader center size="lg" /> : filesUI}
    </List>
  );
});

export default Files;
