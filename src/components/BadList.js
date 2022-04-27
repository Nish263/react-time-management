import React from "react";

export const BadList = ({
  badList,
  markAsToDo,
  handleOnDeleteBadList,
  ttlBadHours,
}) => {
  return (
    <div className="col-md-6">
      <h2 className="text-center"> Bad list</h2>
      <div className="list-items">
        <table className="table table-striped table-hover ">
          <tbody id="bad-list">
            {badList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => markAsToDo(i)}
                    >
                      <i
                        className="fa-solid fa-arrow-left"
                        title="mark as bad list"
                      ></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleOnDeleteBadList(i)}
                    >
                      <i className="fa-solid fa-trash-can" title=" delete"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="ttl-bad text-end text-danger">
        Total time saved = <span id="totalBadHrs"> {ttlBadHours}</span> hr
      </div>
    </div>
  );
};
