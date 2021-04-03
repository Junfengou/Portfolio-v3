import React from 'react'
import Banner from "../components/Banner/Banner"
import Title from "../components/About/Title"
import About from '../components/About/About'
import Priority from '../components/Priorities/Priority'
import Technologies from '../components/Skills/Technologies'
import Projects from '../components/Projects/Projects'
import SmProject from '../components/smallProjects/SmProject'
import Contact from '../components/Footer/Contact'
import Footer from '../components/Footer/Footer'

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
			<Contact />
			<Footer />
		</div>
	)
}

export default index

