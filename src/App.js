import React, { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { BadList } from "./components/BadList";
import { TotalHours } from "./components/TotalHours";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
  };

  //delete the task item from tasklist
  const handleOnDeletetaskList = (i) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      const newArg = taskList.filter((item, index) => index !== i);
      setTaskList(newArg);
    }
  };

  //delete from bad item from bad list
  const handleOnDeleteBadList = (i) => {
    console.log(i);
    if (window.confirm("Are you sure you want to delete ?")) {
      const newArg = badList.filter((item, index) => index !== i);
      setBadList(newArg);
    }
  };
  // take item from task list and put in bad list

  const markAsNotToDo = (i) => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };

  // take item from badlist and put in tasklist
  const markAsToDo = (i) => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };

  const ttlTaskHr = taskList.reduce((subttl, item) => subttl + item.hr, 0);
  const ttlBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);

  const total = ttlBadHours + ttlTaskHr;

  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title --> */}
        <Title />

        {/* <!-- form area --> */}
        <Form addNewTask={addNewTask} total={total} />
        {/* <!-- list area --> */}
        <div className="row">
          <TaskList
            taskList={taskList}
            handleOnDeletetaskList={handleOnDeletetaskList}
            markAsNotToDo={markAsNotToDo}
          />
          <BadList
            badList={badList}
            markAsToDo={markAsToDo}
            handleOnDeleteBadList={handleOnDeleteBadList}
            ttlBadHours={ttlBadHours}
          />
        </div>
        <TotalHours total={total} />
      </div>
    </div>
  );
}

export default App;
