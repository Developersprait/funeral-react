import React from "react";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="menu" id="menu">
      <Menu pageWrapId={"container"} externalContainerId={"menu"}></Menu>
      <div className="menu__wrp" id="menu__wrp">
        <div className="container" id="container">
          
          <div className="menu__box">
            <div className="menu__socials">
              <div className="menu__telegram">
                <a
                  href="tg://resolve?domain=kalziferr"
                  className="menu__telegram-link"
                  target="_blank"
                >
                  <div className="menu__telegram-img"></div>
                </a>
              </div>
              <div className="menu__viber">
                <a
                  href="viber://chat?number=%2B375333901056"
                  className="menu__viber-link"
                  target="_blank"
                >
                  <div className="menu__viber-img"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
