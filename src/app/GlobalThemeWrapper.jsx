"use client"
import {ThemeProvider} from "styled-components";
import {useLocalStorage} from "usehooks-ts";
import {GlobalStyle} from "@/thems/GlobalStyle";
import {defaultTheme} from "@/thems/defaultTheme";
import {useEffect, useState} from "react";


export default function GlobalThemeWrapper({children}) {

    const [storedTheme,] = useLocalStorage("theme", defaultTheme);
    const [theme, setTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem("theme");
        return storedTheme ? JSON.parse(storedTheme) : defaultTheme;
    });

    useEffect(() => {
        setTheme(storedTheme);
    }, [storedTheme]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}