import Picadas from '../assets/images/picadas.jpg';
import NavBar from '../navbar'
import textContentCreator from '../lib/textContent';

export default function HomePage () {

    //Import image

        const myImage = new Image();
        myImage.src = Picadas;


    // Dom elements

    const textContent = document.querySelector('#text-content');
    

    // NavBar

    NavBar();

    // Text Content 

    textContentCreator(myImage, textContent, 'The best Picadas in Town', 'This is the best fucking picaedas in Town, HELL YEAH');


    




    






}