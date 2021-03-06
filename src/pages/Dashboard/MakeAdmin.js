import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://desolate-waters-73882.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://desolate-waters-73882.herokuapp.com/user/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        All Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Make Admin</th>
              <th className="text-center">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th className="text-center">{index + 1}</th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <button className="btn btn-xs border-0 bg-green-600 text-white text-center">
                    Make Admin
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs border-0 bg-red-600 text-white text-center"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
