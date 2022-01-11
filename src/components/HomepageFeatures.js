import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";
import SearchIcon from "../../static/img/new/icons/search.svg";

const FeatureList = [
  {
    title: (
      <a href="/docs/Whitepaper3.0/introduction" target="_blank">
        What is XP.NETWORK
      </a>
    ),
    Svg: require("../../static/img/DarkRectangle.svg").default,
    description: <p>What is XP.NETWORK</p>,
  },
  {
    title: (
      <a href="/docs/Whitepaper3.0/introduction" target="_blank">
        Whitepaper
      </a>
    ),

    Svg: require("../../static/img/DarkRectangle.svg").default,
    description: <p>Architecture and vission</p>,
  },
  {
    title: (
      <a href="/docs/API/usage" target="_blank">
        JavaScript API
      </a>
    ),
    Svg: require("../../static/img/DarkRectangle.svg").default,
    description: <p>Quickstart</p>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="lightBoxe">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="searchBanarContaienr">
      <img src="/static/img/new/banar.png" className="searchBanarBg" />
      <div className="searchbanar">
        <div className="container">
          <div className="searchBox">
            <div className="searchTitle">
              <h2>Welcome to the XP.NETWORK Docs</h2>
            </div>
            {/* <form action="#">
              <button type="button"><img src="/static/img/new/icons/search.svg" /></button>
              <input type="search" placeholder="Search" />
            </form> */}
          </div>
        </div>
      </div>
      <div className="boxContainer">
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
