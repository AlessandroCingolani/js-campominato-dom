const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');
let counterPoints = 0;
let numberBlackList = [];


reset();
console.log(numberBlackList);


function init(stage,n){
  for(let i = 1; i <= n ;i++) {
      let square = genSquare(uniqueRandomNumber(1,n));
      square.classList.add(stage)  
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

// funciot for clicked square 
function clickedCheck(){
  if(this.id <= 16 ){
    this.classList.add('bomb')
    console.log(this.id);
  }else{
    this.classList.add('checked')
    this.removeEventListener('click',clickedCheck)
    counterPoints++;
    console.log(counterPoints);
    console.log(this.id);
  }
  win(numberBlackList.length,16);
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

//win codnition
function win(n,bomb) {
  if (counterPoints === (n - bomb)) {
    console.log('YOU WIN');
  }
}

// all clear param
function clear() {
  container.innerHTML ='';
  numberBlackList = [];
  counterPoints = 0;
}

// reset function
function reset(){
  clear();
  choiceLevel.append(genBtnStart());
}
