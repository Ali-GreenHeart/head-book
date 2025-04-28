import { buttonVariants } from '@/components/ui/button';
import { Bell, Users } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router';
import { ModeToggler } from './mode-toggler';

const Navbar: React.FC = () => {
    const l = useLocation()


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
            <div className='space-x-1'>
                {
                    !l.pathname.includes('/register') && <Link className={buttonVariants()} to="/register">Come to me</Link>
                }
                <ModeToggler />
            </div>
        </nav>
    );
};

export default Navbar;
