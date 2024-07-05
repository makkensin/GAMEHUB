


import { printName } from '../../../COMPONENTS/printname/printName'
import './menuGame.css'

export const menuGame =(name)=>{
   console.log(name);
  //printName(name);
  const inputName = document.querySelector('.inputname')
  inputName.innerHTML = '';
  const section = document.querySelector('.pregame');


  const displayMenu = document.createElement('section');
  displayMenu.classList = 'displaymenu';
 
  const namePlayer = document.createElement('div');
  namePlayer.classList = 'nameplayer';





  namePlayer.append(printName(name));
  displayMenu.append(namePlayer);
  section.append(displayMenu);
  
}