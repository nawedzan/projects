document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const flagsleft=document.querySelector('#flagsleft')
    let bombs=20;
    // console.log(grid);
    let width =10;
    let squares=[];
    let isGameOver=false;

    function createBoard(){
        flagsleft.innerHTML=bombs;
        const bombarray=Array(bombs).fill('bomb')
        var validarray=Array((width*width)-bombs).fill('valid');
         validarray=validarray.concat(bombarray);
        // validarray
        validarray=validarray.sort( () =>Math.random()-0.5);
        console.log(validarray)

        console.log(flagsleft.innerHTML)
        for(let i=0;i< width*width;i++){
            const square=document.createElement('div')
            square.classList.add('box')
            square.classList.add(validarray[i])
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square);

            square.addEventListener('click', ()=> {
                click(square)
              })
        
              //cntrl and left click
              square.addEventListener('contextmenu', function(e) {
                e.preventDefault();   // Prevent default context menu
                addFlag(square);
              });
        }

        for (let i = 0; i < squares.length; i++) {
          let total = 0
          const isLeftEdge = (i % width === 0)
          const isRightEdge = (i % width === width -1)
    
          if (squares[i].classList.contains('valid')) {
           
            if(isLeftEdge){
              if(i-10>0 && squares[i-10].classList.contains('bomb'))total++ 
              if( i-9>0  && squares[i-10+1].classList.contains('bomb'))total++ 
              if(  squares[i+1].classList.contains('bomb'))total++ 
              if( i+11<99 && squares[i+10+1].classList.contains('bomb'))total++ 
              if(i+10<99 && squares[i+10].classList.contains('bomb'))total++ 
            }
            else if(isRightEdge){
              if(i-10>0 && squares[i-10].classList.contains('bomb'))total++ 
              if( i-11>0 && squares[i-10-1].classList.contains('bomb'))total++ 
              if( squares[i-1].classList.contains('bomb'))total++ 
              if( i+9<99 && squares[i+10-1].classList.contains('bomb'))total++
              if(i+10<99 && squares[i+10].classList.contains('bomb'))total++
            }
            else{
              if(i-10>0 && squares[i-10].classList.contains('bomb'))total++ 
              if( i-9>0  && squares[i-10+1].classList.contains('bomb'))total++ 
              if(  squares[i+1].classList.contains('bomb'))total++ 
              if( i+11<99 && squares[i+10+1].classList.contains('bomb'))total++ 
              if(i+10<99 && squares[i+10].classList.contains('bomb'))total++ 
              if( i+9<99 && squares[i+10-1].classList.contains('bomb'))total++
              if( squares[i-1].classList.contains('bomb'))total++ 
              if( i-11>0 && squares[i-10-1].classList.contains('bomb'))total++ 
    
    
            }
            squares[i].setAttribute('data', total)
          }
        }
    }
    createBoard();
    
    function addFlag(square) {
      if (isGameOver) return
      if (!square.classList.contains('checked') && (flags < bombAmount)) {
        if (!square.classList.contains('flag')) {
          square.classList.add('flag')
          square.innerHTML = ' 🚩'
          flags ++
          flagsLeft.innerHTML = bombAmount- flags
          checkForWin()
        } else {
          square.classList.remove('flag')
          square.innerHTML = ''
          flags --
          flagsLeft.innerHTML = bombAmount- flags
        }
      }
    }
  
    //click on square actions
    function click(square) {
      let currentId = square.id
      if (isGameOver) return
      if (square.classList.contains('checked') || square.classList.contains('flag')) return
      if (square.classList.contains('bomb')) {
        gameOver(square)
      } else {
        let total = square.getAttribute('data')
        if (total !=0) {
          square.classList.add('checked')
          if (total == 1) square.classList.add('one')
          if (total == 2) square.classList.add('two')
          if (total == 3) square.classList.add('three')
          if (total == 4) square.classList.add('four')
          square.innerHTML = total
          return
        }
        checkSquare(square, currentId)
      }
      square.classList.add('checked')
    }
  
  
    //check neighboring squares once square is clicked
    function checkSquare(square, currentId) {
      const isLeftEdge = (currentId % width === 0)
      const isRightEdge = (currentId % width === width -1)
  
      setTimeout(() => {
        if (currentId > 0 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1].id
          //const newId = parseInt(currentId) - 1   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 9 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1 -width].id
          //const newId = parseInt(currentId) +1 -width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 10) {
          const newId = squares[parseInt(currentId -width)].id
          //const newId = parseInt(currentId) -width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 11 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1 -width].id
          //const newId = parseInt(currentId) -1 -width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 98 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1].id
          //const newId = parseInt(currentId) +1   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 90 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1 +width].id
          //const newId = parseInt(currentId) -1 +width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 88 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1 +width].id
          //const newId = parseInt(currentId) +1 +width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 89) {
          const newId = squares[parseInt(currentId) +width].id
          //const newId = parseInt(currentId) +width   ....refactor
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
      }, 10)
    }
  
    //game over
    function gameOver(square) {
      result.innerHTML = 'BOOM! Game Over!'
      isGameOver = true
  
      //show ALL the bombs
      squares.forEach(square => {
        if (square.classList.contains('bomb')) {
          square.innerHTML = '💣'
          square.classList.remove('bomb')
          square.classList.add('checked')
        }
      })
    }
  
    //check for win
    function checkForWin() {
      ///simplified win argument
    let matches = 0
  
      for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
          matches ++
        }
        if (matches === bombAmount) {
          result.innerHTML = 'YOU WIN!'
          isGameOver = true
        }
      }
    }
})
