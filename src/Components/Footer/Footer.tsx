import linkedin_icon from '../../Images/linkedin_icon.png'
import './Footer.scss';

export default function Footer(){
    return <div className="MainFooter">
        <div className="IconLinks">
            <a href="https://linkedin.com/in/jonas-brøgger-christensen" target="_blank" rel="noreferrer"><img src={linkedin_icon} alt="Linkin icon" /></a>
        </div>

    </div>
}