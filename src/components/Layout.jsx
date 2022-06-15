import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import Sidebar from './shared/sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <main>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <Navbar toggle={toggle} />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout