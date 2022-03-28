import ToDoList from "./pages/ToDoList";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <>
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    </>
  );
}
export default App;
