import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  Content,
  Container,
  Navbar,
  Nav,
  Icon,
  Footer,
  FlexboxGrid,
} from 'rsuite';

import Auth from './components/auth';
import Navigation from './components/navigation';
import Schedule from './components/schedule';
import MessagesList from './components/messages';
import Files from './components/files';

import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const App = observer(({ store }) => {
  const cName =
    store.files.length > 0 || store.messages.length > 0
      ? 'footer-item-text'
      : 'footer-item-text-disabled';

  const footerActions = store.footerActions.map((action, index) => (
    <FlexboxGrid.Item
      className="footer-item"
      colspan={24 / store.footerActions.length}
      onClick={
        store.files.length > 0 || store.messages.length > 0
          ? () => action.func()
          : () => {}
      }
      key={index}
    >
      {<Icon icon={action.icon ? action.icon : ''} />}
      <span className={cName}>{action.text}</span>
    </FlexboxGrid.Item>
  ));

  const headerActions = store.headerActions.map((action, index) => (
    <Nav.Item onClick={() => action.func()} key={index}>
      {<Icon icon={action.icon ? action.icon : ''} />}
      <span>{action.text}</span>
    </Nav.Item>
  ));

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
            <Nav appearance="tabs">{headerActions}</Nav>
          </Navbar.Body>
        </Navbar>
        <Content>
          <Switch>
            <Route path="/schedule">
              {store.session ? <Schedule /> : <Redirect to="/" />}
            </Route>
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
      <Footer>
        <FlexboxGrid justify="center">{footerActions}</FlexboxGrid>
      </Footer>
    </Container>
  );
});

export default App;
