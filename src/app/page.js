'use client'

import './app.css'
import React, { useState } from 'react';


export default function Home() {
  const [tasks, setTasks] = useState([]); // Initial tasks
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="bg-blue-950 h-screen justify-center flex">
      <div className="w-[35%] relative px-14 py-12  bg-white rounded-lg border mt-10  ">
        <div className=" justify-end text-2xl font-bold text-blue-900 mb-10">
          To-Do List
        </div>

        <div className="flex items-center justify-between bg-slate-300 border rounded-full w-[80%] pl-8">
          <input className=" outline-none border-none py-5 bg-transparent w-[85%]" type="text" placeholder="add new task" 
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}/>

          <button className=" bg-blue-900 rounded-full h-16 w-16" onClick={addTask}>+</button>
        </div>
        <div className='relative'>
        {/* <ul className="list-disc ml-8">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
         */}
         <ul className="list-disc ml-8">
         
            <li >one</li>
            <li>two</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
