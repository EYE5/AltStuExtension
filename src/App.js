import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Content, Container, Navbar, Footer, Button } from 'rsuite';

import Auth from './components/auth';
import Navigation from './components/navigation';
import MessagesList from './components/messages';
import Files from './components/files';

import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const HEADER = {
  '/': 'Авторизация',
  '/schedule': 'Расписание',
  '/messages': 'Сообщения',
  '/files': 'Файлы',
  '/navigation': 'Навигация',
};

const App = observer(({ store }) => {
  return (
    <Container className="App">
      <Navbar>
        <Navbar.Header>
          <h3>{HEADER[window.location.pathname]}</h3>
        </Navbar.Header>
      </Navbar>
      <Content>
        <Router>
          <Switch>
            <Route path="/schedule">Расписание</Route>
            <Route path="/messages">
              {store.session ? <MessagesList /> : <Redirect to="/" />}
            </Route>
            <Route path="/files">
              {store.session ? <Files /> : <Redirect to="/" />}
            </Route>
            <Route path="/navigation">
              {store.session ? <Navigation /> : <Redirect to="/" />}
            </Route>
            <Route path="/">
              {store.session ? <Redirect to="/navigation" /> : <Auth />}
            </Route>
          </Switch>
        </Router>
      </Content>
      <Footer className="footer">
        {store.session ? (
          <Button className="footer-button" onClick={window.history.back()}>
            Назад
          </Button>
        ) : (
          ''
        )}
      </Footer>
    </Container>
  );
});

export default App;
