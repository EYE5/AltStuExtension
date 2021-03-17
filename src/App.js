import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Auth from './components/auth';
import Navigation from './components/navigation';

//debug
import { Button } from 'rsuite';
import { messagesPage } from './api/messages';

import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const App = observer(({ store }) => {
  return (
    <div className="App">
      <div>
        <Button onClick={() => messagesPage(store.session)}>Тест</Button>
      </div>

      <Router>
        <Switch>
          <Route path="/schedule">Расписание</Route>
          <Route path="/messages">Сообщения</Route>
          <Route path="/files">Файлы</Route>
          <Route path="/">{store.session ? <Navigation /> : <Auth />}</Route>
        </Switch>
      </Router>
    </div>
  );
});

export default App;
