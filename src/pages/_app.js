import { TasksProvider } from "../context/tasksContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}

export default MyApp;
