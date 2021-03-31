import React from 'react'
import Banner from "../components/Banner/Banner"
import Title from "../components/About/Title"
import About from '../components/About/About'
import Priority from '../components/Priorities/Priority'
import Technologies from '../components/Skills/Technologies'
import Projects from '../components/Projects/Projects'
import SmProject from '../components/smallProjects/SmProject'

function index() {
	return (
		<div>
			<Banner />
			<Title />
			<About />
			<Priority />
			<Technologies />
			<Projects />
			<SmProject />
		</div>
	)
}

export default index

