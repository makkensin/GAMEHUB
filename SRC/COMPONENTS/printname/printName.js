




export const printName = (name) =>{
   
  const body = document.querySelector('body');
  const section = document.createElement('section');
   section.id = 'section2';

       section.innerHTML = `
          <h2>${name}</h2>
       `
   body.append(section)
}