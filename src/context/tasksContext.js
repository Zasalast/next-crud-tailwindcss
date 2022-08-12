import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    { id: "asdasdasd", title: "hola mundo", description: "bienvenido a js" },
  ]);
  const createTask = (title, description) => {
    setTask([...tasks, { id: uuid(), title, description }]);
  };
  const updateTask = (id, updatedTask) => {
    setTask([
      ...tasks.map((task) => (task.id ? { ...task, ...updatedTask } : task)),
    ]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTasks = () => {
  return useContext(TaskContext);
};
