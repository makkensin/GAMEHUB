

import { runasCeltas } from '../../../DATA/runasCeltas'
import { getRandom } from '../../../UTILS/getRamNum';
import './runePage.css'



export const runePage = (element) =>{

  const secNamePlayer = document.querySelector('.secnameplayer');
    secNamePlayer.remove();
  const svg = document.querySelector('.svg');
    svg.remove();

  const main = document.querySelector('main');
  const runeSection = document.createElement('section');
  runeSection.classList = 'runesection';

  const p = document.createElement('p');
  p.classList = 'runesection__content';

  const randomIndices = getRandom(runasCeltas.length, 1);

  for (let i = 0; i < runasCeltas.length; i++) {

    const span = document.createElement('span');
    span.classList = 'runesection__content--number';
    span.textContent = runasCeltas[i];

    if (randomIndices.includes(i)) {
      span.classList.add('runesection__content--especial');
      span.addEventListener('click', ()=>{
        span.classList.remove('runesection__content--especial');
        const num = span.textContent;
        password1.push(num);
       
        specialClickCount++;
        if (specialClickCount === 5) {
          introPassword(password1.join(''));
        }

      })
    }
    p.append(span);
  }

  runeSection.append(p);
  main.append(runeSection);

  

}