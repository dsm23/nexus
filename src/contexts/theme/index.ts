import { createContext } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const noop = () => {};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: noop,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
