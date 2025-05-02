import { getFriends } from "@/api/dashboard";
import { getUsers } from "@/api/user";
import FriendCard from "@/components/common/FriendCard";
import { IUser } from "@/interface/user";
import { useEffect, useState } from "react";

const People = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [friends, setFriends] = useState([] as string[])

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
    getFriends().then((_f) => {
      if (_f) {
        setFriends(_f)
      }
    })

  }, [])
  return (
    <>
      <div className="wrapper">
        <h1 className="text-3xl font-bold p-4 text-center">People</h1>
        <div className="main mt-8">
          <div className="card bg-gray-50 p-3 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {users.map((user) => (
                <FriendCard isFriend={friends.includes(user.id)} user={user} key={user.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default People;
