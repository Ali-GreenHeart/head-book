import DashboardLayout from "@/components/layout/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">1,024</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Sales</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">$12,340</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">87%</p>
                </CardContent>
            </Card>
        </DashboardLayout>
    )
}
