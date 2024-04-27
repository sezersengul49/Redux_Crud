import actionTypes from "../actionTypes";

actionTypes

const initialState = {
    todos: [],
    isDarkMode: true,
    x: '',
    y: '',

};


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {...state, todos:state.todos.concat(action.payload) };


        case actionTypes.DELETE:
            const filtred =state.todos.filter((i)=> i.id !== action.payload);

            return {...state, todos:filtred } ;

            case actionTypes.UPDATE:
           const updatedArr= state.todos.map((i)=> (i.id ===action.payload.id ? action.payload: i))

            return {...state, todos:updatedArr } ;

            case actionTypes.SET:
                return {...state, todos:action.payload}


        default:
            return state;




    }
}
export default todoReducer;