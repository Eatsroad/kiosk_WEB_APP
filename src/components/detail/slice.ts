import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuType, OptionGroupType } from "../../common/type";

interface DetailState {
  loading: boolean;
  menu: MenuType | null,
  optionGroup: OptionGroupType[];
}
const initialState: DetailState = {
  loading: true,
  menu: null,
  optionGroup: []
}
const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetailLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMenu: (state, action: PayloadAction<MenuType>) => {
      state.menu = action.payload;
    },
    setOptinGroup: (state, action: PayloadAction<OptionGroupType[]>) => {
      state.optionGroup = action.payload;
    }
  }
});

export const { setDetailLoading, setMenu, setOptinGroup } = detailSlice.actions;
export default detailSlice.reducer;