import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
export const useTasks = () => {
  return useContext(TaskContext);
};
