import React from "react";

export const TaskList = ({
  taskList,
  handleOnDeletetaskList,
  markAsNotToDo,
}) => {
  console.log(taskList);
  return (
    <div className="col-md-6 mb-5">
      <h2 className="text-center"> Task list</h2>
      <div className="list-items">
        <table className="table table-striped table-hover">
          <tbody id="taskList">
            {taskList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleOnDeletetaskList(i)}
                    >
                      <i className="fa-solid fa-trash-can" title="delete"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => markAsNotToDo(i)}
                    >
                      <i
                        className="fa-solid fa-arrow-right-long"
                        title="marks as to do"
                      ></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
