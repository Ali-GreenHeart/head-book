import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import DB from "@/db/db.json";

const People = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className="text-3xl font-bold">People</h1>
        <div className="main mt-2.5">
          <div className="card bg-gray-100 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {DB.users.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-col space-y-4 p-4 border-4 rounded-md"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.imageUrl}
                      alt={user.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <Link
                        to={`/people/${user.username}`}
                        className="text-lg font-semibold truncate max-w-xs  hover:underline"
                      >
                        {user.name}
                      </Link>
                      <p className="text-sm text-gray-500 truncate max-w-xs">
                        {user.username}
                      </p>
                    </div>
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
