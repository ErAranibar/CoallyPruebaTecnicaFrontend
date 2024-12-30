import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
    isAuthenticated: boolean;
    token: string | null;
}

const loadTokenFromLocalStorage = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

const initialState: IAuthState = {
    isAuthenticated: !!loadTokenFromLocalStorage(),
    token: loadTokenFromLocalStorage(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', action.payload);
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

