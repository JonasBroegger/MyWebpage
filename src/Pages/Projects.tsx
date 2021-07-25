import Project from "../Components/Project/Project";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="mainprojects">
      <div>
        <h1>Upcoming Projects</h1>
      </div>
      <div className="Projects">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </div>
  );
}
