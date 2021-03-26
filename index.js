console.log("script connected")


const container = document.querySelector('.container')
grid()

function grid(i = 16, j = 16){
  for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
      const div = document.createElement('div')
      div.classList.add("pixel")
      div.textContent = "#"
      container.appendChild(div)
    }

  }
}



const pixels = document.querySelectorAll(".pixel")
pixels.forEach((pixel)=>{
  pixel.addEventListener("mouseenter",()=>{
    pixel.style.cssText = "background-color: black"
  })
})
