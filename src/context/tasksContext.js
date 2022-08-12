import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const createTask = (title, description) => {
    setTask([...tasks, { id: uuid(), title, description }]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTasks = () => {
  return useContext(TaskContext);
};
