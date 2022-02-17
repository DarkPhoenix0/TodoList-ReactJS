import './app.css'
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
        <Header/>
        <TodoForm/>
    </div>
  );
}

export default App;
