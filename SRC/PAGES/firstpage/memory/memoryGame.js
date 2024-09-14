

 //import { card } from '../../../COMPONENTS/sectioncardmemory/sectionCard';
 import { dataMemoryCards } from '../../../DATA/dataMemory';
import './memoryGame.css'


let count = 0;
//let score = 0
let selectedCards = [];
let selectedElements = []; 
const arrayBarajado = [...dataMemoryCards, ...dataMemoryCards].sort(() => Math.random() - 0.5);



export const memoryGame = (element) => {

  const runeSection = document.querySelector('.runesection');

   const memorySection = document.createElement('section');
   memorySection.classList.add('memorysection');

     for (const rune of arrayBarajado) {
    const card = document.createElement('div');
    card.classList = 'card';
    const cardBack = document.createElement('div');
    cardBack.classList = 'card-back';
    const imgBack = document.createElement('img');
    imgBack.classList = 'img-back';
    imgBack.src = rune;

    const cardFront = document.createElement('div');
    cardFront.classList = 'card-front';
    const imgFront = document.createElement('img');
    imgFront.classList = 'img-front';
    imgFront.src = './witcher.jpeg';

    cardFront.append(imgFront);
    cardBack.append(imgBack);
    card.append(cardFront,cardBack);
   memorySection.append(card);
   card.addEventListener('click', () => check(card, imgBack.src)); 
  }
  runeSection.append(memorySection);
 
}

export const check = (card, imgSrc) =>{

  if (!card.classList.contains('flipped') && selectedCards.length < 2) {
    card.classList.add('flipped');  
    selectedCards.push(imgSrc);  
    selectedElements.push(card);  
    count++;

    if (selectedCards.length === 2) {
      setTimeout(() => {
        
        if (selectedCards[0] === selectedCards[1]) {
          console.log('¡Es un match! Las cartas quedan volteadas.');
          console.log(selectedCards[0]);
          console.log(selectedCards[1]);
          
        } else {
          console.log('No es un match.');
          selectedElements.forEach(card => {
            console.log(card);
            
            card.classList.remove('flipped');
          });
        }

          selectedCards = [];
          selectedElements = [];
          count = 0;
       
    }, 1000)
}

  }
}
    
  















































// export const memoryGame = (element) => {
//   const runeSection = document.querySelector('.runesection');

//   runeSection.classList = 'new-runesection';

//   const memorySection = document.createElement('section');
//   memorySection.classList.add('memorysection');

//   for (const rune of arrayBarajado) {
//     const carta = document.createElement('div');
//     carta.classList = 'carta';
//     const cartaBack = document.createElement('div');
//     cartaBack.classList = 'carta-back';
//     const imgBack = document.createElement('img');
//     imgBack.classList = 'img-back';
//     imgBack.src = rune ;

//     const cartaFront = document.createElement('div');
//     cartaFront.classList = 'carta-front';
//     const imgFront = document.createElement('img');
//     imgFront.classList = 'img-front';
//     imgFront.src = './witcher.jpeg';

//     cartaFront.append(imgFront);
//     cartaBack.append(imgBack);
//     carta.append(cartaFront,cartaBack);
//    memorySection.append(carta);
//    carta.addEventListener('click', () => check(carta, cartaBack)); 
//   }
//   runeSection.append(memorySection);
//   marcador(runeSection)
// }


// export const check = (carta, cartaBack) => {
//   if (!carta.classList.contains('flipped') && selectedCards.length < 2) {
//     carta.classList.add('flipped');  // Volteamos la carta
//     selectedCards.push(cartaBack.src);  // Guardamos el número de la carta
//     selectedElements.push(carta);  // Guardamos la referencia a la carta DOM
//     count++;
    
//     if (selectedCards.length === 2) {
//       setTimeout(() => {
//         // Comparamos si las dos cartas seleccionadas tienen el mismo valor
//         if (selectedCards[0] === selectedCards[1]) {
//           console.log('¡Es un match! Las cartas quedan volteadas.');
//           score += 1;
//           const puntuacion = document.querySelector('.puntuacion').textContent = 'puntuacion: ' + score;
//           console.log(score); 
//          // Las cartas que coinciden se quedan volteadas, no hacemos nada más
//         } else {
//           console.log('No es un match.');
//           // Si no coinciden, quitamos la clase flipped de ambas cartas
//           selectedElements.forEach(card => {
//             card.classList.remove('flipped');
//           });
//           score -= 1;
//           const puntuacion = document.querySelector('.puntuacion').textContent = 'puntuacion: ' + score;
//           console.log(score); 
//         }
      
//         // Reiniciamos los arrays y el contador para la siguiente jugada
//         selectedCards = [];
//         selectedElements = [];
//         count = 0;

//          // Verificamos si todas las cartas están volteadas
//       const totalCartas = document.querySelectorAll('.carta-primera').length;
//       const cartasVolteadas = document.querySelectorAll('.flipped').length;

//       if (cartasVolteadas === totalCartas) {
//         alert('¡Has ganado!');
//       }
//       }, 1000);  // Esperamos 1 segundo antes de voltear las cartas que no coincidan
//     }
//   }
// };

// export const marcador = (runeSection) =>{
  
//   let divPuntacion = document.querySelector('.div-puntuacion');
  
//   if (!divPuntacion) {
//     divPuntacion = document.createElement('div');
//     divPuntacion.classList = 'div-puntuacion';
    
//     const puntuacion = document.createElement('h3');
//     puntuacion.classList = 'puntuacion';
//     puntuacion.textContent = 'Puntuación: ' + score;
    
//     divPuntacion.append(puntuacion);
//     runeSection.append(divPuntacion);
//   } else {
//     // Actualizar el marcador si ya existe
//     const puntuacion = divPuntacion.querySelector('.puntuacion');
//     puntuacion.textContent = 'Puntuación: ' + score;
//   }
// }














// let firstCard = null;
// let secondCard = null;
// let count1 = 0;
// let count2 = 0;

// export const checkCard = (card) => {
 
//   if (!firstCard) {
//     firstCard = card;
//     console.log(firstCard);
    
//   } else {
//     secondCard = card;
//     console.log(secondCard);
    
   
//     setTimeout(() => {
//       if (firstCard === secondCard) {
//         count1 = 0;
//         count2 = 0;
//         firstCard = null;
//         secondCard = null;
//         return;
      
//       } else {
//         const cards = document.querySelectorAll('.card1, .card2');
//         cards.forEach(card => {
//           card.classList.remove('rotar');
//         });
//         count1 = 0;
//         count2 = 0;
//        firstCard = null;
//        secondCard = null;
//     }
    
//   }, 1000);
// }
// }

// export const memoryGame = (element) => {

//   const runeSection = document.querySelector('.runesection'); 
  
//   const memorySection1 = document.createElement('section');
//   memorySection1.classList.add('memorysection1');

//   const shuffledCards1 = dataMemoryCards.sort(() => 0.5 - Math.random());

//    for (const cardOne of shuffledCards1) {

//      const container = document.createElement('div');
//      container.classList = 'container';
     
//      const card1 = card('card1', 'card-front', 'card-back',  './witcher.jpeg', cardOne )

//       card1.addEventListener('click', () =>{
//         count1++ 
//         if (count1 == 1) {
//           card1.classList.toggle('rotar')  
//         }
//          const cardValue = imgBack.src;
//           checkCard(cardValue);
//       })

//       container.append(card1);
//       memorySection1.append(container);
//     }
//    const memorySection2 = document.createElement('section');
//    memorySection2.classList.add('memorysection2');
 
//    const shuffledCards2 = dataMemoryCards.sort(() => 0.5 - Math.random());
   
//    for (const cardTwo of shuffledCards2) {

//     const container2 = document.createElement('div');
//     container2.classList = 'container2';
   
//     const card2 =card('card2', 'card-front2', 'card-back2', './witcher.jpeg', cardTwo )
//      card2.addEventListener('click', () =>{
//       count2++ 
//       if (count2 == 1) {
//         card2.classList.toggle('rotar')  
//       }
//       const cardValue2 = imgBack2.src;
//       checkCard(cardValue2);
//     })
//        container2.append(card2);
//      memorySection2.append(container2);
//     }
//   runeSection.append(memorySection1, memorySection2);
// }






















































































































 