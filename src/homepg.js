import Picadas from './assets/images/picadas.jpg';

export default function HomePage () {

    //Import image

        const myImage = new Image();
        myImage.src = Picadas;


    // Dom elements

    const contentDiv = document.querySelector('#content');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const textContent = document.querySelector('#text-content');
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
    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Home';
    const buttonContact = document.createElement('button');
    buttonContact.textContent = 'Contact';
    const buttonAbout = document.createElement('button');
    buttonAbout.textContent = 'About us';

    lis[0].append(buttonHome);
    lis[1].append(buttonContact);
    lis[2].append(buttonAbout);

    // Text Content Elements

    textContent.append(myImage);
    const secondSectionDiv = document.createElement('div');
    secondSectionDiv.className = 'second-section';
    textContent.append(secondSectionDiv);
    const sSecH1 = document.createElement('h1');
    const paraSSec = document.createElement('p');
    sSecH1.textContent = 'The best PICADAS in Town';
    paraSSec.textContent = 'This is the best fucking picadas in Town, HELL YEAH'
    secondSectionDiv.append(sSecH1, paraSSec);

    




    






}