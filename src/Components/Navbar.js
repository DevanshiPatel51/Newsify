import React, { Component } from 'react'
import { Link } from "react-router-dom";



export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ color: "white", textDecoration: "none" }} to="/">Newsify</Link>
                        <button className="navbar-toggler" type="button" style={{ color: "white"}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link" to="/business">Business</Link></li>
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link" to="/Sports">Sports</Link></li>
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link" to="/Science">Science</Link></li>
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link" to="/Technology">Technology</Link></li>
                                <li className="nav-item me-4"><Link style={{ color: "white", textDecoration: "none" }} className="nav-Link" to="/Entertainment">Entertainment</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        ) 
    }
}

export default Navbar

