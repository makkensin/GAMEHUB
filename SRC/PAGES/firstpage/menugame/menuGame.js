


import { printName } from '../../../COMPONENTS/printname/printName'

import './menuGame.css'

export const menuGame =(name,games)=>{
   console.log(name);
  const inputName = document.querySelector('.inputname')
  inputName.innerHTML = '';
  const section = document.querySelector('.pregame');

  const displayMenu = document.createElement('section');
  displayMenu.classList = 'displaymenu';
 
  const namePlayer = document.createElement('div');
  namePlayer.classList = 'playername';
  
  const gamesDiv = document.createElement('div');
  gamesDiv.classList = 'games';

  for (const game of games) {
     console.log(game);
     const gameDiv = document.createElement('div');
     gameDiv.classList = 'game';
     const gameImage = document.createElement('img');
     gameImage.classList = 'gameimg';
     gameImage.src = game.img;

    gameDiv.addEventListener('click', ()=>{
      game.ruta();
    })
     
     gameDiv.append(gameImage);

   gamesDiv.append(gameDiv)

  }

  displayMenu.append(printName(name),gamesDiv);
  section.append(displayMenu);
  
}






