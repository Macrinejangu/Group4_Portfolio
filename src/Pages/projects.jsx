import "./projects.css"
import layout from "../Components/layout"

export default function Projects() {
return (
<div>
    <div className="Portfolio_intro">
        <p>Our Portfolio</p>

        <h3>Technical solutions, End-To-End</h3>

        <p>We don't do simple mockups. Every solution here represents
            full operational database logic , responsive frontendd clients
            and auditable algorithmic models.
        </p>

    </div>

    <div className="Portfolio_projects">
        <div className="Portfolio_project1">
          <div className="Portfolio_project1_image">
            <img src="https://tse4.mm.bing.net/th/id/OIP.T2BHmKVNJH5UPAYq7fjL1gHaEo?r=0&pid=Api&h=220&P=0" alt="Influencer Authenticity Checker" />
          </div>
          <div className="portfolio_project1_content">
            <h4> Influencer Authenticity Checker</h4>
            <p> An end-to-end audit system built on graph analysis that dissects
                folllowers patterns, flags suspicious comments with temporal burst
                markers and determines real-time influencer viability scores
            </p>
            <div className="Portfolio_tags">
                <span>FastAPI</span>
                <span>React</span>
                <span>Graph ML</span>
                <span>Data Verification</span>

            </div>
            <a href="https://influencer-authenticity-checker.vercel.app/">View Live Project</a>

          </div>
        </div>

        <div className="Portfolio_project2">
          <div className="Portfolio_project2_image">
            <img src="https://img.freepik.com/premium-photo/sustainable-living-dashboard_934697-5700.jpg" alt="EcoTrack Carbon engine" />
          </div>
          <div className="portfolio_project2_content">
            <h4> EcoTrack Carbon Engine</h4>
            <p> 
                Distributed micro-carbon tracking designed for city blocks, turning street-level tree canopy conservation and solar adoption into auditable carbon credits
            </p>
            <div className="Portfolio_tags">
                <span>TypeScript</span>
                <span>NextJS</span>
                <span>PostgreSQL</span>
                <span>GIS Engine</span>

            </div>
            <button type="button">Coming Soon</button>

          </div>
        </div>
        <div className="Portfolio_project3">
          <div className="Portfolio_project3_image">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V51U22G73fc3cO3V17wigwHaEC?r=0&pid=Api&h=220&P=0" alt="ScribeAI Notes" />
          </div>
          <div className="portfolio_project3_content">
            <h4> ScribeAI Clinical Notes</h4>
            <p> Voice Processing node designed for medical students, automatically translating fast-paced clinical lectures
                into ready to test Anku styled study cards
            </p>
            <div className="Portfolio_tags">
                <span>Node.js</span>
                <span>GPT-4 API</span>
                <span>Tailwind Css</span>
                <span>IndexedDB</span>

            </div>
            <button type="button">Coming Soon</button>

          </div>
        </div>





    </div>
</div>
);

}