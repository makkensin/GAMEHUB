
import './buttonStartGame.css';



export const startGame = (element) => {
  

  
  const divButtonStart = document.createElement('div');
  const hammer = document.createElement('img');
  hammer.src = './hammer.jpg';

  divButtonStart.id = 'divstart';
  divButtonStart.classList ='divbuttonstart';
  hammer.classList = 'hammer';


  divButtonStart.append(hammer);
  element.append(divButtonStart);

}