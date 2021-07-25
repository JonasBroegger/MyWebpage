import Button from '../Button'
import './ContactForm.scss'

export default function ContactForm(){

    function handleSubmit(){
        console.log("Submitted")
    }

    return <div className="MainContact">
        <div>
            <h1>Contact me</h1>
        </div>
        <form>
            <input placeholder="Name" type= "text" required></input>
            <input placeholder="Your Email" type= "email" required></input>
            <br/>
            <textarea placeholder ="Your Message" rows={5}></textarea>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </form>
    </div>
}