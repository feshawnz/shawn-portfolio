import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, Landing, About, Skills, Experience, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <Skills />
            <Projects />
            <Experience />
            <About />
            {/* <Education /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
