import React, { useState } from 'react'
import { connect } from 'react-redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/ru'
registerLocale('ru', es)

import Tags from './tags'

const TaskCard = ({ isTaskCardVisible }) => {
	const today = new Date()
	const [selectedDate, setSelectedDate] = useState(today)

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [titleError, setTitleError] = useState('');
	const [descriptionError, setDescriptionError] = useState('');

	const [isResetDisabled, setIsResetDisabled] = useState(true);
	const [isSaveDisabled, setIsSaveDisabled] = useState(true);

	const [isTitleValid, setIsTitleValid] = useState(true);
	const [isDescriptionValid, setIsDescriptionValid] = useState(true);


	const handleTitleChange = event => {
		const { value } = event.target;
		setTitle(value);
	  
		if (value.length < 3) {
		  setIsTitleValid(false);
		  setIsSaveDisabled(true);
		} else {
		  setIsTitleValid(true);
		  if (!isDescriptionValid) {
			setIsSaveDisabled(true);
		  } else {
			setIsSaveDisabled(false);
		  }
		}
	  };
	  
	  const handleDescriptionChange = event => {
		const { value } = event.target;
		setDescription(value);
	  
		if (value.length < 3) {
		  setIsDescriptionValid(false);
		  setIsSaveDisabled(true);
		} else {
		  setIsDescriptionValid(true);
		  if (!isTitleValid) {
			setIsSaveDisabled(true);
		  } else {
			setIsSaveDisabled(false);
		  }
		}
	  };
	  
	  
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
				  		{titleError && <div className="error-message">{titleError}</div>}
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
						{descriptionError && <div className="error-message">{descriptionError}</div>}
					</label>
					</div>

					<Tags />

					<div className="errors">
					  {!isTitleValid && <div className="errorMessage">Минимальное количество символов в заголовке: 3</div>}
					  {!isDescriptionValid && <div className="errorMessage">Минимальное количество символов в описании: 3</div>}
					</div>

					<div className="form-controls">
					  <button className="button-reset-task" type="reset" disabled={isResetDisabled}>
					    Reset
					  </button>
					  <button className="button-save-task" type="submit" disabled={isSaveDisabled}>
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
