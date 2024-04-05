export interface MenuItemModifiersItemsType {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  available: boolean
}

export interface MenuItemModifiersType {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: MenuItemModifiersItemsType[];
}

export interface MenuItemType {
  id: number;
  name: string;
  description?: string;
  price: number;
  images: { id: number; image: string }[];
  modifiers: MenuItemModifiersType[];
  quantity?: number;
  selectedModifierId?: number; 
  selectedModifierName?: number; 
  selectedModifierPrice?: number; 
}

interface MenuSectionImageType {
  id: number;
  image: string;
}

export interface MenuSectionType {
  id: number;
  name: string;
  items: MenuItemType[];
  price: number;
  images: MenuSectionImageType[];
}

export interface MenuDataType {
  sections: MenuSectionType[];
}