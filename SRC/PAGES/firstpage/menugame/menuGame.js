


import './menuGame.css'
import { printName } from '../../../COMPONENTS/printname/printName'
import { gamesToPlay } from '../../../DATA/dataFirstPage';


export const menuGame =(name)=>{
   console.log(name);
  const main = document.querySelector('#main')

  const pregame = document.createElement('section');
  pregame.classList = 'pregame';

  const displayMenu = document.createElement('section');
  displayMenu.classList = 'displaymenu';
 
  const namePlayer = document.createElement('div');
  namePlayer.classList = 'playername';
  
  const gamesDiv = document.createElement('div');
  gamesDiv.classList = 'games';

  for (const game of gamesToPlay) {
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
  pregame.append(displayMenu);
  main.append(pregame);
}






