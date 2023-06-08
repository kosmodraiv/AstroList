import React, { useState } from 'react'
import TaskCard from './taskCard'
import { connect } from 'react-redux';
import { showTaskCard } from '../../lib/redux/taskCard/taskCardActions'

const Display = ({ showTaskCard }) => {
	const handleClick = () => {
        showTaskCard();
      };

	return (
		<main>
			<div className="controls">
				<i className="las" />
				<button className="button-create-task" onClick={handleClick}>Новая задача</button>
			</div>

			<div className="wrap">
				<div className="list empty">
					<div className="tasks"></div>
				</div>

				<TaskCard />
			</div>
		</main>
	)
}

const mapDispatchToProps = {
    showTaskCard,
};

export default connect(null, mapDispatchToProps)(Display);
