import React, { useState } from "react";

const initialState = { task: "", hr: "" };
const weeklyHours = 24 * 7;
export const Form = ({ addNewTask, total }) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({ ...newTask, [name]: name === "hr" ? +value : value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (newTask.hr < 1) {
      return alert("please enter a positive hours number");
    }
    if (total + newTask.hr > weeklyHours) {
      return alert("you have exceeded the weekly hours");
    }
    addNewTask(newTask);

    setNewTask(initialState); //this will display empty input after submitting
  };

  return (
    <div className="row">
      <div className="col">
        <div className="form-box py-5">
          <form
            onSubmit={handleOnSubmit}
            className="row row-cols-md-auto g-3 d-flex justify-content-center"
          >
            <div className="col-12">
              <label className="visually-hidden">Your task</label>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="task"
                  value={newTask.task}
                  onChange={handleOnChange}
                  id="inlineFormInputGroupUsername"
                  placeholder="Your task"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden">hours</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  name="hr"
                  value={newTask.hr}
                  onChange={handleOnChange}
                  id="inlineFormInputGroupUsername"
                  placeholder="Hours"
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
