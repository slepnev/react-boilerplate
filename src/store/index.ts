import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { initialUserState, userReducer, UserState } from './user/reducer';
import { userSagas } from './user/sagas';

// The top-level state object
export interface ApplicationState {
  user: UserState
}

export const initialState = {
  user: initialUserState
};

export const rootReducer = combineReducers({
  user: userReducer,
});

export function* rootSaga() {
  yield all([fork(userSagas)])
}
