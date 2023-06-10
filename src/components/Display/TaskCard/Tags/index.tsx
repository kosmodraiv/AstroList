import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface tagsType {
	id: string
	name: string
	color: string
	bg: string
}

const Tags = () => {
	const [tags, setTags] = useState<tagsType[]>([])

	const getData = async () => {
		const { data } = await axios.get(
			'https://lab.lectrum.io/rtx/api/v2/todos/tags'
		)
		setTags(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="tags">
			{tags.map(item => (
				<span
					key={item.id}
					className="tag"
					style={{ color: item.color, backgroundColor: item.bg }}
				>
					{item.name}
				</span>
			))}
		</div>
	)
}

export default Tags
