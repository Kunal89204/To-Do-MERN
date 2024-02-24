import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://localhost:3000/tasks")
      .then((respo) => {
        setTask(respo.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
    .then(() => fetchItems())
    .catch((error) => {
        console.log(error)
    })
  };
  return (
    <div className="overflow-x-auto">
  <table className="table-auto border-collapse border border-gray-500 w-1/2">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2">Sno</th>
        <th className="px-4 py-2">Title</th>
        <th className="px-4 py-2">Tasks</th>
        <th className="px-4 py-2">Operations</th>
      </tr>
    </thead>
    <tbody>
      {tasks &&
        tasks.map((task) => {
          return (
            <tr key={task._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{task.sno}</td>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.tasks}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(task._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <Link
                  to={`/update/${task._id}`}
                  className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Update
                </Link>
              </td>
            </tr>
          );
        })}
    </tbody>
  </table>
</div>

  );
};

export default Home;
