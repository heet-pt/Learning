import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [islogin, setlogin] = useState<boolean>(false);
  const btnclick = () => {
    setlogin(!islogin);
  };

  return (
    <section>
      <button className="logbtn" onClick={btnclick}>
        {islogin ? "Logout" : "Login"}
      </button>
      <h1 className="title">{islogin ? "Welcome" : "Please Login!"}</h1>
    </section>
  );
};

export default Home;
