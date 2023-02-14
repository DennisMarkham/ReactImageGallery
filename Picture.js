import React from "react";




const Picture = (props) => <span>
<img src = {props.url} alt = "kk"></img>
<br />
<caption>{props.caption}</caption>
</span>;

export default Picture;
