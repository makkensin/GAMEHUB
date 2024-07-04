


import './introPassword.css'
import { inputName } from './inputName';

export const introPassword = (password) =>{
  const section = document.querySelector('.pregame');
  const inputPassword = document.createElement('div');
  const name = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'Recuerda';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'ENVIAR';
  
  inputPassword.classList = 'inputpassword';
  name.classList = 'name';
  input.id = 'input';
  button.id = 'button';

  button.addEventListener('click', () => {
    const inputValue = input.value; 
    if (password === inputValue) {
      inputPassword.classList.remove('inputpassword')
      inputPassword.classList.add('inputok')
      setTimeout(inputName, 3000)
    } else {
      inputPassword.classList.remove('inputpassword')
      inputPassword.classList.add('inputwrong')
        
    }
});
name.append(label,input,button);
inputPassword.append(name);
section.append(inputPassword);

}