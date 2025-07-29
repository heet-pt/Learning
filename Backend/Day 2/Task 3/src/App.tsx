import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <section className="card-section">
        <Cards
          title="Alex"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2KDb1pA_AKhlGEzbujRoYSNtpH_zisrdrw&s"
          desc="Alex is a frontend developer known for crafting sleek, responsive UIs. He specializes in React, TypeScript, and modern web tools to build fast, scalable apps."
        />
        <Cards
          title="John"
          imgurl="https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg"
          desc="John is a skilled backend developer focused on building robust, scalable APIs. He works with Node.js, Express, and databases to power efficient web applications."
        />
        <Cards
          title="Sam"
          imgurl="https://img.freepik.com/premium-photo/face-smiling-indian-man_130568-535.jpg?w=360"
          desc="Alex is a creative UI/UX designer who crafts intuitive, user-centered interfaces. He focuses on enhancing usability and accessibility through thoughtful design and research."
        />
        <Cards
          title="Ching Li"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19XF_lHaiGwHL7QmhA_ZjzSo48A-4D4_ROw&s"
          desc="Ching Li is a detail-oriented QA engineer who ensures product quality through rigorous testing. He specializes in automation, bug tracking, and maintaining a flawless user experience.

"
        />
      </section>
    </>
  );
}

export default App;
