import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


type User = {
  username: string;
  name: string;
  surname: string;
}


export default function PersonPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8977/users${id}`);
      if (!res.ok) throw new Error("User not found");

      const data: User = await res.json();
      console.log("Fetched data:", data);
      setUser(data);
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);


  if (loading) return <div className="p-4">Loading...</div>;
  if (!user) return <div className="p-4">User not found.</div>;

  return (
    <>
      <Helmet>
        <title>{user.name} {user.surname} - Profile</title>
        <meta name="description" content={`Profile of ${user.username}`} />
      </Helmet>
      <div className="p-4">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Surname:</strong> {user.surname}</p>
      </div>
    </>
  );
}
