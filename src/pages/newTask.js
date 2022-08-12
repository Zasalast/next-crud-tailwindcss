import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useForm, controller } from "react-hook-form";
import { useRouter } from "next/router";
import { useTasks } from "../context/tasksContext";
const inititalState = {
  title: "",
  description: "",
};
const NewTask = () => {
  const { push, query } = useRouter();
  const { tasks, createTask, updateTask } = useTasks();
  const [task, setTask] = useState(inititalState);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customSubmit = (data) => {
    /*  e.preventDefault(); */
    if (!query.id) {
      console.log(data);
      createTask(data.title, data.description);
    } else {
      updateTask(query.id, data);
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
      console.log("hola mund");
    }
  }, []);

  return (
    <Layout>
      <h1>{query.id ? "Update a task" : "Create a Task"} </h1>
      <form className="form-react" onSubmit={handleSubmit(customSubmit)}>
        {" "}
        <div className="form-control">
          <label htmlFor="" className="text-white font-bold">
            Task
          </label>
          <input
            className="w-full py-3 px-4 mb-5 font-black bg-slate-900"
            type="text"
            placeholder="Write a title"
            defaultValue={task.title}
            {...register("title", { required: true, min: 4, maxLength: 50 })}
          />
          {errors.title?.type === "required" && (
            <span className="fail">This field is required</span>
          )}
          {errors.title?.type === "maxLength" && (
            <span className="fail">This field is max 5</span>
          )}
        </div>
        <div className="form-control font-bold">
          <label className="text-white">Description</label>
          <div>
            <textarea
              defaultValue={task.description}
              placeholder="Write a Description"
              className="w-full py-3 px-4 mb-5   "
              {...register("description", {
                required: { value: true, message: "valor requerido" },
                maxLength: 100,
              })}
            />

            {errors.description && (
              <span className="fail">{errors.description.message}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="font-bold text-white bg-blue-600 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          /*   disabled={!task.title} */
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default NewTask;
