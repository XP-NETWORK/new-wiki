import React from "react";

export default function NavBar() {
  return (
    <header className="headerArea">
      <div className="container">
        <div className="navContainer">
          <div className="navBrand">
            <a href="#" className="navLogo">
              <img src="/static/img/logo.svg" />
            </a>
          </div>
          <div className="navmenuBox">
            <ul className="nav_item">
              <li>
                <a
                  href="https://github.com/xp-network"
                  target="_blank"
                  className="navLinks"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://stake.xp.network/"
                  target="_blank"
                  className="navLinks"
                >
                  Staking-ui
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
