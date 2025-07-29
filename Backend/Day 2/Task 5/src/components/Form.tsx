import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [value, setValue] = useState<string>("");

  const btnclick = () => {
    if (value == "") {
      alert("Please Enter Value And Then Submit The Form");
    } else {
      alert(`Hey ${value} Welcome !! Nice To See You :)`);
    }
  };
  const valuechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <section className="form">
      <input
        type="text"
        onChange={valuechange}
        className="textarea"
        placeholder="Enter Your Name"
      ></input>
      <button onClick={btnclick}>Submit</button>
    </section>
  );
};

export default Form;
