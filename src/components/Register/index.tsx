import React from 'react'

const Register = () => {
	return (
		<section className="publish-tip sign-form">
			<form>
				<fieldset>
					<legend>Регистрация</legend>
					<label className="label">
						<input placeholder="Имя и Фамилия" type="text" name="name"></input>
					</label>
					<label className="label">
						<input placeholder="Электропочта" type="text" name="email"></input>
					</label>
					<label className="label">
						<input placeholder="Пароль" type="password" name="name"></input>
					</label>
					<label className="label">
						<input
							placeholder="Подтверждение пароля"
							type="password"
							name="confirmPassword"
						></input>
					</label>
					<input
						className="button-login"
						type="submit"
						value="Зарегистрироваться"
					></input>
				</fieldset>
				<p>
					Перейти к <a>логину</a>
				</p>
			</form>
		</section>
	)
}

export default Register
