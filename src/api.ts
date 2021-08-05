import axios, { AxiosResponse } from "axios";
import { MenuBoardResponse, MenuType, OptionGroupType, StoreInfo } from "./common/type";

const api = axios.create({
  baseURL: 'http://3.35.150.237:3000'
});

export const menuBoardAPI = {
  getStoreInfo : async (
    storeId: string
  ): Promise<AxiosResponse<StoreInfo>> => {
    const result: AxiosResponse<StoreInfo> = await api.get(`menuboard/storeSummary?storeId=${storeId}`);
    return result;
  },
  getAllCategory: async (
    storeId: string
  ): Promise<AxiosResponse<MenuBoardResponse[]>> => {
    const result: AxiosResponse<MenuBoardResponse[]> = await api.get(`menuboard/categoryAndMenu?storeId=${storeId}`);
    return result;
  },
  getMenuInfo: async (
    menuId: number
  ): Promise<AxiosResponse<MenuType>> => {
    const result: AxiosResponse<MenuType> = await api.get(`menuboard/menuSummary?menuId=${menuId}`);
    return result;
  },
  getMenuOptions: async (
    menuId: number,
  ): Promise<AxiosResponse<OptionGroupType[]>> => {
    const result: AxiosResponse<OptionGroupType[]> = await api.get(`menuboard/optiongroupAndOption?menuId=${menuId}`);
    return result;
  },
}