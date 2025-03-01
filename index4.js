let container = document.querySelector('.container');
let btnReset = document.querySelector('#btnReset');
let box = document.querySelector('.box'),
    circle = document.querySelector('.circle');

function createCircle(){
    let circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
}

function createBox(){
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

for (let index = 0; index < 100; index++) {
    if(index % 2 == 0) createBox() 
    else createCircle();   
}

function setScale(){
    let max = 2,
        min= .1;
    return Math.floor((Math.random())*(max-min+1))+min
}
gsap.defaults({
 duration: 1
});
let context = gsap.context(() => {
    gsap.fromTo('.box',{
        scale: .7,
        opacity: .4,
        lazy:true,
        x: 10,
        ease: parametric,
        repeat: -1,
        yoyo: true,
    },{
        scale:.3,
        opacity: 1,
        ease: parametric,
        repeat: -1,
        yoyo: true,
        onStart: () =>{
            console.log(`Is Box tweening ${gsap.isTweening('.box')}`)
        }
    });
    gsap.to('.circle',{
        duration: 1,
        scale: 1,
        opacity: 0,
        x: 20,
        ease: parametric,
        repeat: -1,
        yoyo: true,
        onStart: () =>{
            console.log(`Is Circle tweening ${gsap.isTweening('.circle')}`)
        }
    });
});

function parametric(progress){
    var sqt = progress * progress
    return ( sqt / (2.0 * (sqt - progress) + 1.0) )
}
btnReset.addEventListener('click', () => {
// context.kill();
context.revert();
});