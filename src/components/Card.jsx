import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({character}) {
    return character && (
    <div className="col-3 m-3 card p-3 text-center shadow-lg bg-dark card-character" key={character.id}>
        <Link to={`/detail/${character.id}`}>
            <h3 className="card-title card-character">{character.name}</h3>    
            <img src={character.image} alt='Imagen de personaje' className="img-fluid rounded-circle p-3"/>
            <strong>{character.status}</strong>
        </Link>
    </div>)
}