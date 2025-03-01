let circle = document.querySelector('.box');

function intro(){
    let t1 = gsap.timeline();
    t1.to(circle, { duration: 1, y: 200 });
    t1.to(circle, { duration: 1, x: 200 })
    t1.to(circle, { duration: 1, y: 0 })
    t1.to(circle, { duration: 1, x: 0,rotation: 360, })
}
function middle(){
    let t1 = gsap.timeline();
    t1.to(circle, { duration: 1, backgroundColor:'purple', y: 200 });
    t1.to(circle, { duration: 1, backgroundColor:'purple', x: 200 })
    t1.to(circle, { duration: 1, backgroundColor:'purple', y: 0,rotation: 360, })
    t1.to(circle, { duration: 1, backgroundColor:'purple', x: 0 })
}
function outro(){
    let t1 = gsap.timeline();
    t1.to(circle, { duration: 1, backgroundColor:'lime', y: 200});
    t1.to(circle, { duration: 1, backgroundColor:'lime', x: 200 })
    t1.to(circle, { duration: 1, backgroundColor:'lime', y: 0 })
    t1.to(circle, { duration: 1, backgroundColor:'lime', x: 0,rotation: 360, })
}
let master = gsap.timeline();

master.add(intro)
      .add(middle)  
      .add(outro)   