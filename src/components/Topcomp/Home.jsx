
import './Home.css'
import { Linkedin } from 'lucide-react';

const Home = () => {
    function downloadResume() {
        window.open("https://drive.google.com/file/d/1WBO2BKi6zlVNi7g36UEuLWSBJ_Wp7iDw/view?usp=sharing");
}
    function openLinkedIn() {
  window.open("https://www.linkedin.com/in/adityasha2003/", "_blank");
}
    return (
        <div>
            <div className='home'>
               
            <div className='home-container'>
                
                <div className='home-text'>
                    <h1>Adii - THE DEVELOPER</h1>
                    <p>I’m a full-stack developer skilled in building modern web applications 
                        using Spring Boot for the backend and React.js for the frontend. I 
                        also have experience working with MySQL databases, allowing me to handle 
                        the full development cycle from 
                        designing user interfaces to implementing robust server-side logic.
                        </p>

                </div>
                <div className='home-buttons'>
                    <div> <button onClick={downloadResume}>RESUME</button>
                    </div>
                    <div>
                        <button onClick={openLinkedIn} className='linkedin'>LINKED <Linkedin size={16} strokeWidth={1} /></button>
                    </div>
                </div>
            </div>
</div>
        </div>
    )
}

export default Home