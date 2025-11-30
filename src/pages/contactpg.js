import Picadas from '../assets/images/picadas.jpg';
import textContentCreator from '../lib/textContent';
import NavBar from '../navbar'

export default function ContactPage() {

    //Import image
    
            const myImage = new Image();
            myImage.src = Picadas;

    // Dom Elements

    const textContent = document.querySelector('#text-content');

    //Nav Bar

    NavBar();

    //Text Content

    textContentCreator(myImage, textContent, 'Reach out to gvivanco4@gmail.com', 'Please fill everything as accordingly')
}