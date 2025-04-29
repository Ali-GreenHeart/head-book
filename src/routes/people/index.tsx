import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import DB from "@/db/db.json";

const People = () => (
  <>
    <div className="wrapper">
      <h1 className="text-3xl font-bold p-4 text-center">People</h1>
      <div className="main mt-8">
        <div className="card bg-gray-50 p-3 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {DB.users.map((user) => (
              <div
                key={user.id}
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
                <div>
                  <div className="flex justify-end">
                    <div
                      className={`${buttonVariants({
                        variant: "addFriend",
                      })} hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg`}
                    >
                      <span className="text-lg relative bottom-[2.3px]">+</span>
                      <span>Add Friend</span>
                    </div>
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

export default People;
