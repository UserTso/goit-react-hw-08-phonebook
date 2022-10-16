import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

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
    <form onSubmit={handleSubmit}>
      <label>
        mail
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
