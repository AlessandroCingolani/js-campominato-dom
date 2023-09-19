const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');
let numberBlackList = [];
 

reset();


function init(stage,n){
  for(let i = 1; i <= n ;i++) {
      let square = genSquare(getRandomNumber(1,n));
      square.classList.add(stage) 
      square.addEventListener('click',function(){
        if(this.id <= 15 ){
          this.classList.add('bomb')
        }else{
          this.classList.add('checked')
        }
        console.log(this.id);
       
    });
    
    container.append(square);
  }
}




// generator start btn
function genBtnStart (){
  const btn = document.createElement('button');
  btn.className = 'btn-play'
  btn.innerHTML = 'Start';

  btn.addEventListener('click',function(){
    container.innerHTML = '';
    if(chooseLevel.value === 'easy'){
      init('easy',100)
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
  return newSquare;
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

// reset function
function reset(){
  container.innerHTML ='';
  choiceLevel.append(genBtnStart());
}