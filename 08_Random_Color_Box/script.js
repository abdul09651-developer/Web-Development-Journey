
let boxes = document.getElementsByClassName("box")

function Box1() {
    let r = Math.floor(Math.random()*254);
    let b = Math.floor(Math.random()*254);
    let g = Math.floor(Math.random()*254);
    
    boxes[0].style.backgroundColor=`rgb(${r},${b},${g})`;
}
Box1()

function Box2() {
    let r = Math.floor(Math.random()*254);
    let b = Math.floor(Math.random()*254);
    let g = Math.floor(Math.random()*254);
    
    boxes[1].style.backgroundColor=`rgb(${r},${b},${g})`;
}
Box2()

function Box3() {
    let r = Math.floor(Math.random()*254);
    let b = Math.floor(Math.random()*254);
    let g = Math.floor(Math.random()*254);
    
    boxes[2].style.backgroundColor=`rgb(${r},${b},${g})`;
}
Box3()

function Box4() {
    let r = Math.floor(Math.random()*254);
    let b = Math.floor(Math.random()*254);
    let g = Math.floor(Math.random()*254);
    
    boxes[3].style.backgroundColor=`rgb(${r},${b},${g})`;
}
Box4()

