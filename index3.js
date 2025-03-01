let container = document.querySelector('.container');
function createCircle(){
    let circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
}

for (let index = 0; index < 100; index++) {
    createCircle();   
}

gsap.to('.circle',{
    duration: 1,
    scale: .1,
    opacity: 0,
    lazy:true,
    y: 40,
    ease: parametric,
    stagger: {
        amount: 3,
        grid: [10,10],
        repeat: -1,
        yoyo: true,
        from: 'random',
        ease: "power.in"
    },
})

function parametric(progress){
    var sqt = progress * progress
    return ( sqt / (2.0 * (sqt - progress) + 1.0) )
}