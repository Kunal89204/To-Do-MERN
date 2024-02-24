import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    sno: "",
    title: "",
    tasks: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/onetask/${id}`)
      .then((response) => {
        const taskData = response.data;
        setFormData(taskData);
      })
      .catch((error) => {
        console.error("Error fetching task data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/update/${id}`, formData)
      .then(() => {
        console.log("Task updated successfully");
        // You can perform additional actions after successful update
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sno"
          >
            Sno
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sno"
            type="text"
            name="sno"
            value={formData.sno}
            onChange={handleChange}
            placeholder="Sno"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tasks"
          >
            Tasks
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tasks"
            type="text"
            name="tasks"
            value={formData.tasks}
            onChange={handleChange}
            placeholder="Tasks"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
