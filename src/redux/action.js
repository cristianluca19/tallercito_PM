export const ADD = 'ADD'



export function addPersonajes(payload){
    return{
        type: ADD,
        payload
    }
}