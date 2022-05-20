import React from "react";

function FormData(props) {
  return (
    <div>
      <h1>Employee Feedback Data</h1>
      <div className="datacontainer1">
        <div className="data">
          {props.onreceiveData.map((value, index) => {
            return (
              <div key={index} className="info">
                Name :{value.name} | Department :{value.dept} | Rating :{" "}
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
      <button type="submit" onClick={props.display} className="back">
        Go Back
      </button>
    </div>
  );
}
export default FormData;
