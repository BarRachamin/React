import React from "react";
import "../css/style.css";
import "../images/iron-man.jpg";
import "../images/bat-man.jpg";
import "../images/spider-man.jpg";
export const Asidecomponent = (props) => {
  return (
    <aside>
      <ul class="list-style">
        <li class="list-item-container">
          <img
            class="list-image"
            src={require("../images/iron-man.jpg")}
            alt=""
            srcset=""
          />
          <div class="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              excepturi quae incidunt ad pariatur ducimus.
            </p>
          </div>
        </li>
        <li class="list-item-container">
          <img
            class="list-image"
            src={require("../images/bat-man.jpg")}
            alt=""
          />
          <div class="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              excepturi quae incidunt ad pariatur ducimus.
            </p>
          </div>
        </li>
        <li class="list-item-container">
          <img
            class="list-image"
            src={require("../images/spider-man.jpg")}
            alt=""
            srcset=""
          />
          <div class="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              excepturi quae incidunt ad pariatur ducimus.
            </p>
          </div>
        </li>
      </ul>
    </aside>
  );
};
