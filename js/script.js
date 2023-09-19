const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');
const message = document.getElementById('output');
let counterPoints = 0;
let numberBlackList = [];
let stopCondition = false;

reset();
console.log(numberBlackList);


function init(stage,n){
  for(let i = 1; i <= n ;i++) {
      let square = genSquare(uniqueRandomNumber(1,n));
      square.classList.add(stage)
      if (square.id <= 16) {
        square.classList.add('hideBomb')
      }  
      container.append(square);
      }  
      console.log(numberBlackList);
  }


  

// generator start btn
function genBtnStart (){
  const btn = document.createElement('button');
  btn.className = 'btn-play'
  btn.innerHTML = 'Start';

  btn.addEventListener('click',function(){

    clear();

    if(chooseLevel.value === 'easy'){
      init('easy',100)
      win(100,16);
    }
    else if(chooseLevel.value === 'normal'){
      init('normal',81)
    }
    else if(chooseLevel.value === 'hard'){
      init('hard',49)
     
    }
  })
  return btn;
}

// square generator 
function genSquare(index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.id = index;
  newSquare.addEventListener('click',clickedCheck)
  return newSquare;
}

// function for clicked square 
if(!stopCondition){
  function clickedCheck(){
    if(this.id <= 16 ){
      const bombExplosion = document.getElementsByClassName('hideBomb')
      for(let i = 0 ; i <= bombExplosion.length -1;i++){
        bombExplosion[i].classList.add('bomb')
      }
      lose();
      console.log(stopCondition);
    }else{
      this.classList.add('checked')
      this.removeEventListener('click',clickedCheck)
      counterPoints++;
      console.log(counterPoints);
      console.log(this.id);
    }
    win(numberBlackList.length,16);
  }
}



// function for unique random number 
function uniqueRandomNumber(min,max){
  let randomNumber
  let controlInList = false;
  while(!controlInList){
    randomNumber = getRandomNumber(min,max);
    if (!numberBlackList.includes(randomNumber)) {
      numberBlackList.push(randomNumber)
      controlInList = true;
    }
  }
  return randomNumber;
}

// random number
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)+ min)
}

// lose condition
function lose(){
  message.innerHTML = `Hai perso! Hai fatto ${counterPoints} punti su ${numberBlackList.length - 16}`
  stopCondition = true;
}

//win codnition
function win(n,bomb) { 
  if (counterPoints === (n - bomb)) {
    message.innerHTML = `CONGRATULAZIONI!! HAI  VINTO! HAI  TOTALIZZATO  ${counterPoints} PUNTI SU ${numberBlackList.length - 16}`
  }
}

// all clear param
function clear() {
  container.innerHTML ='';
  numberBlackList = [];
  counterPoints = 0;
  message.innerHTML = ''
}

// reset function
function reset(){
  clear();
  choiceLevel.append(genBtnStart());
}

