import React, { useState } from 'react';
import { Bell, Users } from 'lucide-react';
import { useTheme } from '@@/theme-provider';
import { ModeToggler } from './mode-toggler';
import { Link } from 'react-router';
import { buttonVariants } from '@/components/ui/button';

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === 'dark');

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        setIsDark(!isDark);
    };

    return (
        <nav className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </div>

            <div className="flex space-x-6">
                <Link to="#" className={buttonVariants({ variant: "link" })}>
                    <Users className="inline-block" /> People
                </Link>
                <Link to="#" className={buttonVariants({ variant: "link" })}>
                    <Bell className="inline-block" /> Notifications
                </Link>
            </div>

            <ModeToggler />
        </nav>
    );
};

export default Navbar;
