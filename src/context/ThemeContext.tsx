import React, { createContext, useState, useContext } from 'react';
import colors from '../constants/colors'

const lightTheme = {
  background: colors.WHITE_ONE,
  primary: colors.GREY_THREE,
  text: colors.BLACK_ONE,
  description: colors.GREY_SEVEN,
  price: colors.BLUE_FIVE,
  generic: colors.WHITE_FIVE,
  imageBg: colors.WHITE_TWO,
};

const darkTheme = {
  background: colors.BLACK_FOUR,
  primary: colors.GREY_TWO,
  text: colors.WHITE_ONE,
  description: colors.GREY_FIVE,
  price: colors.BLUE_FOUR,
  generic: colors.WHITE_SIX,
  imageBg: colors.GREY_FOUR,
};

type ThemeStyle = typeof lightTheme

const ThemeContext = createContext<{
  themeStyle: ThemeStyle | undefined;
  toggleTheme: () => void;
  isDarkMode: boolean;
}>({
  themeStyle: undefined,
  toggleTheme: () => { },
  isDarkMode: false,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setThemeStyle(isDarkMode ? lightTheme : darkTheme);
    setIsDarkMode(isDarkMode ? false : true)
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeStyle, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
