import React from "react";
import App from "./App";

function All({dates}){
   
    return(
       <>
        <div className="cards">
        {dates.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default All

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">These are the companies that have their own products to sell. Examples are Google, Alphabet, Facebook, Adobe, etc.</p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}
