import {applyMiddleware, createStore} from 'redux'
import { ADD } from './action'


const initialState={
    character:[]
}


                                                            
export function Reducer (state=initialState, action){
    switch (action.type){
        case ADD: 
        return {
            ...state,
            character: action.payload
        }
        default:{
            return state
        }
    }
}








export default createStore(Reducer)

