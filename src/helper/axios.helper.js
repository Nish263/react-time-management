const rootURL = "http://localhost:8000/api/v1";
const taskApi = `${rootURL}/task`; //task API
//fetch a task

// fetch  all tasks
export const fetchTasks = () => {
  return fetch(taskApi)
    .then((res) => res.json())
    .then((data) => data);
};

//add a task

export const postTasks = (data) => {
  return fetch(taskApi, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//delete a task
