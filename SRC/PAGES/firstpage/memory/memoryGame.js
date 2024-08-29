

import { dataMemoryCards } from '../../../DATA/dataMemory';
import './memoryGame.css'

export const memoryGame = (element) =>{

  const runeSection = document.querySelector('.runesection', '.runesection__transparent');
  
  const memorySection1 = document.createElement('section');
  memorySection1.classList = 'memorysection1';

  const fragment1 = document.createDocumentFragment();
      const shuffledCards1 = dataMemoryCards.sort(() => 0.5 - Math.random());
      
      for (const card of shuffledCards1) {
        const cardRune1 = document.createElement('img');
        cardRune1.classList = 'cardrune1';
          cardRune1.src = card;
          fragment1.append(cardRune1);
        setTimeout(() => {
          memorySection1.append(fragment1);
        }, 2000);
      }
  

   const memorySection2 = document.createElement('section');
   memorySection2.classList = 'memorysection2';
   const fragment2 = document.createDocumentFragment();
   
        const shuffledCards2 = dataMemoryCards.sort(() => 0.5 - Math.random());
        
        for (const card of shuffledCards2) {
        const cardRune2 = document.createElement('img');
        cardRune2.classList = 'cardrune1';
          cardRune2.src = card;
          fragment2.append(cardRune2);
          setTimeout(() => {
            memorySection2.append(fragment2);
          }, 4000);
        }
      
   
 


   
runeSection.append(memorySection1, memorySection2);

  
}