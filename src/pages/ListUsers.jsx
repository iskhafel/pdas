import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Breadcrumb } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 3,
    total: null,
    total_pages: null,
  });
  const navigate = useNavigate();
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const [deleteError, setDeleteError] = useState("");

  const getUsersList = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`
      )
      .then((response) => {
        setUsers(response.data.data);
        setPagination({
          page: response.data.page,
          per_page: response.data.per_page,
          total: response.data.total,
          total_pages: response.data.total_pages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsersList();
  }, [pagination.page]);

  const handleNext = () => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  };

  const handleBack = () => {
    setPagination({ ...pagination, page: pagination.page - 1 });
  };

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`https://reqres.in/api/users/${id}`, config)
      .then((res) => {
        console.log(res);
        setDeleteSuccess("User deleted successfully");
        getUsersList();
      })
      .catch((err) => {
        setDeleteError(err.response.data.message);
        setDeleteSuccess("");
      });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <Breadcrumb aria-label="breadcrumb" className="my-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-3xl font-bold mb-4 text-white mt-4">
          List of Users
        </h1>
        {deleteSuccess && (
          <p className="text-green-500 font-bold text-3xl">{deleteSuccess}</p>
        )}
        {deleteError && (
          <p className="text-red-500 font-bold text-3xl">{deleteError}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {users.map((user) => (
            <Card
              key={user.id}
              className="max-w-sm w-full mx-auto cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold text-center">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-center">{user.email}</p>
              <Button onClick={() => handleUserClick(user.id)}>View</Button>
              <Button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 hover:bg-red-700"
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center bg-center gap-2 bg-slate-800 pt-12">
          <Button disabled={pagination.page === 1} onClick={handleBack}>
            Back
          </Button>
          <Button
            disabled={pagination.page === pagination.total_pages}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
