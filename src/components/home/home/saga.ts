import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { menuBoardAPI } from "../../../api";
import { MenuBoardResponse } from "../../../common/type";
import { StatusCodes } from "http-status-codes";
import { setMenuBoardData, setLoadingMenuboard } from "./slice";

function* getAllMenuBoardSaga(action: {
  type: string;
  payload: {
    storeId: string;
  }
}) {
  localStorage.setItem('storeId', action.payload.storeId);

  const response: AxiosResponse<MenuBoardResponse[]> = yield call(menuBoardAPI.getAllCategory, action.payload.storeId);

  if (response.status === StatusCodes.OK) {
    yield put(setMenuBoardData(response.data));
    yield put(setLoadingMenuboard(false));
    console.log(response.data);
  } else { console.log('error')}
  
}

export function* menuBoardSaga(): Generator {
  yield takeLatest('/getAllMenuBoardSaga', getAllMenuBoardSaga);
}

