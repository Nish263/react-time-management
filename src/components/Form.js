import React, { useState } from "react";
import { TaskList } from "./TaskList";

const initialState = { task: "", hr: "" };

export const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({ ...newTask, [name]: name === "hr" ? +value : value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask(initialState); //this will display empty input after submitting
  };

  return (
    <div class="row">
      <div class="col">
        <div class="form-box py-5">
          <form
            onSubmit={handleOnSubmit}
            class="row row-cols-md-auto g-3 d-flex justify-content-center"
          >
            <div class="col-12">
              <label class="visually-hidden" for="inlineFormInputGroupUsername">
                Your task
              </label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  name="task"
                  value={newTask.task}
                  onChange={handleOnChange}
                  id="inlineFormInputGroupUsername"
                  placeholder="Your task"
                  required
                />
              </div>
            </div>

            <div class="col-12">
              <label class="visually-hidden" for="inlineFormInputGroupUsername">
                hours
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  name="hr"
                  value={newTask.hr}
                  onChange={handleOnChange}
                  id="inlineFormInputGroupUsername"
                  placeholder="Hours"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
