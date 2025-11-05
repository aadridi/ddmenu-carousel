// src/index.js
import './styles.css';
import { updateCarousel } from './modules/carousel.js';

/* import { createDropDownMenu } from './modules/ddm.js'; */

/* Partie DropDownMenu Exercise
const ddmContainer = document.querySelector('.ddme-list');

const ddm = createDropDownMenu('Edit', 'Copy', 'Delete');

const ddmeBtn = document.querySelector('#ddme-btn');

ddmContainer.append(ddm);

ddmeBtn.addEventListener('click', () => {
    console.log('Clicked');
    ddmContainer.classList.toggle('hidden');
});*/

/* Partie Carousel */
updateCarousel(0);