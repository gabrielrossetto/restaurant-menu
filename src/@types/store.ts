import { MenuDataType, MenuItemType } from "./menu";
import { SettingsType } from "./settings";

export interface MenuStateType {
  menuData: MenuDataType | null;
  loading: boolean;
  error: string | null;
  searchFilter: string;
}

export interface SettingsStateType {
  settings: SettingsType | null;
  loading: boolean;
  error: string | null;
}

export interface CartItemsType {
  items: MenuItemType[]
  total: number;
}
