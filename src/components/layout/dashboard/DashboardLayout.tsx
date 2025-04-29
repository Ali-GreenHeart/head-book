import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Home, BarChart2, Settings } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router"
import { CiSettings } from "react-icons/ci";

interface DashboardLayoutProps {
    children: ReactNode
}

const navItems = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "Contact", icon: <BarChart2 size={18} />, href: "/contact" },
    { name: "Friends", icon: <Settings size={18} />, href: "/friends" },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-4">My Dashboard</h2>
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            to={item.href}
                            key={item.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <div className="flex gap-3.5 items-center">
                        <Link to="/edit" className={buttonVariants({ variant: "outline" })}><CiSettings /></Link>
                        <Button variant="outline">Logout</Button>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {children}
                </main>
            </div>
        </div>
    )
}
