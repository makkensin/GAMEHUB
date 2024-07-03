


import './firstPage.css'

import {introPassword} from '../COMPONENTS/introPassword.js';
import { getRandom } from '../UTILS/getRamNum.js';


export const firstPage = (numbers) => {
  const password1 = [];
  let specialClickCount = 0;
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
       
        specialClickCount++;
        if (specialClickCount === 5) {
          console.log('hola');
          introPassword(password1.join(''));
        }

      })
    }
    p.append(span);
  }

  section.append(p);
  main.append(section);
}