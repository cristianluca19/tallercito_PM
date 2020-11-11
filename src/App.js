import React, {useState, useEffect} from 'react'
import { Route} from "react-router-dom";
import Nav from './components/Nav'
import Container from './components/Container'
import Details from './components/Details'
import './App.css';
import axios from 'axios';



export default function App() {

  const [characters, setCharacters] = useState([]);

  const fetchRick = async () => {
    await axios.get('https://rickandmortyapi.com/api/character')
    .then(req => {
      setCharacters([...req.data.results])
    })
  }

  useEffect(() => {
    fetchRick();
  },[setCharacters])

  const filtro = id => {
    const character = characters.filter(el => el.id == id)
    return character[0]
  }

  return (
    <div >
     <Route path='/' render={()=> <Nav/>}/>
     <Route exact path='/' render={()=> <Container characters={characters}/>}/>
     <Route exact path='/detail/:id' render={({ match })=> <Details character={filtro(match.params.id)}/>}/>
    </div>
  );
}