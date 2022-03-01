import React from "react";

export const BadList = () => {
  return (
    <div class="col-md-6">
      <h2 class="text-center"> Bad list</h2>
      <div class="list-items">
        <table class="table table-striped table-hover ">
          <tbody id="bad-list"></tbody>
        </table>
      </div>
      <div class="ttl-bad text-end text-success">
        Total time saved = <span id="totalBadHrs"> 0</span> hr
      </div>
    </div>
  );
};
