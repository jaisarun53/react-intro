import React from "react";
import "./App.css";

const App = () => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <img
        src="https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg"
        alt="book image"
        style={{ height: "275px", width: "100%" }}
      />
      <h3>The psychology of money</h3>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
        expedita! Nihil, odit. Vitae fugiat eos rerum reprehenderit quis
        temporibus dignissimos, voluptatibus perspiciatis, ullam explicabo
        laborum minima blanditiis officiis, commodi maxime voluptates rem sequi
        ab dolorum hic et illo omnis? Esse veniam fugiat, temporibus et
        accusamus ut ex exercitationem. Minus modi earum omnis voluptates, autem
        sequi aspernatur aliquam eius! Totam mollitia nobis earum vitae
        explicabo tempore ullam ipsum vero. Omnis, dolores sapiente. Deserunt
        veniam eius consequuntur sequi nam quos voluptatibus possimus eos vero
        eveniet! Necessitatibus, quasi nihil sapiente cum consectetur magni.
      </p>
    </div>
  );
};

export default App;
