import React from 'react'
import Banner from "../components/Banner/Banner"
import Title from "../components/About/Title"
import About from '../components/About/About'
import Priority from '../components/Priorities/Priority'
import Technologies from '../components/Skills/Technologies'

function index() {
	return (
		<div>
			<Banner />
			<Title />
			<About />
			<Priority />
			<Technologies />
		</div>
	)
}

export default index

