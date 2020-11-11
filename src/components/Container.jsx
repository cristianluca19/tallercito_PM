import React from 'react'
import Card from './Card';

export default function Container(props) {
    return (
        <div className='container'>
            <div className="row">
                { props.characters.map(charac => <Card key={charac.id} character={charac}/>) }
            </div>
        </div>
      );
}