import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import 'normalize.css'
import '../assets/css/main.css'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

