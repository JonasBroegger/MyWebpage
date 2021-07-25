import './Navigation.scss';

export default function Navigation(){
    return <div className= "nav">
        <h1>BROEGGER</h1> 
        <nav>
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="#About me">About me</a>
            </li>
            <li>
                <a href="#Work in progress">Work in progress</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </nav>    
    </div>
}