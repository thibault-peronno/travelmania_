import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthActions from './authActions';

const authActions = new AuthActions();

interface LoginState {
    email:string
    password:string
    token:string|undefined
}
interface FieldLoginPayload {
    type: string;
    value: string;
}

/* initial variable to this state */
const initialState: LoginState = {
    email: "thibault@santiane.com",
    password:"password!",
    token:""
}


export const authSlice = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        handleChangeFielLogin: (state, action:PayloadAction<FieldLoginPayload>) => {
            if (action.payload.type === "email") {
                state.email = action.payload.value;
            }
            if (action.payload.type === "password") {
                state.password = action.payload.value;
            }
        },
        },
        extraReducers: (builder) => {
            builder
            .addCase(authActions.login.pending, () => {
                /* I could use this part to display the spinner, if my property was manage on this state */
          })
         .addCase(authActions.login.fulfilled, (state, action) => {
            console.log('fulfilled', 'state', state, "action", action);
            /* add token here to update the token */
            state.token = action.payload.token;
          })
         .addCase(authActions.login.rejected, () => {
            console.log('slice rejected')
          });
      },
});

/* destructuring to export actions */
export const { handleChangeFielLogin } = authSlice.actions;

export default authSlice.reducer;