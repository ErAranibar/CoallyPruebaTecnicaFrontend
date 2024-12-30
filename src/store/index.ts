import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import authReducer from './authSlice';
import taskModalReducer from './taskModalSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    taskModal: taskModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
