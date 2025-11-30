import createButton from "./lib/buttonCreator";

export default function NavBar () {

// Selectors

const nav = document.querySelector('nav');
const newUl = document.createElement('ul');
const navH1 = document.createElement('h1');

 // Nav Bar Elements

    nav.append(navH1);
    navH1.textContent = 'Picadas Gonzalo';

    nav.append(newUl);
    
    for (let i = 0; i < 3; i++) {
        const newLi = document.createElement('li');
        newUl.append(newLi);
    }

    const lis = newUl.querySelectorAll('li');
    
    createButton('Home', lis[0]);
    createButton('Contact', lis[1]);
    createButton('About Us', lis[2]);


}
