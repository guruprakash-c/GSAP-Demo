let circle = document.querySelector('.box');
let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let resumeBtn = document.querySelector('#resume');
let seekBtn = document.querySelector('#seek');
let reverseBtn = document.querySelector('#reverse');
let restartBtn = document.querySelector('#restart');
let outroBtn = document.querySelector('#outroBtn');
let label = document.querySelector('#label');

function intro(){
    let t1 = gsap.timeline();
    t1.to(circle, { duration: 1, y: 200 });
    t1.to(circle, { duration: 1, x: 200 }, "+=1")
    t1.to(circle, { duration: 1, y: 0 })
    t1.to(circle, { duration: 1, x: 0,rotation: 360, })
}
function middle(){
    let t1 = gsap.timeline({
        defaults: {
            ease: "steps(1)",
            duration: 2
        }
    });
    t1.to(circle, { backgroundColor:'purple', y: 200 });
    t1.to(circle, { backgroundColor:'purple', x: 200 })
    t1.to(circle, { backgroundColor:'purple', y: 0,rotation: 360 })
    t1.to(circle, { backgroundColor:'purple', x: 0 })
}
function outro(){
    let t1 = gsap.timeline();
    t1.to(circle, { duration: 1, backgroundColor:'lime', y: 200});
    t1.to(circle, { duration: 1, backgroundColor:'lime', x: 200 })
    t1.to(circle, { duration: 1, backgroundColor:'lime', y: 0 })
    t1.to(circle, { duration: 1, backgroundColor:'lime', x: 0,rotation: 360, })
}
let master = gsap.timeline(
    { paused: true, 
      repeat: 2, 
      yoyo: true
    //   onRepeat: () =>{
    //     label.innerText = parseInt(label.innerText) + 1
    //   }
     }
);

master.add(intro,'intro')
      .add(middle,'middle')  
      .add(outro,'outro');

startBtn.addEventListener('click', () =>{
    master.play();
});
pauseBtn.addEventListener('click', () =>{
    master.pause();
});
resumeBtn.addEventListener('click', () =>{
    master.resume();
});
seekBtn.addEventListener('click', () =>{
    master.seek(2);
});
reverseBtn.addEventListener('click', () =>{
    master.reverse();
});
restartBtn.addEventListener('click', () =>{
    master.restart();
});
outroBtn.addEventListener('click', () =>{
    master.play('outro');
});
var updateLbl = () =>{
    let currLbl = master.currentLabel();
    label.innerText = currLbl;
}

master.eventCallback('onUpdate', updateLbl);