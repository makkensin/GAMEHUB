


import './firstPage.css'

import {introName} from '../COMPONENTS/introName.js';
import { getRandom,checkPassword } from '../UTILS/getRamNum.js';

export const firstPage = (numbers) => {
  const password1 = [];
  console.log(password1);
  const main = document.querySelector('main');
  
  const section = document.createElement('section');
  section.classList = 'pregame';
  
  const p = document.createElement('p');
  p.classList = 'pregame__content';
  
  const randomIndices = getRandom(numbers.length, 5);

  for (let i = 0; i < numbers.length; i++) {
   
    const span = document.createElement('span');
    span.classList = 'pregame__content--number';
    span.textContent = numbers[i];
    
    if (randomIndices.includes(i)) {
      span.classList.add('pregame__content--especial'); 
      span.addEventListener('click', ()=>{
        span.classList.remove('pregame__content--especial'); 
        const num = span.textContent;
        password1.push(num);
        checkPassword(password1)
      })
    }
    
    p.append(span);
  }
  section.append(p);
  setTimeout(introName, 5000000); 
  main.append(section);
}