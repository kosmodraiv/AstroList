import React from 'react'

const Login = () => {
	return (
    <main>
		<section className="publish-tip sign-form">
			<form>
				<fieldset>
					<legend>Вход</legend>
					<label className="label">
						<input placeholder="Электропочта" type="text" name="email"></input>
					</label>
					<label className="label">
						<input placeholder="Пароль" type="password" name="name"></input>
					</label>
					<input
						className="button-login"
						type="submit"
						value="Войти"
					></input>
				</fieldset>
				<p>
                Если у вас до сих пор нет учётной записи, вы можете <a>зарегистрироваться</a>
				</p>
			</form>
		</section>
    </main>
	)
}

export default Login
