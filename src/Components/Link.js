import React from "react";

export default props => {
  // let replace = props => {
  //   window.location.replace(props.url);
  // };

  return (
    <a href={props.url}>
      <div className="link">
        <img src={props.src} alt={props.alt} className="link-img" />
        <div className="link-url">{props.title}</div>
      </div>
    </a>
  );
};
