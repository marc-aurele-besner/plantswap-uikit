import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    inverseCardHeader: lightColors.gradients.inverseCardHeader,
    blue: lightColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: lightColors.gradients.violet,
    gold: lightColors.gradients.gold,
    newTrees: lightColors.gradients.newTrees,
    rainforest: lightColors.gradients.rainforest,
    wildLife: lightColors.gradients.wildLife,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    inverseCardHeader: darkColors.gradients.inverseCardHeader,
    blue: darkColors.gradients.blue,
    bubblegum: darkColors.gradients.bubblegum,
    violet: darkColors.gradients.violet,
    gold: darkColors.gradients.gold,
    newTrees: darkColors.gradients.newTrees,
    rainforest: darkColors.gradients.rainforest,
    wildLife: darkColors.gradients.wildLife,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
