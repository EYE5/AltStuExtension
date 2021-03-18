import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Auth from './components/auth';
import Navigation from './components/navigation';
import MessagesList from './components/messages';

import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const App = observer(({ store }) => {
  return (
    <Router>
      <Switch>
        <Route path="/schedule">Расписание</Route>
        <Route path="/messages">
          <MessagesList />
        </Route>
        <Route path="/files">Файлы</Route>
        <Route path="/">{store.session ? <Navigation /> : <Auth />}</Route>
      </Switch>
    </Router>
  );
});

export default App;
