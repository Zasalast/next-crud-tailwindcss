import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../context/tasksContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { VscTrash, VscTasklist } from "react-icons/vsc";
function Home() {
  const { tasks } = useTasks();
  const { push } = useRouter();
  console.log(tasks);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>List de Tasks</title>
        <meta name="description" content="list task" />
      </Head>
      <Layout>
        <div className="flex justify-center">
          {tasks.length === 0 ? (
            <div className="block">
              <h2 className="text-2xl">No hay tareas</h2>{" "}
              <VscTasklist size="8rem" />
            </div>
          ) : (
            <div className="w-7/12">
              {tasks.map((task, i) => (
                <>
                  <span text-5x1 mr-5>
                    {i}{" "}
                  </span>
                  <div
                    key={task.id}
                    className="bg-gray-100 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
                    onClick={() => {
                      push("/edit/" + task.id);
                    }}
                  >
                    <span className="text-5xl mr-5">{i}</span>
                    <div>
                      <div className="flex justify-between">
                        <h1 className="font-bold"> {task.title}</h1>
                      </div>
                      <span className="text-gray-400">
                        {" "}
                        {task.description}{" "}
                      </span>
                      <span className="text-gray-400">{task.id}</span>
                      <button
                        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(task.id);
                        }}
                      >
                        {" "}
                        <VscTrash className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </Layout>
      <Image
        src="/pexels.jpg"
        alt="list task"
        height="166"
        width="278"
        layout="responsive"
      />{" "}
      <span>Surja Sen Das Raj of pexels.com</span>
    </>
  );
}

export default Home;
