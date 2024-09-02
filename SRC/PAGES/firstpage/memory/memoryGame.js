

import { dataMemoryCards } from '../../../DATA/dataMemory';
import './memoryGame.css'



let firstCard = null;
let secondCard = null;
let count1 = 0;
let count2 = 0;



export const checkCard = (card) => {
 
  if (!firstCard) {
    firstCard = card;
    console.log(firstCard + ' carta primera');
    
  } else {
    secondCard = card;
    console.log(secondCard + ' carta segunda');
   
    setTimeout(() => {
      if (firstCard === secondCard) {
        count1 = 0;
        count2 = 0;
       
      } else {
        const cards = document.querySelectorAll('.card1, .card2');
        cards.forEach(card => {
          card.classList.remove('rotar');
        });
        count1 = 0;
        count2 = 0;
       firstCard = null;
       secondCard = null;

    }
    
  }, 1000);

}
}
export const memoryGame = (element) => {

  const runeSection = document.querySelector('.runesection'); 
  
  const memorySection1 = document.createElement('section');
  memorySection1.classList.add('memorysection1');

  const shuffledCards1 = dataMemoryCards.sort(() => 0.5 - Math.random());

   for (const cardOne of shuffledCards1) {

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
      imgBack.src = cardOne;
      
      card1.addEventListener('click', () =>{
        count1++ 
        if (count1 == 1) {
          card1.classList.toggle('rotar')  
        }else{
          return
        }
         const cardValue = imgBack.src;
          console.log(cardValue);
          checkCard(cardValue);
      })

      cardFront.append(imgFront);
      cardBack.append(imgBack);
      
      card1.append(cardFront,cardBack);
      container.append(card1);
      memorySection1.append(container);
    }

   const checkCards = document.createElement('div');
   checkCards.classList = 'checkcards';


    const checkCard1 = document.createElement('div');
    checkCard1.classList = 'checkcard1';
    const checkCard2 = document.createElement('div');
    checkCard2.classList = 'checkcard2';


    checkCards.append(checkCard1,checkCard2);
     
     

   const memorySection2 = document.createElement('section');
   memorySection2.classList.add('memorysection2');
 
   const shuffledCards2 = dataMemoryCards.sort(() => 0.5 - Math.random());
   
   for (const cardTwo of shuffledCards2) {

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
     imgBack2.src = cardTwo;
     
     card2.addEventListener('click', () =>{
      
      count2++ 
      if (count2 == 1) {
        card2.classList.toggle('rotar')  
      }else{
        return
      }
      const cardValue2 = imgBack2.src;
      console.log(cardValue2);
      checkCard(cardValue2);

    })
       cardFront2.append(imgFront2);
       cardBack2.append(imgBack2);

       card2.append(cardFront2,cardBack2);
       container2.append(card2);
     memorySection2.append(container2);
    }
    
  runeSection.append(memorySection1,checkCards, memorySection2);
}

















// let firstCardSrc = null;
// let secondCardSrc = null;
// let firstCardElement = null;
// let secondCardElement = null;
// let lock = false;

// export const checkCards = (cardSrc, cardElement) => {
//   if (lock || cardElement === firstCardElement) return;

//   if (!firstCardSrc) {
//     // Primer clic
//     firstCardSrc = cardSrc;
//     firstCardElement = cardElement;
//   } else {
//     // Segundo clic
//     secondCardSrc = cardSrc;
//     secondCardElement = cardElement;
//     lock = true;

//     setTimeout(() => {
//       if (firstCardSrc === secondCardSrc) {
//         alert('¡Las tarjetas coinciden!');
//         // Puedes añadir lógica aquí para mantener las tarjetas volteadas si coinciden
//       } else {
//         alert('¡Las tarjetas no coinciden!');
//         firstCardElement.classList.remove('rotar');
//         secondCardElement.classList.remove('rotar');
//       }
//       firstCardSrc = null;
//       secondCardSrc = null;
//       firstCardElement = null;
//       secondCardElement = null;
//       lock = false;
//     }, 1000);
//   }
// }

// export const memoryGame = (element) => {
//   const runeSection = document.querySelector('.runesection'); 

//   const memorySection1 = document.createElement('section');
//   memorySection1.classList.add('memorysection1');

//   const shuffledCards1 = dataMemoryCards.concat(dataMemoryCards).sort(() => 0.5 - Math.random()); // Duplicar y barajar cartas

//   for (const cardSrc of shuffledCards1) {
//     const container = document.createElement('div');
//     container.classList.add('container');

//     const card1 = document.createElement('div');
//     card1.classList.add('card1');

//     const cardFront = document.createElement('div');
//     cardFront.classList.add('card-front');
//     const cardBack = document.createElement('div');
//     cardBack.classList.add('card-back');

//     const imgFront = document.createElement('img');
//     imgFront.src = './witcher.jpeg'; // Imagen de fondo
//     const imgBack = document.createElement('img');
//     imgBack.src = cardSrc; // Imagen de la carta

//     cardFront.append(imgFront);
//     cardBack.append(imgBack);

//     card1.append(cardFront, cardBack);
//     container.append(card1);
//     memorySection1.append(container);

//     card1.addEventListener('click', () => {
//       card1.classList.toggle('rotar');
//       checkCards(cardSrc, card1);
//     });
//   }

//   const checkCardsContainer = document.createElement('div');
//   checkCardsContainer.classList.add('checkcards');
//   runeSection.append(memorySection1, checkCardsContainer);

//   const memorySection2 = document.createElement('section');
//   memorySection2.classList.add('memorysection2');
  
//   const shuffledCards2 = shuffledCards1.slice(); // Copiar baraja para segunda sección

//   for (const cardSrc of shuffledCards2) {
//     const container2 = document.createElement('div');
//     container2.classList.add('container2');

//     const card2 = document.createElement('div');
//     card2.classList.add('card2');

//     const cardFront2 = document.createElement('div');
//     cardFront2.classList.add('card-front2');
//     const cardBack2 = document.createElement('div');
//     cardBack2.classList.add('card-back2');

//     const imgFront2 = document.createElement('img');
//     imgFront2.src = './witcher.jpeg'; // Imagen de fondo
//     const imgBack2 = document.createElement('img');
//     imgBack2.src = cardSrc; // Imagen de la carta

//     cardFront2.append(imgFront2);
//     cardBack2.append(imgBack2);

//     card2.append(cardFront2, cardBack2);
//     container2.append(card2);
//     memorySection2.append(container2);

//     card2.addEventListener('click', () => {
//       card2.classList.toggle('rotar');
//       checkCards(cardSrc, card2);
//     });
//   }
  
//   runeSection.append(memorySection1, checkCardsContainer, memorySection2);
// };






























































 