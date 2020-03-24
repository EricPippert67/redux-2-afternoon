import axios from 'axios';


const intialState= {
    email:null,
    firstName: null,
    LastName: null

}
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = ()=> {
    let data = axios.get('./auth/user-data').then(res => res.data)
    return{
        type: REQUEST_USER_DATA,
        payload:data
    }
}

export default function reducer(state =intialState, action){
    switch (action.type){
    case REQUEST_USER_DATA + '_FULFILLED':
        const{email,firstName, LastName}= action.payload.user
        return{email, firstName, LastName};
        default:
            return state;
    }
}