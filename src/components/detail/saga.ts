import { AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { call, put, takeLatest } from "redux-saga/effects";
import { menuBoardAPI } from "../../api";
import { MenuType, OptionGroupType } from "../../common/type";
import { setDetailLoading, setMenu, setOptinGroup } from "./slice";

function* getMenuInfoSaga(action: {
  type: string,
  payload: {
    menuId: number
  }
}) {
  const response: AxiosResponse<MenuType> = yield call(menuBoardAPI.getMenuInfo, action.payload.menuId);
  
  if (response.status === StatusCodes.OK) {
    yield put(setMenu(response.data));
  }
};

function* getOptionGroupSaga(action: {
  type: string,
  payload: {
    menuId: number
  }
}) {
  const response: AxiosResponse<OptionGroupType[]> = yield call(menuBoardAPI.getMenuOptions, action.payload.menuId);
  
  if (response.status === StatusCodes.OK) {
    yield put(setOptinGroup(response.data));
    yield put(setDetailLoading(false));
  }
}

export function* detailSaga() {
  yield takeLatest('/detail/getMenuInfoSaga', getMenuInfoSaga);
  yield takeLatest('/detail/getOptionGroupSaga', getOptionGroupSaga);
};