import React from "react";
import "../../styles/Roadmap.css";
import TimeLine from "./TimeLine";

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
          }}
        >
          <TimeLine
            no={1}
            para={
              "First, we’ll build a visually appealing website that showcases our brand and serves as the main source for updates. Next, we’ll set up a Telegram channel for real-time interactions and community building. Finally, we’ll launch on Twitter, sharing updates to reach a wider audience and boost engagement."
            }
            heading={"PHASE 1"}
          />
          <TimeLine
            no={2}
            para={
              "We will update DEX to improve performance and user experience, ensuring a smooth trading environment. We’ll also build our community through targeted marketing, reaching new audiences and fostering loyalty. Finally, we'll create engaging content and organize RAIDs to boost excitement and encourage active participation."
            }
            heading={"PHASE 2"}
          />
          <TimeLine
            no={3}
            para={
              "We will form strategic partnerships and collaborate with industry leaders to drive innovation and increase our visibility. Next, we’ll launch enhanced marketing campaigns to reach new audiences and strengthen our brand presence. Finally, we’ll encourage community proposals and discussions, ensuring our supporters have a direct role in shaping the project’s future."
            }
            heading={"PHASE 3"}
          />
          <div
            style={{ zIndex: "-20", top: "400px" }}
            className="gradient_boll_orange"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Rodmap;
