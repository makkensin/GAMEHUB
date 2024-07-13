


import { pictureTrain } from '../picturetrain/pictureTrain';
import './inputName.css'


export const inputName = () =>{

 const inputOk = document.querySelector('.inputok')
 inputOk.remove();

 const section = document.querySelector('.pregame');

 const inputName = document.createElement('div');
 const player = document.createElement('div');
 const label2 = document.createElement('label');
 label2.textContent = 'YOUR NAME';
 const input = document.createElement('input');
 const button = document.createElement('button');
 button.textContent = 'LET PLAY';

 inputName.classList = 'inputname';
 player.classList = 'player';
 input.id = 'input';
 button.id = 'button';

 button.addEventListener('click', () => {
  const namePlayer = input.value; 
   pictureTrain(namePlayer)
  //menuGame(namePlayer,gamesToPlay);
});

player.append(label2,input,button);
inputName.append(player);
section.append(inputName);
}




