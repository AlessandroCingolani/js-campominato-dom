const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');

reset();


function init(stage,n){
  for(let i = 1; i <= n ;i++) {
      const square = genSquare(i);
      square.classList.add(stage) 
      square.addEventListener('click',function(){
      console.log(this.id);
      this.classList.toggle('checked')
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


// reset function
function reset(){
  container.innerHTML ='';
  choiceLevel.append(genBtnStart());
}