// authActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.services';
import { AxiosError } from 'axios';
import { switchLoad } from '../spinnerSlice';

const authService = new AuthService();

type LoginCredentials = {
    email: string;
    password: string;
  };
  
  class AuthActions {
    
    login = createAsyncThunk<LoginCredentials, LoginCredentials>(
      'auth/login',
      async (credentials, thunkAPI) => {
        try {
          /*update the spinner property load */
          thunkAPI.dispatch(switchLoad(true));
          const response = await authService.login(credentials.email, credentials.password);
          if(response.token){
            thunkAPI.dispatch(switchLoad(false))
          }
          return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            return thunkAPI.rejectWithValue(axiosError.response);
        }
      }
    );
}

export default AuthActions;

