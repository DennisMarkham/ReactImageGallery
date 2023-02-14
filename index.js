import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Picture from "./Picture";
import "./style.css";




const Gallery = () =>
{
	//creates the array as a state	
	 // const [uCArray, updateUCArray] = useState([]);
    
    // for expanding or shrinking picture.  Just leaving this out of the way for now
	const changeHeight = (event) => {
		if (event.target.className == "smallPic")
		{
			event.target.className = "bigPic";
		}
		else
		{
			event.target.className = "smallPic";
		}
	}

//here's a function that adds data from the input fields into the array
const addImage = () => {
const inputUrl = document.getElementById("inputUrl").value;
const image = document.createElement("img");
image.src = inputUrl;
image.className = "smallPic";
image.addEventListener("click", changeHeight);
document.body.appendChild(image);

// updateUCArray([...uCArray, {url:{inputUrl}, caption:{inputCaption}}]);



}



return(
	<div>

<p>Put image url here:</p>
<input id = "inputUrl"></input>

<button onClick={addImage}>Add image</button>
<br />


</div>
)
}

ReactDOM.render(<Gallery />, document.getElementById("root"));
