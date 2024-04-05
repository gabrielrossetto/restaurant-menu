import { WebSettingsType } from "../@types/settings";
import { IMappedTheme, ITheme } from "../@types/themes";
import base from "./base";

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    '--nav-background': variables.navBackground || '',
    '--background': variables.background || '',
    '--primary': variables.primary || '',
    '--primary-hover': variables.primaryHover || '',
    '--secondary': variables.secondary || '',
    '--tertiary': variables.tertiary || '',
    '--default': variables.default || '',
    '--text-primary': variables.textPrimary || '',
    '--text-secondary': variables.textSecondary || '',
    '--text-tertiary': variables.textTertiary || '',
  };
};

export const applyTheme = (webSettings: WebSettingsType): void => {
  const theme: ITheme = {
    ...base,
    navBackground: webSettings?.navBackgroundColour || '',
    background: webSettings?.backgroundColour || '',
    primary: webSettings?.primaryColour || '',
    primaryHover: webSettings?.primaryColourHover || '',
  };

  const themeObject: IMappedTheme = mapTheme(theme);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    root.style.setProperty(property, themeObject[property]);
  });
};