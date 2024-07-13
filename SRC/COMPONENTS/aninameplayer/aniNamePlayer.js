

import './aniNamePlayer.css';


export const aniNamePlayer = (name) =>{
  let namePlayer = name.toUpperCase().split('');
  const textNamePlayer = [" ","A","R","E"," ","Y","O","U"," ","R","E","A","D","Y","?"];
  const compNamePlay = [...namePlayer, ...textNamePlayer];
  //console.log(compNamePlay);
  const completeNamePlayer = compNamePlay.join('');
  //console.log(completeNamePlayer);


  const main = document.querySelector('#main');
  const secNamePlayer = document.createElement('section');
  const divNamePlayer = document.createElement('div')
  const parraNamePlayer = document.createElement('p')
    parraNamePlayer.textContent = completeNamePlayer;
  const svg = document.createElement('svg');
  const filter = document.createElement('filter');
  const turbulence = document.createElement('feTurbulence');
  
  
  secNamePlayer.classList = 'secnameplayer';
  divNamePlayer.classList = 'divnameplayer';
  parraNamePlayer.classList = 'parranameplayer';
  svg.classList = 'svg';
  filter.id = 'flame';
  turbulence.id ='turbulence';
  turbulence.setAttribute('baseFrequency', '0.1 0.1');
  turbulence.setAttribute('numOctaves','3');
  turbulence.setAttribute('seed', '4');


  divNamePlayer.append(parraNamePlayer);
  secNamePlayer.append(divNamePlayer);

  filter.append(turbulence);
  svg.append(filter);

  main.append(secNamePlayer,svg);

  






}