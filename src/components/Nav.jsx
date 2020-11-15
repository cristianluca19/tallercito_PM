import React from 'react'
import Logo from '../assets/rick-and-morty-logo.png'

export default function Nav() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark position-top">
                <img src={Logo} alt='' width={180} />
                <a className="navbar-brand" href='/taller'>Tallercito PM's</a>
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                {/* <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form> */}
            </nav>
        </div>

    )
}