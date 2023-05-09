import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Button from "./component/Button";
import Task from "./component/Task";
import Tasks from "./component/Tasks"
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddTask" element={<AddTask />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/Tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
