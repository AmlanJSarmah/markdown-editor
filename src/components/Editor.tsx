import React from "react";

export const Editor: React.FC = () => {
  return (
    <div className="container-xxl mt-5">
      <div className="row justify-content-between border border-dark">
        <div
          className="col-6 p-0 text-center border-end border-dark"
          id="editor"
        >
          Editor
        </div>
        <div className="col-6 p-0 text-center" id="output">
          Output
        </div>
      </div>
    </div>
  );
};
