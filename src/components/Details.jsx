import React from 'react'
import './Details.css';

export default function Details ({character}){
    if(character){
        console.log(character);
        character.created = new Date(character.created).toLocaleDateString();
        return (
            <div className="container">
                <div className="row">
                    <div className="card-detail m-5 bg-dark text-white p-4">
                        <div className="row">
                            <div className="col-3">
                                <img src={character.image} alt={"Imagen de " + character.name} className="img-fluid"/>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12 mb-5">
                                        <div className="d-flex justify-content-between mx-5">
                                            <span><b>Nombre:</b> {character.name}</span>
                                            <span><b>Genero:</b> {character.gender}</span>
                                            <span><b>Aparicion:</b> {character.created}</span>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-5">
                                        <div className="d-flex justify-content-between mx-5">
                                            <span><b>Estado:</b> {character.status}</span>
                                            <span><b>Especie:</b> {character.species}</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between mx-5">
                                            <span><b>Planeta:</b> {character.origin.name}</span>
                                            <span><b>Reside en:</b> {character.location.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    } else {
        return <div>Cargando...</div>
    }
}