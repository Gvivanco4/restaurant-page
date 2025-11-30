import HomePage from './pages/homepg';
import ContactPage from './pages/contactpg';
import AboutUsPage from './pages/aboutuspg'; 


import _, { add } from 'lodash';
import './styles.css';

const baseHTML = document.body.innerHTML;

HomePage();

document.addEventListener('click', (e) => {
        document.body.innerHTML = baseHTML;
    
        if (e.target.textContent === 'Home') {
            HomePage();
        } else if (e.target.textContent === 'Contact') {
            ContactPage();
        } else if (e.target.textContent === 'About Us') {
            AboutUsPage();
        }
    });





