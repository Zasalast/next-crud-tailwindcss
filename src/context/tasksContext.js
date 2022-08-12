import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    { id: "1", title: "hola mundo", description: "bienvenido a js" },
  ]);
  const createTask = (title, description) => {
    setTask([...tasks, { id: uuid(), title, description }]);
  };
  const updateTask = (id, updatedTask) => {
    setTask([
      ...tasks.map((task) => (task.id ? { ...task, ...updatedTask } : task)),
    ]);
  };
  const deleteTask = (id) =>
    setTask([...tasks.filter((task) => task.id !== id)]);
  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTasks = () => {
  return useContext(TaskContext);
};
