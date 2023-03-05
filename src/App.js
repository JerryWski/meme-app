import Header from "./components/Header";
import Meme from "./components/Meme";
import Count from "./components/Count";
import Star from "./components/Star";
import "./Practice.css";

import React, { useState } from "react";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src={require("./img/waiter.jpg")} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
