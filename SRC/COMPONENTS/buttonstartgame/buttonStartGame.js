
import './buttonStartGame.css';



export const startGame = (element) => {

 //console.log('martillo de la justicia');

  const divButtonStart = document.createElement('div');
  const hammer = document.createElement('img');
  hammer.src = './hammer.jpg';



  divButtonStart.classList ='divbuttonstart';
  hammer.classList = 'hammer';


divButtonStart.append(hammer);
element.append(divButtonStart);

}