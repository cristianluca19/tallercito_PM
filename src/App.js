import React from 'react'
import { Route} from "react-router-dom";
import Nav from './components/Nav'
import Card from './components/Card'
import Details from './components/Details'
import './App.css';



export default function App() {


  return (
    <div >
     <Route path='/' render={()=> <Nav/>}/>
     <Route exact path='/' render={()=> <Card/>}/>
     <Route exact path='/deatil' render={()=> <Details/>}/>
    </div>
  );
}