import { useState } from 'react';
import { observer } from 'mobx-react-lite';
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

const Auth = observer(() => {
  const store = getStore();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => store.auth(login, password);
  return (
    <Panel>
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
          <Button
            loading={store.loading}
            appearance="primary"
            onClick={() => handleSubmit()}
          >
            Войти
          </Button>
        </ButtonToolbar>
      </Form>
    </Panel>
  );
});

export default Auth;
