import { getUserInfo, getUsersCount } from "@/api/dashboard"
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UserCard from "@/components/ui/usercard"
import { IUser } from "@/interface/user"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

export default function DashboardPage() {
    const [usersCount, setUsersCount] = useState(0)
    const [userInfo, setUserInfo] = useState({} as IUser);

    useEffect(() => {
        const fetchData = async () => {
            const count = await getUsersCount()
            setUsersCount(count)
            const data = await getUserInfo();
            setUserInfo(data);
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
                        <p className="text-2xl font-bold">{userInfo.friends?.length}</p>
                    </CardContent>
                </Card>
                <div className="col-span-full flex justify-center">
                    <UserCard
                        {...userInfo}
                    // name={userInfo.name}
                    // surname="Shukurzade"
                    // username="kanan-shukurzadeh"
                    // email="kenanshukurzade@gmail.com"
                    // imageUrl="https://media.istockphoto.com/id/911983386/photo/portrait-of-a-happy-little-girl-laughing-and-smiling.jpg?s=612x612&w=0&k=20&c=3lA0ouSyQQHow2ZutUM2zlIloVRKJ69i9ohA1WbCeBc="
                    />
                </div>

            </DashboardLayout>
        </>
    )
}
