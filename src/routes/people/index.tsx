import { buttonVariants } from "@/components/ui/button";
import DB from "@/db/db.json";

const People = () => {
    return (
        <>
            <div className="wrapper">
                <h1 className="text-3xl font-bold">People</h1>
                <div className="main mt-2.5">
                    <div className="card bg-gray-100 p-4">
                        <div className="flex flex-wrap gap-4">
                            {DB.users.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex flex-col space-x-4 p-4 border-4 rounded-md"
                                >
                                    <img
                                        src={user.imageUrl}
                                        alt={user.name}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold truncate max-w-xs">{user.name}</p>
                                        <p className="text-sm text-gray-500 truncate max-w-xs">{user.username}</p>
                                    </div>
                                    <div>
                                        <div className={buttonVariants({ variant: "addFriend" })}>
                                            Add Friend
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default People;
