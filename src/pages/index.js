import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../context/tasksContext";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
function Home() {
  const { tasks } = useTasks();
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
    <div>
      <Head>
        <title>List de Tasks</title>
        <meta name="description" content="list task" />
      </Head>
      <Layout>
        <div className="justify-center flex">
          {tasks.length === 0 ? (
            <div className="bg-slate-100">no hay tareas</div>
          ) : (
            <div className="w-7/12">
              {tasks.map((task, i) => (
                <>
                  <span>{i} </span>
                  <div className="bg-slate-100 hover:bg-gray-100 cursor-pointer px-20 py-5 m-2">
                    {" "}
                    <div className="">
                      <span className="bg-slate-100">{task.title}</span>
                      <span> {task.description} </span>
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
    </div>
  );
}

export default Home;
