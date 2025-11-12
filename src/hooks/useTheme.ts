import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../contexts/ThemeContext";

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext) as ThemeContextType;
};
