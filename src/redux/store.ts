import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { all } from 'redux-saga/effects';
import { menuBoardSaga } from '../components/home/home/saga';
import menuboardSlice from '../components/home/home/slice';
import detailSlice from '../components/detail/slice';
import { detailSaga } from '../components/detail/saga';

function* rootSaga() {
  yield all([ menuBoardSaga(), detailSaga() ]);
};

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

export const store = configureStore({
  reducer: { 
    menuboardSlice,
    detailSlice,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;