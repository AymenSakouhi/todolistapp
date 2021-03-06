import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    const getContactFormText = async () => {
      const contactFormTextFromServer = await contactFormText();
      setTexts(contactFormTextFromServer);
    };

    getTasks();
    getContactFormText();
  }, []);

//======================== text and contact form text functions below

//fetch contactFormText

const contactFormText = async () => {
    const res = await fetch("http://localhost:5000/texts");
    const data = await res.json();
    return data;
  };

  //add formContact to db
  const addContactForm = async (formText) => {
    const res = await fetch(`http://localhost:5000/texts/`, { 
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
        }, 
         body : JSON.stringify(formText)
     });
    
     const data = await res.json();
     setTexts([...texts, data]);

  }
  //======================== TASKS functions below

  //fetch tasks

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  
  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //add a task

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //DELETE TASK
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show"
                )}
              </div>
            }
          />
          <Route path="/about"  element={<About onAdd = {addContactForm} texts={texts}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//
//https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia
