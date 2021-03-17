import { Form, FormGroup, Button, Panel  } from 'rsuite';

import {getStore} from '../../store/authStore'

function Auth() {
  const store = getStore();


  const handleSubmit = () => store.getCookie()
  return (
        <Panel header="Авторизация">
          <Form>
            <FormGroup>
              <Button appearance="primary" onClick={() => handleSubmit()}>Get Cookie!</Button>  
            </FormGroup>
          </Form>
          </Panel>
  );
}

export default Auth;
