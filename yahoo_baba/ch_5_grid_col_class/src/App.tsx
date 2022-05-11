import React from "react";

const App = () => {
  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          officiis?
        </div>
        <div className="col-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit.
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          officiis?
        </div>
        <div className="col-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit.
        </div>
        <div className="col-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit.
        </div>
      </div> */}
      <section className="row">
        <article className="col-12" id="header">
          <h1>Website Name</h1>
        </article>
      </section>
      <section className="row">
        <article className="col-12" id="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </article>
      </section>
      <section className="row">
        <article className="col-lg-8 col-md-4" id="content">
          <h2>Sub Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            nostrum. Aliquam aut ipsum laudantium impedit nesciunt alias earum
            dolores omnis dolor dolore, rerum asperiores? Molestias impedit iste
            beatae temporibus quos quia blanditiis nulla non vel animi aut,
            praesentium eaque deleniti doloremque eligendi distinctio
            exercitationem expedita sunt, a laboriosam minus nostrum! Officiis
            necessitatibus dolorum ab nobis autem quo unde architecto aspernatur
            dolore quidem obcaecati delectus voluptatibus qui, blanditiis iste
            corrupti nemo rerum! Rerum at culpa quam incidunt quibusdam mollitia
            nam quasi omnis expedita, inventore quisquam corporis, aliquid amet
            optio vero recusandae excepturi. Possimus dolorum neque pariatur
            error sapiente repellendus, voluptates odit libero, ab quis et
            mollitia. Ipsam maiores tempora aspernatur corrupti, quos mollitia
            aperiam eaque cupiditate, vel libero vero recusandae qui odio quod
            nostrum itaque reiciendis.
          </p>
        </article>
        <article className="col-lg-4 col-md-8" id="sidebar">
          <ul className="row">
            <li className="col-md-12 col">
              <a href="">Home</a>
            </li>
            <li className="col-md-12 col">
              <a href="">About Us</a>
            </li>
            <li className="col-md-12 col">
              <a href="">Gallery</a>
            </li>
            <li className="col-md-12 col">
              <a href="">Products</a>
            </li>
            <li className="col-md-12 col">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </article>
      </section>
      <section className="row" id="footer">
        <article className="col-12">@copyright 2022.</article>
      </section>
    </div>
  );
};

export default App;
