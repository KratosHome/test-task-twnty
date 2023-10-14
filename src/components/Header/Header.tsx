"use client"

import {useLocalStorage} from 'usehooks-ts';
import {defaultTheme} from "@/thems/defaultTheme";
import {darkTheme} from "@/thems/darkTheme";
import {HeaderStyle} from "@/components/Header/HeaderStyle";
import {Button} from "@/components/UI/Button";

export default function Header() {
    const [, setTheme] = useLocalStorage("theme", defaultTheme);

    return (
        <HeaderStyle>
            <Button
                onClick={() => setTheme(defaultTheme)}
            >
                Use light theme
            </Button>
            <Button
                onClick={() => setTheme(darkTheme)}
            >
                Use Dark Theme
            </Button>
        </HeaderStyle>
    )
}