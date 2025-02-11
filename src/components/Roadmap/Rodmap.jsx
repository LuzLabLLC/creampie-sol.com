import React from "react";
import "../../styles/Roadmap.css";
import TimeLine from "./TimeLine";
import Girl2 from "../../assets/girl2.png";
import Girl3 from "../../assets/girl3.png";
import Strawberry from "../../assets/strawberry.webp";


function Rodmap() {
  return (
    <div
      className="roadmap_section"
      id="roadmap"
      style={{ marginBottom: "150px" }}
    >
      <h1 className=" goldman_regular">Roadmap</h1>
      
      <div>
        
        <div
          className="timeline_container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "4rem",
            position: "relative",
          }}
        >
           
          <TimeLine
            no={1}
            para={
              "First, we’ll build a visually appealing website that showcases our brand and serves as the main source for updates. Next, we’ll set up a Telegram channel for real-time interactions and community building. Finally, we’ll launch on Twitter, sharing updates to reach a wider audience and boost engagement."
            }
            heading={"PHASES 1"}
          />
           <img
        src={Girl3}
        loading="lazy"
        className="memecoin"
        alt="CreampieFruit"
        style={{
          margin: "15px",
          width: "200px",          // Adjust image size as needed
          height: "auto",
          alignSelf: "center",      // Center the image vertically
        }}
      />
          <TimeLine
            no={2}
            para={
              "We will update DEX to improve performance and user experience, ensuring a smooth trading environment. We’ll also build our community through targeted marketing, reaching new audiences and fostering loyalty. Finally, we'll create engaging content and organize RAIDs to boost excitement and encourage active participation."
            }
            heading={"PHASE 2"}
          />
            <img
        src={Girl2}
        loading="lazy"
        className="memecoin"
        alt="CreampieFruit"
        style={{
          margin: "15px",
          width: "200px",          // Adjust image size as needed
          height: "auto",
          alignSelf: "center",      // Center the image vertically
        }}
      />
          <TimeLine
            no={3}
            para={
              "We will form strategic partnerships and collaborate with industry leaders to drive innovation and increase our visibility. Next, we’ll launch enhanced marketing campaigns to reach new audiences and strengthen our brand presence. Finally, we’ll encourage community proposals and discussions, ensuring our supporters have a direct role in shaping the project’s future."
            }
            heading={"PHASE 3"}
          />
         
        </div>
      </div>
    </div>
  );
}

export default Rodmap;
