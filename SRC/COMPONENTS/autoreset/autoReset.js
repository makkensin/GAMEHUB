

import './autoReset.css'
import { firstPage } from '../../PAGES/firstpage/firstPage';
import { arrayNumbers } from '../../DATA/dataFirstPage';

export const autoReset = (element,classlist) =>{
  const pregame = document.querySelector('.pregame');
  
  pregame.remove();

  const demon = document.createElement('div');
  const demonImg = document.createElement('img');
  demonImg.src = './Exorcista.jpg';

  demon.classList =`${classlist}`;
  demonImg.classList = 'demonimg';

  demon.append(demonImg);
  element.append(demon);

  setTimeout(() => {
    demon.remove();
    firstPage(arrayNumbers);
  }, 80);
}


