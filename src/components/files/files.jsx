import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Loader } from 'rsuite';

import File from './file';
import { getStore } from '../../store/globalStore';

import './files.css';

const store = getStore();

const Files = observer(() => {
  useEffect(() => {
    store.footerActions = [
      {
        func: () => (store.filesSorted = undefined),
        text: 'Стандартный вид',
      },
      {
        func: () => store.filesSort('date'),
        text: 'По дате',
      },
      {
        func: () => store.filesSort('sender'),
        text: 'По преподавателю',
      },
    ];
  }, []);

  let filesUI;

  if (store.filesSorted) {
    filesUI = [];
    let idx = 1; //TODO Change this bullshit

    for (const header in store.filesSorted) {
      filesUI.push(<h3 key={`${header}${idx}`}>{header}</h3>);

      for (const item of store.filesSorted[header]) {
        filesUI.push(<File file={item} key={`${header}${++idx}`}></File>);
      }
    }
  } else {
    filesUI = store.files.map((file, index) => {
      return <File file={file} key={index}></File>;
    });
  }

  return (
    <List className="files-list" hover>
      {store.loading ? <Loader center size="lg" /> : filesUI}
    </List>
  );
});

export default Files;
