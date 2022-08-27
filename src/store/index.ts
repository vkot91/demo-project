import postsReducer from './posts/posts-slice';
import { AnyAction, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const appReducer = combineReducers({
  postsReducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
