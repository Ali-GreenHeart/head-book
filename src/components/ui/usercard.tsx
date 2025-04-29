import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface UserCardProps {
    name: string
    surname: string
    username: string
    imageUrl: string
    email: string
}

export default function UserCard({
    name,
    surname,
    username,
    imageUrl,
    email,
}: UserCardProps) {
    return (
        <Card className="w-full h-full bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden ">
            <CardHeader className="flex flex-col items-center text-center space-y-2">
                <img
                    src={imageUrl}
                    alt={`${name} ${surname}`}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                />
                <h3 className="text-lg font-bold text-gray-800">{name} {surname}</h3>
                <p className="text-sm text-muted-foreground">@{username}</p>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1 px-4 pb-4 flex justify-center">
                <p>
                    <span className="font-medium">Email:</span> {email}
                </p>
            </CardContent>
        </Card>
    )
}
