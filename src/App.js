import React, { useContext, useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import TaskForm from "./components/TaskForm";
import { APIContext } from "./providers/Api";

const App = () => {
  const {api} = useContext(APIContext);
  const [tasks, setTasks] = useState([]);
  const [countTasks, setCountTasks] = useState(0);

  const onSubmit = (event) => {
    console.log('aqui');
    event.preventDefault();
    const newTask = {taskText:"", color:"#FFFFFF", done: false};
    newTask.taskText = event.target.task.value;
    newTask.color = event.target.color.value;
    api.post('tasklist', newTask);
    setCountTasks(countTasks+1);
  };
  
  const dbClick = (event) => {
    api.update("tasklist", event.target.attributes.chave.value);
    setCountTasks(countTasks+1);
  }

  const removeAll = () => {
    if(window.confirm("Você está certo disto?")){
      api.removeall("tasklist");
      setCountTasks(0);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await api.get("tasklist");
        setTasks(tasks);
        setCountTasks(tasks.lenght);
      } catch (error) {
        console.error(error);
      }
    }
    return fetchData();
  }, [countTasks, api]);

  return (
    <>
      <Header title={"To do List com React"}></Header>
      <TaskForm onSubmit={onSubmit} removeall={removeAll}></TaskForm>
      <TaskBoard title={"Pendentes"} taskdone={false} tasks={tasks} dbClick={dbClick}></TaskBoard>
      <TaskBoard title={"Concluídos"} taskdone={true} tasks={tasks} dbClick={dbClick}></TaskBoard>
    </>
  );
};

export default App;
