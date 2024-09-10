


export const card = ( classList1, classList2, classList3, src1, src2  ) =>{

  const card = document.createElement('div');
  card.classList = classList1;

  const cardFront = document.createElement('div');
  cardFront.classList = classList2;
  const cardBack = document.createElement('div');
  cardBack.classList = classList3;
  
  const imgFront = document.createElement('img');
  imgFront.src = src1;
  const imgBack = document.createElement('img');
  imgBack.src = src2;

  cardFront.append(imgFront);
      cardBack.append(imgBack);
      
      card.append(cardFront,cardBack);

      return card; 

}


