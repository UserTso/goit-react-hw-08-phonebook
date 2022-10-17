import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {WrapperLogin, Form, Label, Input, Span, Button} from './PageLogin.styled';

export function PageLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
  <WrapperLogin>
     <Form onSubmit={handleSubmit}>
      <Label>
        <Span>
        mail
        </Span>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </Label>
      <Label>
        <Span>
        password
        </Span>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  </WrapperLogin>
   
  );
}
