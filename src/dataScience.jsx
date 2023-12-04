import React from "react";

function DataScience(){
    const data2=[{
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2023",
      date:"November 28, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title:"Impact of Certification Programs on Hiring Data Scientists",
      date:"November 15, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title:"Top Product-Based Companies for Data Science Freshers",
      date:"November 10, 2023"
      },
    ]
      return(
        <>
        <h1>Data Science</h1>
        <div className="cards">
        {data2.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default DataScience

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions </p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}
