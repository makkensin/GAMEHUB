


import './buttonStartGame.css';


export const startGame = (element) => {
  
  const divButtonStart = document.createElement('div');
  const hammer = document.createElement('img');
  hammer.src = './hammer.jpg';
  
  divButtonStart.id = 'divstart';
  divButtonStart.classList ='divbuttonstart';
  hammer.classList = 'hammer';
  
  divButtonStart.addEventListener('animationend', () =>{
    divButtonStart.classList.add('border');
    divButtonStart.style.cursor = 'pointer';
    
    divButtonStart.addEventListener('click', ()=>{
      setTimeout(() => {
        
       
      }, 3000);
    })
  })
  divButtonStart.append(hammer);
  element.append(divButtonStart);

}