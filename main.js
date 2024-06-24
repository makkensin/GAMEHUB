


import './style.css'


import { arrayNumbers } from './SRC/DATA/dataFirstPage.js'
import { firstPage } from './SRC/PAGES/firstPage.js';


const divapp = document.querySelector('#app')

divapp.innerHTML = `
<header id="header" class="header"></header>
<main id="main" class="main"></main>
`;
firstPage(arrayNumbers);

