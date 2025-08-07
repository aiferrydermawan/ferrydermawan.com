'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
    useEffect(() => {
        // Apply theme immediately to prevent flash
        const theme = localStorage.getItem('theme') || 'auto';
        const root = document.documentElement;
        
        if (theme === 'auto') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (isDark) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        } else if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    return null;
}
