import { useState } from 'react';
import {
  Form,
  FormGroup,
  Button,
  Panel,
  ButtonToolbar,
  ControlLabel,
  FormControl,
} from 'rsuite';

import { getStore } from '../../store/globalStore';

function Auth() {
  const store = getStore();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => store.auth(login, password);
  return (
    <Panel header="Авторизация">
      <Form>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            onChange={data => setLogin(data)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            type="password"
            onChange={data => setPassword(data)}
          />
        </FormGroup>
        <ButtonToolbar>
          <Button appearance="primary" onClick={() => handleSubmit()}>
            Войти
          </Button>
        </ButtonToolbar>
      </Form>
    </Panel>
  );
}

export default Auth;
