

import './introPassword.css'
import { inputName } from '../inputname/inputName';
import { autoReset } from '../autoreset/autoReset';


export const introPassword = (password) =>{
  const main = document.querySelector('#main');
  const section = document.querySelector('.pregame');
  const inputPassword = document.createElement('div');
  const name = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'REMEMBER';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'CHECK';
  
  inputPassword.classList = 'inputpassword';
  name.classList = 'recuerda';
  input.id = 'input';
  button.id = 'button';

  input.focus();  
  button.addEventListener('click', () => {
    const inputValue = input.value; 
    if (password === inputValue) {
      inputPassword.classList.remove('inputpassword')
      inputPassword.classList.add('inputok')
      setTimeout(inputName, 2000)
    } else {
      inputPassword.classList.remove('inputpassword')
      inputPassword.classList.add('inputwrong')
      label.textContent = 'TRY AGAIN';
      input.value = ''; 
      setTimeout(() => autoReset(main,'demon'), 8000);
      
          
    }
});
name.append(label,input,button);
inputPassword.append(name);
section.append(inputPassword);

}
