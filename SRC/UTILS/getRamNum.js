



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

