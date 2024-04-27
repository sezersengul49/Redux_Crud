
const initialState = {
    users: [],
    
    x: '',
    y: '',

};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EKLE':
            return state;


        case 'CIKAR':
            return state;


        default:
            return state;




    }
}
export default userReducer;