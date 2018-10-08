import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => {
	const art = "art" + props.id
	return(
	
  <span className="save-btn" id={art}>
    Save
  </span>
);}

export default SaveBtn;
