



export const getRandom = (length, count) => {
  const indices = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
}

export const checkPasswor = (number,pass) =>{
  const password2 = pass;
  console.log(password2);
  console.log(number);

}