

import "./home.css"
export default function Home() {

    return(
      <>  
    <div>
        <div className="Home_intro">
         <div className="Home_main">
            <h1>Building Digital Solutions <span className="Home_accent"> That Matter </span></h1>
         </div>
         <div>
            <h4>We are collaborative student team fusing human-centered design,
                deep data verification and beautiful tech to solve real world problems</h4>
        </div>
        <button type="button" className="Explore">Explore Projects</button>
        <button type="button" className="Team">About Team</button>
        
       </div>

    </div>
    <div className="Home_featured">

        <div className="Home_projects">
            <h3>Featured Projects</h3>
        </div>
        <div className="Home_direct">
            <h6>A glimpse into what our team has conceptualized, developed, and deployed</h6>
        </div>
        <div className="Home_project1">

            <img src="https://tse4.mm.bing.net/th/id/OIP.T2BHmKVNJH5UPAYq7fjL1gHaEo?r=0&pid=Api&h=220&P=0" 
            alt="Influencer Authenticity Checker"
            />

            <div className="Project1_content">
                <p>Security/ AI</p>
                <h4>Influencer Authenticity Checker</h4>
                <p>Exposing bot followers and fake accounts using 
                    automated behavioral analytics and API verification
                </p>

                <a href="https://influencer-authenticity-checker.vercel.app/">
                    view details </a>

            </div>

        </div>

        <div className="Home_project2">
            <img src="https://img.freepik.com/premium-photo/sustainable-living-dashboard_934697-5700.jpg" 
            alt="EcoTrack Carbon Engine"
            />


             <div className="Project2_content">
                <p>Sustainability</p>
                <h4>EcoTrack Carbon Engine</h4>
                <p>Empowering local communities to track, offset, and trade
                    verified neighbourhood greenhouse gas savings
                </p>

                <a href="">
                    view details </a>

            </div>
        </div>
        <div className="Home_project3">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V51U22G73fc3cO3V17wigwHaEC?r=0&pid=Api&h=220&P=0" 
            alt="ScribleAI Notes"
            />
    
             <div className="Project3_content">
                <p>Education</p>
                <h4>ScribeAI Notes </h4>
                <p>
                    Converting lecture audio into structured clinical 
                    flashcards and memory maps for medical residency
                </p>

                <a href="">
                    view details </a>

            </div>
        </div> 


    </div>
    <div className="Home_team">
        <div className="Home_team_image">
            <img 
            src="https://tse2.mm.bing.net/th/id/OIP.noGOVc7XQWFc2R2ZcKmapQHaHa?r=0&pid=Api&h=220&P=0"
             alt="Four team members working together"
             />

        </div>
        <div className="Home_team_text">
          <h3>Four Innovators, One Goal</h3>
          <p>Originating from varied engineering, designs, and analytics backgrounds,
            Group 4 represents the intersection of robust development and aesthetic 
            polish. We approach every capstone and hackathon project with critical rigor
          </p>

        </div>    

    </div>



</>

);
    
}