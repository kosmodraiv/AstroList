import React, { useState } from 'react'
import { connect } from 'react-redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/ru'
registerLocale('ru', es)

import Tags from './Tags'

import { useTaskCardError } from './TaskError'

const TaskCard = ({ isTaskCardVisible }) => {
	const today = new Date()
	const [selectedDate, setSelectedDate] = useState(today)

	const {
		title,
		description,
		isResetDisabled,
		isSaveDisabled,
		isTitleValid,
		isDescriptionValid,
		handleTitleChange,
		handleDescriptionChange
	} = useTaskCardError()

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
							value={title}
							onChange={handleTitleChange}
						/>
					</label>

					<div className="deadline">
						<span className="label">Дедлайн</span>
						<span className="date">
							<DatePicker
								selected={selectedDate}
								onChange={handleDateChange}
								minDate={today}
								locale="ru"
								dateFormat="dd MMM yyyy"
							/>
						</span>
					</div>

					<div className="description">
						<label className="label">
							Описание
							<textarea
								className="text"
								placeholder="После изучения всех технологий, завершить работу над проектами и найти работу."
								name="description"
								value={description}
								onChange={handleDescriptionChange}
							/>
						</label>
					</div>

					<Tags />

					<div className="errors">
						{!isTitleValid && (
							<div className="errorMessage">
								Минимальное количество символов в заголовке: 3
							</div>
						)}
						{!isDescriptionValid && (
							<div className="errorMessage">
								Минимальное количество символов в описании: 3
							</div>
						)}
					</div>

					<div className="form-controls">
						<button
							className="button-reset-task"
							type="reset"
							disabled={isResetDisabled}
						>
							Reset
						</button>
						<button
							className="button-save-task"
							type="submit"
							disabled={isSaveDisabled}
						>
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
