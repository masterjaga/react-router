import { Link, Route, Routes } from "react-router-dom"
import All from "./all"
import DataScience from "./dataScience"
import CyberSecurity from "./cyberSecurity"
import FullStack from "./fullStack"
import Career from "./career"
import "./App.css"
import data1 from "./data"



function App() {
  document.title="IT BLOG"

  const datas=[
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-AWS-vs-Azure-vs-Google-Cloud-Comparing-the-Top-Cloud-Service-Providers.webp",
      title:"AWS vs Azure vs Google Cloud: Comparing the Top Cloud Service Providers",
      date:"4 December 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/ai_tools_for_content_creation.webp",
      title:"Top 9 AI Tools for Content Creation That You Shouldn’t Miss",
      date:"2 December 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Blockchain-Project-Ideas-For-Students.webp",
      title:"Top 8 Blockchain Project Ideas For Students",
      date:"2 December 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
      date:"November 15, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title:"Top Differences: Full Stack Developer vs Software Engineer 2023",
      date:"November 15, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      date:"November 10, 2023"
    },
    {
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
    {
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
    {
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
    }]
   
    console.log(datas)
  return (

    
    <div className="content">
       <nav>
        
          <p><Link to="/" className="link">All</Link></p>
          <p><Link to="/fullStack" className="link">FullStack</Link></p>
          <p><Link to="/dataScience" className="link">DataScience</Link></p>
          <p><Link to="/cyberSecurity" className="link">CyberSecurity</Link></p>
          <p><Link to="/career" className="link">Career</Link></p>
        
      </nav>
      <Routes>
        <Route path="/" element={<All dates={datas} 
        />}/>
        <Route path="/fullStack" element={<FullStack data1 ={data1}/>} />
        <Route path="/dataScience" element={<DataScience/>} />
        <Route path="/cyberSecurity" element={<CyberSecurity/>} />
        <Route path="/career" element={<Career/>} />
      </Routes> 
      
      </div>
      
  )
}

export default App
