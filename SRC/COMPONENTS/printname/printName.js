




export const printName = (player) =>{
 
  const playerName = document.createElement('div');
   playerName.classList = 'playername';

       playerName.innerHTML = `
          <h2>${player} are you ready?</h2>
       `;
       return playerName

}

