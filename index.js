console.log("script connected")


const container = document.querySelector('.container')

grid()
sketch()
function grid(rows = 16, cols = 16){
  document.querySelector('.container').style.gridTemplateColumns = `repeat(${rows}, 1fr)`
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      const div = document.createElement('div')
      div.classList.add("pixel")
      div.textContent = ""
      container.appendChild(div)
    }

  }
}


const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
  container.innerHTML ='' //erase last grid
  while (true){
    side = prompt("how many squares per side for your new grid?")
    if (side > 100){
      alert('enter a value under 100')
    }else{
      break
    }

  }

  grid(side,side)
  sketch()//had to include in here because sketch stopped working after clearing
})


function sketch(){
  const pixels = document.querySelectorAll(".pixel")
  pixels.forEach((pixel)=>{
    pixel.addEventListener("mouseenter",()=>{
      pixel.style.backgroundColor = randColor()
    })
  })
}

function randColor(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  randomColor = '#'+randomColor
  return randomColor
}
