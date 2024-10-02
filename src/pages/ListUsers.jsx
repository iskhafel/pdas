import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, [currentPage]);

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <h1 className="text-3xl font-bold mb-4 text-white">List of Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="max-w-sm w-full mx-auto cursor-pointer"
            onClick={() => handleUserClick(user.id)}
          >
            <img src={user.avatar} alt={user.first_name} className="mx-auto" />
            <h2 className="text-xl font-bold text-center">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-center">{user.email}</p>
          </Card>
        ))}
      </div>

      <div className="flex overflow-x-auto sm:justify-center mt-4">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
