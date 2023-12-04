import React from "react";

function CyberSecurity(){
    const data4=[{
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title:"What Is Hacking? Types of Hacking & More",
      date:"September 25, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title:"The Ultimate Cybersecurity Roadmap for Beginners",
      date:"March 1, 2021"
    },
    {
      img :"https://www.wrk.com/media/images/sales-cyber-security.2e16d0ba.fill-1600x900.format-webp.webp",
      title:"How Is Cyber Security Important To Our Lives?",
      date:"November 10, 2020"
      },
    ]
      return(
        <>
        <h1>Cyber Security</h1>
        <div className="cards">
        {data4.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default CyberSecurity

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information</p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}
