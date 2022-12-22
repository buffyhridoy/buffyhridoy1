import React, { createContext, useState } from 'react';

// import { theDarkTheme, theLightTheme } from '../theme/theme';
import { blueThemeDark, blueThemeLight } from '../theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    // const [theme, setTheme] = useState(theDarkTheme);
    const [theme, setTheme] = useState(blueThemeDark);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDark, setDark] = useState(true);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const changeTheme = () => {
        if (isDark) {
            // setTheme(theLightTheme);
            setTheme(blueThemeLight);
            setDark(false);
        } else {
            setTheme(blueThemeDark);
            setDark(true);
        }
    }

    const value = { theme, drawerOpen, setHandleDrawer, changeTheme, isDark }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider