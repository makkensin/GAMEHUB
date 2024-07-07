


import './inputName.css'
import { menuGame } from '../../PAGES/firstpage/menugame/menuGame';
import { gamesToPlay } from '../../DATA/dataFirstPage';

export const inputName = () =>{
 console.log('hola como estas?');

 const inputOk = document.querySelector('.inputok')
 inputOk.innerHTML = '';

 const section = document.querySelector('.pregame');

 const inputName = document.createElement('div');
 const player = document.createElement('div');
 const label2 = document.createElement('label');
 label2.textContent = 'Your Name';
 const input = document.createElement('input');
 const button = document.createElement('button');
 button.textContent = 'JUEGA';

 inputName.classList = 'inputname';
 player.classList = 'player';
 input.id = 'input';
 button.id = 'button';

 button.addEventListener('click', () => {
  const namePlayer = input.value; 
  menuGame(namePlayer,gamesToPlay);
  //printName(namePlayer)
  
});
player.append(label2,input,button);
inputName.append(player);
section.append(inputName);
}




