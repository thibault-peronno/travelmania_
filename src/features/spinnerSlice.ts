import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SpinnerState {
    load:boolean
}

const initialState: SpinnerState = {
    load: false,
}

export const spinnerSlice = createSlice({
    name: 'spinnerState',
    initialState,
    reducers: {
        switchLoad: (state, action:PayloadAction<boolean>) => {
            console.log('switchLoad action', action);            
            state.load = action.payload;
        },
    },
});

export const { switchLoad } = spinnerSlice.actions;

export default spinnerSlice.reducer;