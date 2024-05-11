import { createSlice, PayloadAction} from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

interface LoginState {
    email:string
    password:string
}
interface FieldLoginPayload {
    type: string;
    value: string;
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
        handleChangeFielLogin: (state, action:PayloadAction<FieldLoginPayload>) => {
            // console.log(action.payload);
            if (action.payload.type === "email") {
                state.email = action.payload.value;
              }
              if (action.payload.type === "password") {
                state.password = action.payload.value;
              }
        },
    },
});

/* destructuring pour exporter les actions */
export const { handleChangeFielLogin } = loginSlice.actions;

export default loginSlice.reducer;