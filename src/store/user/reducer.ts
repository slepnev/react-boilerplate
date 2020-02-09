import { User } from '../../types/interfaces/user';
import { Action, action, createAsyncAction, createReducer } from 'typesafe-actions';

// Types
export enum UserActionTypes {
  LOG_IN_REQUEST = 'USER/LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'USER/LOG_IN_SUCCESS',
  LOG_IN_ERROR = 'USER/LOG_IN_ERROR',
  LOG_OUT = 'USER/LOG_OUT',
}

export interface UserState {
  readonly loading: boolean;
  readonly data: User | null;
  readonly error?: string;
}

// Actions
export const userLoginAsync = createAsyncAction(
  UserActionTypes.LOG_IN_REQUEST,
  UserActionTypes.LOG_IN_SUCCESS,
  UserActionTypes.LOG_IN_ERROR
)<{}, User, Error>();

export const userLogout = () => action(UserActionTypes.LOG_OUT);

// Reducer
export const initialUserState: UserState = {
  data: null,
  error: undefined,
  loading: false
};

export const userReducer = createReducer<UserState, Action<UserActionTypes>>(initialUserState, {
  [UserActionTypes.LOG_IN_REQUEST]: (state) => ({
    ...state, loading: true
  }),
  [UserActionTypes.LOG_IN_SUCCESS]: (state, {payload}) => ({
    ...state, data: payload, loading: false
  }),
  [UserActionTypes.LOG_IN_ERROR]: (state, {payload}: any) => ({
    ...state, data: null, error: payload.message, loading: false
  }),
  [UserActionTypes.LOG_OUT]: (state) => ({
    ...state, data: null, loading: false
  }),
});
