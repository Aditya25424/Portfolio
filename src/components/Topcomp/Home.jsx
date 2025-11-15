
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam deserunt amet iure similique doloribus pariatur, ab soluta at
                        facilis aut autem a ex ducimus vitae consectetur nulla dolorem cumque cum?</p>

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