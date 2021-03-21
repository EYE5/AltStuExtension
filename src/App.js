import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Content, Container, Navbar, Nav, Icon } from 'rsuite';

import Auth from './components/auth';
import Navigation from './components/navigation';
import MessagesList from './components/messages';
import Files from './components/files';

import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const App = observer(({ store }) => {
  return (
    <Container className="App">
      <Router>
        <Navbar>
          <Navbar.Header className="navbar-brand logo">АлтГТУ</Navbar.Header>
          <Navbar.Body>
            <Nav pullRight>
              <Nav.Item componentClass="span" icon={<Icon icon="home" />}>
                <Link to="/">Меню</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        <Content>
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
        </Content>
      </Router>
    </Container>
  );
});

export default App;
