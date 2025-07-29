import React from "react";
import "./Cards.css";
interface cardsProps {
  imgurl: string;
  title: string;
  desc: string;
}
const Cards = ({ imgurl, title, desc }: cardsProps) => {
  return (
    <section className="card-section">
      <main className="card-container">
        <div className="card-content">
          <img src={imgurl} alt="card" className="cardimg" />
          <h2 className="card-title">{title}</h2>
          <p className="card-desc">{desc}</p>
        </div>
      </main>
    </section>
  );
};

export default Cards;
