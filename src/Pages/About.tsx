import "./About.scss";
import filler_img from "../Images/filler_img.jpg";

export default function About_me() {
  return (
    <div className="MainAbout">
      <h1>About me</h1>
      <img src={filler_img} alt="" />
      <div className="TextContainer">
        <p>
          Hello, my name is Jonas Brøgger Christensen. I'm a software developer
          with experience <br />
          in .NET MVC, C#, HTML, Javascript, CSS, SQL database.
        </p>

        <p>
          My dream is to work with full-stack webdelopment, to excel in
          webdevelopment.
        </p>

        <p>
          I'm constantly learning new things, curently those things include
          gaining more experience with React, PHP, Bootstrap and more. An
          upcoming project is cookbook website made in React.
        </p>
        <p>
          My lastest project was this website, you can see more on Github by
          clicking{" "}
          <a href="https://github.com/JonasBroegger/my-webpage" target="_blank" rel="noreferrer">
            here
          </a>
          , or go <br />
          to projects. It is build with React, SaSS and Typescript.
        </p>
        <p>
          When i'm not learning something new chances are i'm reading a book,
          enjoying a cup of coffee, or gaming with some friends.
        </p>
      </div>
    </div>
  );
}
