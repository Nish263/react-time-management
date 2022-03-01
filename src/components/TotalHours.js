import React from "react";

export const TotalHours = ({ total }) => {
  return (
    <div class="row mt-2 pb-5 fs-3 fw-bolder text-success">
      <div class="col text-center text-hover ">
        Total time allocated this week = <span id="totalTaskHour">{total}</span>
        hr
      </div>
    </div>
  );
};
