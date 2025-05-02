import { buttonVariants } from '@/components/ui/button';
import { Bell, Users } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { ModeToggler } from './mode-toggler';
import { AuthContext } from '@/context/AuthContext';
const Navbar: React.FC = () => {
    const l = useLocation()
    const { auth } = useContext(AuthContext)

    return (
        <nav className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src="/images/demiryumruq.jpg" alt="Logo" className="h-16 w-16 object-cover rounded-full" />
            </div>

            <div className="flex space-x-6">
                <Link to='/people' className={buttonVariants({ variant: "link" })}>
                    <Users className="inline-block" /> People
                </Link>
                <Link to="/notifications" className={buttonVariants({ variant: "link" })}>
                    <Bell className="inline-block" /> Notifications
                </Link>
            </div>
            <div className='space-x-1'>
                {
                    !auth.id && <Link className={buttonVariants()} to="/register">Come to me</Link>
                }
                {
                    auth.id && <Link className={buttonVariants()} to="/dashboard">My Dashboard</Link>
                }
                <ModeToggler />
            </div>
        </nav>
    );
};

export default Navbar;
