"use client";

import { Settings, Sun, Moon, Compass, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Chinese",
  "Japanese",
  "Korean",
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 bg-black/40 backdrop-blur-sm border-b border-gray-800">
      <div className="h-full w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold flex items-center gap-3 text-gray-100">
            <Image
              src="/earth-logo.png"
              alt="XpatAI Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            XpatAI
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-3 text-gray-300 hover:text-gray-100"
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`${
                    language === lang ? "bg-accent" : ""
                  } cursor-pointer`}
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
