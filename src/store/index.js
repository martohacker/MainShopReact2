import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialAuthState = { token:"", email:"", id:"" };


const authReducer = (state = initialAuthState, action) => {
    if (action.type === 'login'){
        console.log(action.userInfo.token);
        return {
            token : action.userInfo.token,
            email : action.userInfo.email,
            id : action.userInfo.id,
            tipo : action.userInfo.tipo
        };
    }

    if (action.type === 'logout'){
        return {
            token : "",
            email : "",
            id: "",
            tipo: ""
        };
    }

    return state;
}

const store = createStore(authReducer);
export default store;
 
/*const authSlice = createSlice({
    name:'auth',
    initialAuthState,
    reducers: {
        login(state, action) {
            console.log(state);
            console.log("action"+action);
            email = action.payload.email;
            token = action.payload.userInfo.token;
        },
        logout(state) {
            state.token = "";
            state.email = "";
        }
    }
});

const store = configureStore({
    reducer: authSlice.reducer
});

export const authActions = authSlice.actions;
*/


