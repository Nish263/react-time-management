import React, { useEffect, useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { BadList } from "./components/BadList";
import { TotalHours } from "./components/TotalHours";
import { fetchTasks, postTasks } from "./helper/axios.helper.js";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);
  const [ispending, setIsPending] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      setIsPending(true);
      const { status, result, message } = await fetchTasks();
      setIsPending(false);

      result === "error" && setResponse({ status, message });
      result?.length && setTaskList(result);
      console.log(result);
    };
    getTasks();
  }, []);

  const addNewTask = async (task) => {
    setIsPending(true);
    const result = await postTasks(task);
    console.log(result);
    setIsPending(false);

    // setTaskList([...taskList, task]);
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

        {/* feedback message */}
        {ispending && (
          <div className="d-flex justify-content-center text-primary">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {response?.message && (
          <div className="alert alert-danger"> Feedback message</div>
        )}

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
