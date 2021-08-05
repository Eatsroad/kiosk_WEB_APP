import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuBoardResponse } from "../../../common/type";

export interface HomeSliceState {
  loading: boolean;
  data: MenuBoardResponse[];
}
const initialState: HomeSliceState = {
  loading: true,
  data: [],
}

export const menuboardSlice = createSlice({
  name: 'menuboard',
  initialState,
  reducers: {
    setLoadingMenuboard: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setMenuBoardData: (state, action: PayloadAction<MenuBoardResponse[]>) => {
      state.data = action.payload
    },
  }
});

export const { setLoadingMenuboard, setMenuBoardData } = menuboardSlice.actions;
export default menuboardSlice.reducer