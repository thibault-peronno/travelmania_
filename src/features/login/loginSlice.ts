import { createSlice, PayloadAction} from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

interface LoginState {
    email:string
    password:string
}

/* initialisation des variable nécessaire à ce state */
const initialState: LoginState = {
    email: "test",
    password:"password test"
}

export const loginSlice = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        handleChangeFielLogin: (state, action:PayloadAction<string>) => {
            console.log(action.payload);
            if (action.payload === "email") {
                state.email = action.payload;
              }
              if (action.payload === "password") {
                state.password = action.payload;
              }
        },
    },
});

/* destructuring pour exporter les actions */
export const { handleChangeFielLogin } = loginSlice.actions;

export default loginSlice.reducer;