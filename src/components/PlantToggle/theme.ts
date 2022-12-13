import { darkColors, lightColors } from "../../theme/colors";
import { PlantToggleTheme } from "./types";

export const light: PlantToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PlantToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
