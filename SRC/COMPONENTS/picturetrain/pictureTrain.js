



import './pictureTrain.css';
import { dataPictureTrain } from '../../DATA/dataPictureTrain';
import { aniNamePlayer } from '../aninameplayer/aniNamePlayer';

export const pictureTrain = (name, index) =>{

    const pregame = document.querySelector('.pregame');
    if (pregame) {
      pregame.remove();
    }
     const main = document.querySelector('#main');
     main.innerHTML = '';
     const gallery = document.createElement('div');
     gallery.classList = 'gallery'
      gallery.innerHTML = `
         <img alt="imagen galeria" src="${dataPictureTrain[index].url}"/>
      `;
      main.append(gallery);
       
      setTimeout(() => {
        if (index + 1 === dataPictureTrain.length) {
          gallery.remove()
          aniNamePlayer(name);
          return 
        }else{
          let newIndex = index + 1;
          pictureTrain(name, newIndex);
        }
      }, dataPictureTrain[index].time);
      
    };

    



    
    
  





















// export const pictureTrain = async (nombre) =>{
//   const namePlayer = nombre;
//   const pregame = document.querySelector('.pregame');
//   pregame.remove();

//   const main = document.querySelector('#main');

//   for (const picture of dataPictureTrain) {
//     const gallery = document.createElement('div');
//     gallery.classList = 'gallery'
//     const img = document.createElement('img');
//     img.src = picture;
//     img.alt = 'Imagen de la galería';
//     gallery.appendChild(img);

//     main.append(gallery);
//     await new Promise(resolve => setTimeout(resolve, 100));
//     main.removeChild(gallery)
//   }
//   aniNamePlayer(namePlayer);

// }

