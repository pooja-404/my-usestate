import React from 'react'
import { Link } from 'react-router-dom'
function Mynav() {
    return (
        <div>
            <nav>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/contact'}>
                    contact
                </Link>
                <Link to={'/about'}>
                    About
                </Link>
            </nav>
        </div>
    )
}
export default Mynav 