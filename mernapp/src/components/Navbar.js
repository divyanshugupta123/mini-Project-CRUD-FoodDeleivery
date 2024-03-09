import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <Link className="navbar-brand fs-1 fst-italic me-auto" to="/">GoFood</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
