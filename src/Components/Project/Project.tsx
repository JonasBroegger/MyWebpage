import filler_img from "../../Images/filler_img.jpg";
import "./Project.scss";

export default function Project() {
  return (
    <div>
      <a href="#">
        <div className="card">
          <img src={filler_img} alt=""/>
          <div className="container">
            <h5>Cookbook</h5>
            <p>A cookbook with various recipes from around the world</p>
          </div>
        </div>
      </a>
    </div>
  );
}
