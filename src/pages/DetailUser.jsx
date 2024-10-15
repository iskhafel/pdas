import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Spinner, Button, Breadcrumb } from "flowbite-react";

export default function DetailUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner aria-label="Loading" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <Breadcrumb aria-label="breadcrumb" className="my-4 text-3xl">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/list-users">Users</Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-4 text-white">Detail of User</h1>
      <Card className="max-w-sm w-full mx-auto">
        <img src={user.avatar} alt={user.first_name} className="mx-auto" />
        <h2 className="text-2xl font-bold text-center">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-center">{user.email}</p>
        <p className="text-center">ID: {user.id}</p>
        <Button onClick={() => navigate("/list-users")}>Back</Button>
      </Card>
    </div>
  );
}
