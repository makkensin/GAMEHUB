

import { dataMemoryCards } from '../../../DATA/dataMemory';
import './memoryGame.css'


export const memoryGame = (element) => {

  const runeSection = document.querySelector('.runesection'); 
  
  const memorySection1 = document.createElement('section');
  memorySection1.classList.add('memorysection1');

  const shuffledCards1 = dataMemoryCards.sort(() => 0.5 - Math.random());

   for (const card of shuffledCards1) {

     const container = document.createElement('div');
     container.classList = 'container';
      const card1 = document.createElement('div');
      card1.classList = 'card1';
        const cardFront = document.createElement('div');
        cardFront.classList = 'card-front';
        const cardBack = document.createElement('div');
        cardBack.classList = 'card-back';

        const imgFront = document.createElement('img');
        imgFront.src = './witcher.jpeg';
        const imgBack = document.createElement('img');
        imgBack.src = card;

        cardFront.append(imgFront);
        cardBack.append(imgBack);

        card1.append(cardFront,cardBack);
        container.append(card1);
      memorySection1.append(container);
   }

   const memorySection2 = document.createElement('section');
   memorySection2.classList.add('memorysection2');
 
   const shuffledCards2 = dataMemoryCards.sort(() => 0.5 - Math.random());
   
   for (const card of shuffledCards2) {

    const container2 = document.createElement('div');
    container2.classList = 'container2';
     const card2 = document.createElement('div');
     card2.classList = 'card2';
       const cardFront2 = document.createElement('div');
       cardFront2.classList = 'card-front2';
       const cardBack2 = document.createElement('div');
       cardBack2.classList = 'card-back2';

       const imgFront2 = document.createElement('img');
       imgFront2.src = './witcher.jpeg';
       const imgBack2 = document.createElement('img');
       imgBack2.src = card;

       cardFront2.append(imgFront2);
       cardBack2.append(imgBack2);

       card2.append(cardFront2,cardBack2);
       container2.append(card2);
     memorySection2.append(container2);
  }
  runeSection.append(memorySection1, memorySection2);
}





 