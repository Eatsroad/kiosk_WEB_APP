//menu board
export enum CategoryRoleEnum {
  B = 'BIG',
  S = 'SMALL',
  E = 'ETC',
}
export interface MenuBoardResponse extends CategoryType {}

//menu
export interface MenuType {
  menu_id: number;
  name: string;
  price: number;
  description: string;
  state: string;
}

//category
export interface CategoryType {
  name: string;
  description: string;
  state: string;
  role: CategoryRoleEnum,
  menus: MenuType[];
}

//option group
export interface OptionGroupType {
  name: string;
  description: string;
  state: string
  option: OptionType[];
}

//option
export interface OptionType {
  option_id: number;
  name: string;
  price: number;
  state: string;
}

//store

export interface StoreInfo {
  name: string;
}
//etc