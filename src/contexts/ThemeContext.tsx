'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('auto');
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load theme from localStorage on mount
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // If no saved theme, check if dark class is already applied
            const root = document.documentElement;
            if (root.classList.contains('dark')) {
                setTheme('dark');
            } else {
                setTheme('auto');
            }
        }
    }, []);

    useEffect(() => {
        if (!mounted) return; // Don't run on initial mount

        // Save theme to localStorage
        localStorage.setItem('theme', theme);

        // Apply theme to document
        const root = document.documentElement;
        
        if (theme === 'auto') {
            // Remove any existing theme classes
            root.classList.remove('light', 'dark');
            // Let CSS handle auto theme via prefers-color-scheme
        } else {
            // Remove auto theme and apply specific theme
            root.classList.remove('light', 'dark');
            if (theme === 'dark') {
                root.classList.add('dark');
            }
        }

        // Update resolved theme for components that need it
        if (theme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const isDark = mediaQuery.matches;
            setResolvedTheme(isDark ? 'dark' : 'light');
            
            // Also apply the resolved theme class for auto mode
            if (isDark) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
            
            const handleChange = (e: MediaQueryListEvent) => {
                const newIsDark = e.matches;
                setResolvedTheme(newIsDark ? 'dark' : 'light');
                if (newIsDark) {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }
            };
            
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        } else {
            setResolvedTheme(theme);
        }
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
