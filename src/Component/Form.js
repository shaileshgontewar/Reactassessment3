import React, { useState } from "react";
// import "./MyStyle.css";
import FormData from "./FormData";

function Form() {
  let [userName, setUserName] = useState("");
  let [userRating, setUserRating] = useState("");
  let [userDept, setUserDept] = useState("");
  let [data, setData] = useState([]);
  let [displayData, setDisplayData] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    data.push({
      name: userName,
      dept: userDept,
      rating: userRating,
    });
    setData(data);
    setDisplayData(!displayData);
    setUserName("");
    setUserDept("");
    setUserRating("");

    console.log(data);
  };
  const displayHandler = () => {
    setDisplayData((prev) => !prev);
  };
  return (
    <>
      {displayData ? (
        <FormData onreceiveData={data} display={displayHandler} />
      ) : (
        <div>
          <h1>Employee Feedback Form</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="name">Name :-</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Name"
                autoComplete="off"
              ></input>
            </div>
            <div>
              <label htmlFor="department">Department :-</label>
              <input
                type="text"
                id="department"
                name="department"
                value={userDept}
                onChange={(e) => setUserDept(e.target.value)}
                placeholder="Enter Department Name"
                autoComplete="off"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="rating">Rating :-</label>
              <input
                type="number"
                name="rating"
                id="rating"
                value={userRating}
                onChange={(e) => setUserRating(e.target.value)}
                placeholder="Enter Rating"
                autoComplete="off"
              ></input>
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Form;
