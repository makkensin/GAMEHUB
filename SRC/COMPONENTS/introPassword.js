

import './introPassword.css'

export const introPassword = (password) =>{
  console.log('adios');
  console.log(password);
  const section = document.querySelector('.pregame');
  const inputPassword = document.createElement('div');
  const name = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'recuerda';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'enviar';
  
  button.addEventListener('click', () => {
    const inputValue = input.value; 
    if (password === inputValue) {
      alert('correcto');
    } else {
        alert('intenta otra vez')
    }
});

  
  inputPassword.classList = 'inputpassword';
  name.classList = 'name';
  input.id = 'input';
  button.id = 'button';

name.append(label,input,button);
inputPassword.append(name);
section.append(inputPassword);

}