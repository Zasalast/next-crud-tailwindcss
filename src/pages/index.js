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
        <pre>{tasks.task}</pre>
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
