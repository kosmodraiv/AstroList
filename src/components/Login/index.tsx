import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<main>
  			<section className="publish-tip sign-form">
    			<form>
      				<fieldset>
        				<legend>Вход</legend>
       					<label className="label">
          					<input placeholder="Электропочта" type="text" name="email" />
       					</label>
       					<label className="label">
          					<input placeholder="Пароль" type="password" name="password" />
        				</label>
       					<button className="button-login" type="submit">
          					<Link to="/display">Войти</Link>
        				</button>
      				</fieldset>
      				<p>
        				Если у вас до сих пор нет учётной записи, вы можете {" "}
        				<Link to="/register">зарегистрироваться</Link>.
      				</p>
    			</form>
  			</section>
		</main>
	);
};

export default Login;
