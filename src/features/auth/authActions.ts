// authActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.services';
import { AxiosError } from 'axios';

const authService = new AuthService();

type LoginCredentials = {
    email: string;
    password: string;
  };

class AuthActions {

    login = createAsyncThunk<LoginCredentials, LoginCredentials>(
      'auth/login',
      
      async (credentials, thunkAPI) => {
          console.log(credentials);
        try {
          const response = await authService.login(credentials.email, credentials.password);
          console.log(response.data);
          return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            return thunkAPI.rejectWithValue(axiosError.response);
        }
      }
    );
}

export default AuthActions;

