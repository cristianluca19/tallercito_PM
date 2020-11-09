import React from 'react'
import { Link } from 'react-router-dom'


export default function Card() {

    return (


        <Link to='/details'>
            <div className='container'>
    <h3>{}</h3>
    <img hfre={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1200px-Harry_Potter_wordmark.svg.png'} alt=''/>
            </div>

        </Link>


    )
}