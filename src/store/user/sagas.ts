import { userLoginAsync } from './reducer';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { User } from '../../types/interfaces/user';


function* fetchUserLogin(action: any) {
  try {
    const res: User = yield Promise.resolve({login: action.payload.login, id: 1}).then(user => user);

    yield put(userLoginAsync.success(res));
  } catch (error) {
    if (error instanceof Error && error.message) {
      yield put(userLoginAsync.failure(error));
    } else {
      yield put(userLoginAsync.failure(new Error('User login error')));
    }
  }
}

function* watchUserLogin() {
  yield takeLatest(userLoginAsync.request, fetchUserLogin);
}

export const userSagas = function* () {
  yield all([
    fork(watchUserLogin)
  ]);
};
