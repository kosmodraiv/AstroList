import { useState } from 'react'

export const useTaskCardError = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const [isResetDisabled, setIsResetDisabled] = useState(true)
	const [isSaveDisabled, setIsSaveDisabled] = useState(true)

	const [isTitleValid, setIsTitleValid] = useState(true)
	const [isDescriptionValid, setIsDescriptionValid] = useState(true)

	const validateField = (value, setValid) => {
		const isValid = value.length >= 3
		setValid(isValid)
		return isValid
	}

	const handleTitleChange = event => {
		const { value } = event.target
		setTitle(value)
		const isTitleValid = validateField(value, setIsTitleValid)
		setIsSaveDisabled(!isTitleValid || !isDescriptionValid)
		setIsResetDisabled(!isTitleValid || !isDescriptionValid)
	}

	const handleDescriptionChange = event => {
		const { value } = event.target
		setDescription(value)
		const isDescriptionValid = validateField(value, setIsDescriptionValid)
		setIsSaveDisabled(!isTitleValid || !isDescriptionValid)
		setIsResetDisabled(!isTitleValid || !isDescriptionValid)
	}

	return {
		title,
		description,
		isResetDisabled,
		isSaveDisabled,
		isTitleValid,
		isDescriptionValid,
		handleTitleChange,
		handleDescriptionChange
	}
}
