

import './introName.css'

import {getName} from '../UTILS/getName'

export const introName = () =>{
  
  const section = document.querySelector('.pregame');
  const backGroung = document.createElement('div');
  const name = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'Introduce tu nombre';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'enviar';

  button.addEventListener('click',() => getName(input) )
  
  backGroung.classList = 'backgroung';
  name.classList = 'name';
  input.id = 'input';
  button.id = 'button';

name.append(label,input,button);
backGroung.append(name);
section.append(backGroung);

}