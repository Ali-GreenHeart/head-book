import DashboardLayout from "@/components/layout/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UserCard from "@/components/ui/usercard"
import { Helmet } from "react-helmet-async"

export default function DashboardPage() {
    return (
        <>
            <Helmet>
                <title>Head-Book dashboard - Show yourself!</title>
                <meta name="description" content="Dashboard!" />
            </Helmet>
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
                <div className="col-span-full flex justify-center">
                    <UserCard
                        name="Kenan"
                        surname="Shukurzade"
                        username="kanan-shukurzadeh"
                        email="kenanshukurzade@gmail.com"
                        imageUrl="https://media.istockphoto.com/id/911983386/photo/portrait-of-a-happy-little-girl-laughing-and-smiling.jpg?s=612x612&w=0&k=20&c=3lA0ouSyQQHow2ZutUM2zlIloVRKJ69i9ohA1WbCeBc="
                    />
                </div>

            </DashboardLayout>
        </>
    )
}
