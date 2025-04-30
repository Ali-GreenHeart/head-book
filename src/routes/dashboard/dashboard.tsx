import { getFriends, getUsersCount } from "@/api/dashboard"
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UserCard from "@/components/ui/usercard"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

export default function DashboardPage() {
    const [usersCount, setUsersCount] = useState(0)
    const [friendsCount, setFriendsCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const count = await getUsersCount()
            setUsersCount(count)
            const friends = await getFriends()
            setFriendsCount(friends)
        }
        fetchData()
    }, [])
    return (
        <>
            <Helmet>
                <title>Head-Book dashboard - Show yourself!</title>
                <meta name="description" content="Dashboard!" />
            </Helmet>
            <DashboardLayout>
                <Card>
                    <CardHeader>
                        <CardTitle>People</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{usersCount}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Friends</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{friendsCount}</p>
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
