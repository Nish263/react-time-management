import React from "react";

export const TaskList = ({ taskList }) => {
  console.log(taskList);
  return (
    <div class="col-md-6 mb-5">
      <h2 class="text-center"> Task list</h2>
      <div class="list-items">
        <table class="table table-striped table-hover">
          <tbody id="taskList">
            {taskList.map((item, i) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>
                  <td>{item.hr}</td>
                  <td class="text-end">
                    <button
                      class="btn btn-sm btn-danger"
                      onclick="deleteItem(${i})"
                    >
                      <i class="fa-solid fa-trash-can" title=" delete"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-warning"
                      onclick="markAsNotToDo(${i})"
                    >
                      <i
                        class="fa-solid fa-arrow-right"
                        title="mark as bad list"
                      ></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};
