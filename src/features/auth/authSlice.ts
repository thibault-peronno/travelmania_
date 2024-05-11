import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthActions from './authActions';
// import type { RootState } from '../../store';

const authActions = new AuthActions();

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
    email: "thibault@santiane.com",
    password:"password!"
}

export const authSlice = createSlice({
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
        
        // login: async (state)=>{
        //     const response = await authService.login(state.email, state.password)
        //     console.log(response);
            
        // }
    },
    extraReducers: (builder) => {
        builder
         .addCase(authActions.login.pending, () => {
            // Gérer l'état de chargement
          })
         .addCase(authActions.login.fulfilled, (state, action) => {
            console.log('fulfilled', state, action);
            
            // Gérer l'état de réussite
          })
         .addCase(authActions.login.rejected, () => {
            // Gérer l'état d'échec
          });
      },
});

/* destructuring pour exporter les actions */
export const { handleChangeFielLogin } = authSlice.actions;

export default authSlice.reducer;