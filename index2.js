let circle = document.querySelector('.circle');
gsap.to(circle,{
    duration: 2,
    x: 100,
    repeat: 2,
    yoyo: true,
    delay: 1,
    onComplete: () =>{
        alert("Completed");
    }
})