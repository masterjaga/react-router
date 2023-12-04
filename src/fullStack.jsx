import React from "react";


function FullStack({data1}){
    console.log(data1)
    return(
        <>
        <h1>Full Stack Development</h1>
        <div className="cards">
        {data1.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default FullStack

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">A full-stack developer helps build and maintain both the front-end and the back-end of a website. Learn about full-stack developer skills, salary, and how you can become one. </p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}
