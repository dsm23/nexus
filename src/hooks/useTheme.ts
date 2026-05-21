import { useContext } from "react";
import { ThemeProviderContext } from "~/contexts/theme";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  // oxlint-disable-next-line typescript/no-unnecessary-condition
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
