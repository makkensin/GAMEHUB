



import {printName} from '../COMPONENTS/printName.js';
let stringName = '';

export const getName = (input) =>{
  const name = input.value
  stringName += ` ${name}`
  console.log(name);
  input.value = '';

  printName (stringName);
  
}