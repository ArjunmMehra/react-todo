const todoReducer= (state,action) =>{
    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.find(val=>(val===action.payload))?state.todos:state.todos.concat(action.payload)
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(val=>val!==action.payload)
            }
        default:
            return state
        }
    }

export default todoReducer