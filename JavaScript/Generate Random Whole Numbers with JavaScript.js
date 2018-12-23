var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  while (randomNumberBetween0and19 === 0){
      randomNumberBetween0and19 = Math.floor(Math.random() * 10);
  }
  return randomNumberBetween0and19;
}