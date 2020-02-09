import React, { FormEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { userLoginAsync, userLogout } from '../../store/user/reducer';
import { User } from '../../types/interfaces/user';

interface OwnProps {
}

type Props = OwnProps;

const Login: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.user.data);

  const refLogin = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      login: refLogin.current!.value,
      password: refPassword.current!.value,
    };

    dispatch(userLoginAsync.request(data));
  };

  const onLogaut = () => {
    dispatch(userLogout());
  };

  const renderLogout = (user: User) => (
    <React.Fragment>
      <div>
        <button type="button" onClick={onLogaut}>Logout</button>
      </div>
      <pre>
        <p>{user.id}</p>
        <p>{user.login}</p>
      </pre>
    </React.Fragment>
  );

  const renderLogin = () => (
    <form onSubmit={(event: FormEvent) => onSubmit(event)}>
      <label>
        Login:
        <input type="text" name="login" ref={refLogin} />
      </label>
      <label>
        Password:
        <input type="password" name="password" ref={refPassword} />
      </label>
      <button type="submit">Enter</button>
    </form>
  );

  return (
    <div>
      <h2>Login</h2>
      {user ? renderLogout(user) : renderLogin()}
    </div>
  );
};

export default Login;
