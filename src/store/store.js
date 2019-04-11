import {createStore} from 'redux'
import todoReducer from '../reducers/todoReducer'

const myState= {
    todos: []
}

const configureStore = (state= myState) => {
    return createStore(todoReducer,state)
}

export default configureStore