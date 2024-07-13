

import './aniNamePlayer.css';


export const aniNamePlayer = (name) =>{
  let namePlayer = name.toUpperCase().split('');
  const textNamePlayer = [" ","A","R","E"," ","Y","O","U"," ","R","E","A","D","Y"];
  const compNamePlay = [...namePlayer, ...textNamePlayer];
  //console.log(compNamePlay);
  const completeNamePlayer = compNamePlay.join('');
  //console.log(completeNamePlayer);


  const main = document.querySelector('#main');
  const secNamePlayer = document.createElement('section');
  const divNamePlayer = document.createElement('div')
  const parraNamePlayer = document.createElement('p')
  
  secNamePlayer.classList = 'secnameplayer';
  divNamePlayer.classList = 'divnameplayer';
  parraNamePlayer.textContent = completeNamePlayer;


  divNamePlayer.append(parraNamePlayer);
  secNamePlayer.append(divNamePlayer);
  main.append(secNamePlayer);

  






}