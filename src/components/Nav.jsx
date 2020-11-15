import React from 'react'
import Logo from '../assets/rick-and-morty-logo.png'

export default function Nav() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <img src={Logo} alt='' width={180} />
                <a className="navbar-brand" href='/'>Tallercito PM's</a>
                {/* <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form> */}
            </nav>
        </div>

    )
}