




export const printName = (player) =>{
 
  const section = document.createElement('section');
   section.id = 'section2';

       section.innerHTML = `
          <h2>${player} are you ready?</h2>
       `;
       return section

}