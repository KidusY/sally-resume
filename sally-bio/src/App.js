import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Sally Resume</h1>
      </header>

      <main>
        <section className="contactInfo">
          <h2>Contact Info:</h2>
          <p>Sally</p>
          <address>
          <a href={"mailto:sally@gmail.com"}
          target={"_blank"}>sally@gmail.com</a>
          <br></br>
          <a href={"tel:+12675555555"}>(267) 555-5555</a>
          </address>
          <img className="picture" src={"https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"}
          alt="A picture of Sally"/> 
        </section>

        <section>
          <h2>Education:</h2>
        </section>

        <section>
        <h2>Employment:</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
