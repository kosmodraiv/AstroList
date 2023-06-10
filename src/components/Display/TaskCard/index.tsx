import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Tags from './tags'


const TaskCard = ({ isTaskCardVisible }) => {
	const today = new Date();
	const [selectedDate, setSelectedDate] = useState(today)
	

	if (!isTaskCardVisible) {
		return null
	}

	const handleDateChange = date => {
		setSelectedDate(date)
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
									<DatePicker
										selected={selectedDate}
										onChange={handleDateChange}
										minDate={today}
									/>
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

					<Tags />

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

const mapStateToProps = state => ({
	isTaskCardVisible: state.taskCard.isTaskCardVisible
})

export default connect(mapStateToProps)(TaskCard)
