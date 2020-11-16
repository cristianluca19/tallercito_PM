import React, {useState, useEffect} from 'react'
import { Route} from "react-router-dom";
import Nav from './components/Nav'
import Container from './components/Container'
import Details from './components/Details'
import Taller from './components/Taller'
import './App.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import * as action from './redux/action'


export default function App() {

  const dispatch = useDispatch()
  const characters = useSelector(store=> store.character)
  
  const fetchRick = async () => {
    await axios.get('https://rickandmortyapi.com/api/character')
    .then(req => {
      dispatch(action.addPersonajes(req.data.results))
    })
  }
  
 
  useEffect(() => {
    fetchRick();
  },[])

  const filtro = id => {
    const character = characters.filter(el => el.id == id)
    return character[0]
  }

  return (
    <div >
     <Route path='/' render={()=> <Nav/>}/>
     <Route exact path='/taller' render={()=> <Taller/>}/>
     <Route exact path='/' render={()=> <Container/>}/>
     <Route exact path='/detail/:id' render={({ match })=> <Details character={filtro(match.params.id)}/>}/>
    </div>
  );
}