'use client'

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()

    return (
        <Button 
            className="mr-10 p-4"
            variant="default"
            size='icon'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {
                theme === 'light' && <Moon className="transition-all"/>
            }
            {
                theme !== 'light' && <Sun  className="transition-all"/>
            }
        </Button>
    )
}