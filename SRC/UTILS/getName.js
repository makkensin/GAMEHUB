



import {printName} from '../../COMPONENTS/printname/printName.js';
let stringName = '';

export const getName = (input) =>{
  const name = input.value
  stringName += ` ${name}`
  console.log(name);
  input.value = '';

  printName (stringName);
  
}