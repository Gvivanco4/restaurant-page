import HomePage from './homepg';

import _, { add } from 'lodash';
import './styles.css';

const baseHTML = document.body.innerHTML;

HomePage();

const buttons = document.querySelectorAll('button');

buttons.forEach((b) => {
    
    b.addEventListener('click', (e) => {
        document.body.innerHTML = baseHTML;
    
        if (e.target.textContent === 'Home') {
            HomePage();
        } else if (e.target.textContent === 'Contact') {
            ContactPage();
        } else {
            AboutUsPage();
        }
    })
})





