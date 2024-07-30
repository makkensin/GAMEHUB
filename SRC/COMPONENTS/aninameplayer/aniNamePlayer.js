


import { startGame } from '../buttonstartgame/buttonStartGame';
import './aniNamePlayer.css';


export const aniNamePlayer = (name) =>{
  let namePlayer = name.toUpperCase().split('');
  const textNamePlayer = [" ","A","R","E"," ","Y","O","U"," ","R","E","A","D","Y","?"];
  const compNamePlay = [...namePlayer, ...textNamePlayer];

  const completeNamePlayer = compNamePlay.join('');

  const main = document.querySelector('#main');
  const secNamePlayer = document.createElement('section');
  const divNamePlayer = document.createElement('div')
  const parraNamePlayer = document.createElement('p')
    parraNamePlayer.textContent = completeNamePlayer;
  const svg = document.createElement('svg');
  const filter = document.createElement('filter');
  const turbulence = document.createElement('feTurbulence');
  //const start = document.createElement('div');
  
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

  setTimeout(()=>{

    startGame(secNamePlayer);
    const btnStart = document.querySelector('#divstart');
    const rect = btnStart.getBoundingClientRect();
    console.log(rect.top, rect.right);

    if (rect.top === 799 && rect.right === 1015) {
       btnStart.classList.add('border');
    } else{
      console.log('Element with id "divstart" not found.');
    }
    
 },7000)
 filter.append(turbulence);
 svg.append(filter);
 
  main.append(secNamePlayer,svg);

}


