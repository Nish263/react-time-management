import React from "react";

export const BadList = ({ badList, markAsToDo, handleOnDeleteBadList }) => {
  return (
    <div class="col-md-6">
      <h2 class="text-center"> Bad list</h2>
      <div class="list-items">
        <table class="table table-striped table-hover ">
          <tbody id="bad-list">
            {badList.map((item, i) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>
                  <td>{item.hr}</td>
                  <td class="text-end">
                    <button
                      class="btn btn-sm btn-warning"
                      onClick={() => markAsToDo(i)}
                    >
                      <i
                        class="fa-solid fa-arrow-left"
                        title="mark as bad list"
                      ></i>
                    </button>
                    <button
                      class="btn btn-sm btn-danger"
                      onClick={() => handleOnDeleteBadList(i)}
                    >
                      <i class="fa-solid fa-trash-can" title=" delete"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div class="ttl-bad text-end text-success">
        Total time saved = <span id="totalBadHrs"> 0</span> hr
      </div>
    </div>
  );
};
