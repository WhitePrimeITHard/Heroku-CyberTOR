import React from "react";

function footer() {
  return (
    <div className="nav">
      <div className="content">
        <div className="nav-logo">
          <h1 className="h4 m-0">Copyright @ 2021. <a className="alpha" href="https://t.me/ithard">ITHard</a></h1>
        </div>
        <div className="nav-links" style={{flexDirection: "row"}}>
          <a className="btn primary" href="https://vk.com/ithardnews" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="logo-vk" />
      </span> VK
    </a>
     <a className="btn" href="https://t.me/ithard" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="logo-telegram" />
      </span> Telegram
    </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
