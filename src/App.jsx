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
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Best-AI-Tools-for-Coding-01-2048x1072.png",
      title:"6 Best AI Tools for Coding",
      date:"2 December 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Blockchain-Project-Ideas-For-Students.webp",
      title:"Top 8 Blockchain Project Ideas For Students",
      date:"2 December 2023"
    },
    {
      img :"https://www.applify.com.sg/blog/wp-content/uploads/2023/06/What-is-full-stack-developer-768x432.webp",
      title:"Top 8 Blockchain Project Ideas For Students",
      date:"D 2, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title:"Top Skills To Become a Full-Stack Developer in 2023",
      date:"August 3, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      title:"The Future & Scope of Full-Stack Developers in India",
      date:"July 27, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
      title:"Top 10 Data Science Tools in 2023",
      date:"November 1, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      title:"Useful Python Libraries & Tools for Data Science Beginners",
      date:"September 29, 2023"
    },
    {
      img :"https://www.tqmi.com/wp-content/uploads/2022/02/Data-Science-4.webp",
      title:"Best Way to Learn Data Science in 2023",
      date:"July 28, 2023"
    },
    {
      img :"https://www.proschoolonline.com/wp-content/uploads/2021/02/Cyber-Security-768x461.webp",
      title:"Top 10 Ethical Hacking Books for Beginner to Advanced",
      date:"November 21, 2022"
    },
    {
      img :"https://easydmarc.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/What-is-Password-Attack-in-Cyber-Security_.jpg.webp",
      title:"8 Different Types of Cybersecurity and Threats Involved",
      date:"November 9, 2022"
    },
    {
      img :"https://www.wrk.com/media/images/sales-cyber-security.2e16d0ba.fill-1600x900.format-webp.webp",
      title:"How Is Cyber Security Important To Our Lives?",
      date:"November 10, 2020"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-based-Company-Vs-Service-based-Company.webp",
      title:"Product-based Company Vs Service-based Company: Which is Best Choice?",
      date:"November 2, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
      title:"Top 5 Product-Based Companies for Machine Learning Engineers",
      date:"October 11, 2023"
    },
    {
      img :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
      title:"Everything You Should Know About ChatGPT & Why It Matters?",
      date:"September 29, 2023"
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
