import React from "react";
/* import { BsFillPlusCircleFill } from "react-icons/bs"; */
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/tasksContext";
const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-gray-900 ">
      <header className="flex bg-gray-800 text-white px-10 py-5 items-center">
        <Link href="/">
          <a className="text-white">
            <h1 className="font-black text-lg px-4  ">Task List</h1>
          </a>
        </Link>
        <span
          className="ml-2 text-gray-400 font-bold
        "
        >
          {tasks.length}task
        </span>
        <div className="flex-grow text-right">
          <button
            className="bg-blue-600 hover:bg-blue-500 px-3 py-2 font-bold rounded-md inline-flex items-center
          "
            onClick={() => router.push("/newTask")}
          >
            {/* <BsFillPlusCircleFill className="mr-2" /> */} New Task
          </button>
        </div>
      </header>
      <main className="px-28 py-10">{children} </main>
    </div>
  );
};

export default Layout;
