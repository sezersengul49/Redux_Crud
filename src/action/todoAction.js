import actionTypes from "../store/actionTypes"



export const deleteTodo =(payload) => {
return {
    type: actionTypes.DELETE,
    payload,
}
}

export const updateTodo =(payload)=> {
   
    return {
        type: actionTypes.UPDATE,

     payload,
    }
};

export const addTodo =(payload)=> {
    return {
        type: actionTypes.ADD,

            payload,
    }
}

export const setTodos= (payload)=> ({
    type:actionTypes.SET,
    payload,
})