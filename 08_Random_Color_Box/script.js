
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor() {
    let r = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    
    return `rgb(${r},${b},${g})`
}

Array.from(boxes).forEach(e=>{
    // console.log(e)
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})

