import { createSlice, /*PayloadAction*/ } from "@reduxjs/toolkit";

interface userState {
    id: number
    firstname: string
    lastname: string
    email: string
    role: number
}

const initialState: userState = {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    role: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        handleUpdateUserData: (state, action) => {
            console.log('state', state, 'action', action)
        }
    },
});

export const { handleUpdateUserData } = userSlice.actions;

export default userSlice.reducer;