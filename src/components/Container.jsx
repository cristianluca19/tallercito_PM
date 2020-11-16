import React from 'react'
import Card from './Card';
import {useSelector} from 'react-redux'

export default function Container() {

    const pepito = useSelector(store=>store.character)

    return (
        <div className='container '>
            <div className="row">
                {pepito.map(charac => <Card key={charac.id} character={charac}/>) }
            </div>
        </div>
      );
}