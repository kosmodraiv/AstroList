import React from 'react'
import { connect } from 'react-redux';

const TaskCard = ({ isTaskCardVisible }) => {
	if (!isTaskCardVisible) {
		return null;
	  }

	return (
		<div className="task-card">
			<form>
				<div className="head" />

				<div className="content">
					<label className="label">
						Задачи
						<input
							className="title"
							placeholder="Пройти интенсив по React + Redux + TS + Mobx"
							type="text"
							name="title"
						/>
					</label>

					<div className="deadline">
						<span className="label">Дедлайн</span>
						<span className="date">
							<div className="react-datepicker-wrapper">
								<div className="react-datepicker__input-container">
									<input type="text" value="" />
								</div>
							</div>
						</span>
					</div>

					<div className="description">
						<label className="label">
							Описание
							<textarea
								className="text"
								placeholder="После изучения всех технологий, завершить работу над проектами и найти работу."
								name="description"
							/>
						</label>
					</div>

					<div className="tags"></div>

					<div className="errors"></div>

					<div className="form-controls">
						<button className="button-reset-task" type="reset" disabled>
							Reset
						</button>
						<button className="button-save-task" type="submit" disabled>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isTaskCardVisible: state.taskCard.isTaskCardVisible,
});

export default connect(mapStateToProps)(TaskCard);
