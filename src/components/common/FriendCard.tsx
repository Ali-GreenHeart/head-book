import { AuthContext } from "@/context/AuthContext"
import { IUser } from "@/interface/user"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { Button, buttonVariants } from "../ui/button"
import { addFriend } from "@/api/user"

const FriendCard = ({ user, isFriend }: { user: IUser; isFriend: boolean; }) => {
    const [isAdded, setIsAdded] = useState(false)
    const { auth } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        setIsAdded(isFriend)
    }, [isFriend])

    const btnSubmit = async (e: any) => {
        console.dir(e.preventDefault)
        e.preventDefault()
        if (!auth.id) {
            return navigate('/login');
        }
        const _isAdded = await addFriend(user.id, auth.id)
        setIsAdded(_isAdded)
    }

    return (
        <div
            className="flex flex-col space-y-4 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
            <div className="flex items-center space-x-4">
                <Link to={`/people/${user.username}`}>
                    <img
                        src={user.imageUrl}
                        alt={user.name}
                        className="h-16 w-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </Link>
                <div>
                    <Link
                        to={`/people/${user.username}`}
                        className="text-lg font-semibold truncate max-w-xs text-gray-800 hover:underline"
                    >
                        {user.name}
                    </Link>
                    <p className="text-sm text-gray-500 truncate max-w-xs select-none">
                        @{user.username}
                    </p>
                </div>
            </div>
            {
                user.id !== auth.id && <div>
                    <div className="flex justify-end">
                        <Button
                            onClick={btnSubmit}
                            className={`${buttonVariants({
                                variant: isAdded ? "link" : "addFriend",
                            })} ${isAdded ? "bg-red-900" : "bg-primary"} hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center space-x-2 text-white px-4 py-2 rounded-lg`}>
                            {
                                isAdded ?
                                    "- Remove Friend"
                                    : "+ Add Friend"
                            }
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}
export default FriendCard
