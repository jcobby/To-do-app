"use client";

// import './app.css'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [tasks, setTasks] = useState([]); // Initial tasks
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState(""); // State to manage the value while editing

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        { id: uuidv4(), info: inputValue, isEditing: false, isChecked: false },
      ]);
      setInputValue("");
    }
  };

  const checking = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editHandler = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditValue(taskToEdit.info);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, info: editValue, isEditing: false } : task
      )
    );
    setEditValue("");
  };

  return (
    <div className="bg-blue-950 h-screen justify-center flex">
      <div className="w-[35%] relative px-14 py-12 bg-white rounded-lg border mt-10">
        <div className="justify-end text-2xl font-bold text-blue-900 mb-10">
          To-Do List
        </div>

        <div className="flex items-center justify-between bg-slate-300 border rounded-full w-[80%] pl-8 mb-10">
          <input
            className="outline-none border-none py-5 bg-transparent w-[85%]"
            type="text"
            placeholder="add new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="bg-blue-900 rounded-full h-16 w-16"
            onClick={addTask}
          >
            +
          </button>
        </div>

        <div className="relative">
          <ul className="list-disc ml-8 space-y-2">
            {tasks.map((task, index) =>
              task.isEditing ? (
                <div key={index} className="flex items-center justify-between bg-slate-300 border rounded-full w-[80%] pl-8 mb-10">
                  <input
                    className="outline-none border-none py-5 bg-transparent w-[85%]"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />

                  <button
                    className="bg-blue-900 rounded-full h-16 w-16"
                    onClick={() => updateTask(task.id)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <li key={index} className="flex items-center justify-between">
                  <span
                    className={task.isChecked ? "line-through" : ""}
                    onClick={() => checking(task.id)}
                  >
                    {task.info}
                  </span>
                  <div className="space-x-3">
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      onClick={() => editHandler(task.id)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ cursor: "pointer" }}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => deleteHandler(task.id)}
                    />
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
