import React from "react";

function Career(){
    const data3=[ {
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
      date:"December 2, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title:"Automation Test Engineer Resume: 10 Important Things To Consider",
      date:"December 1, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      title:"9 Best Product-Based Companies for Project Management",
      date:"December 1, 2023"
      },
    ]
      return(
        <>
        <h1>Career</h1>
        <div className="cards">
        {data3.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default Career

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">These are the companies that have their own products to sell.</p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}
