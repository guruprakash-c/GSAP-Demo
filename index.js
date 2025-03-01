var box = document.querySelector('.box'),
    circle = document.querySelector('.circle');
gsap.to([circle],{
    x: 20,
    y: 10,
    xPercent: 300,
    yPercent: 400,
    rotation: 360,
    scale: 7,
    opacity: .5,
    transformOrigin: "45% 50%",
    rotationX: 35,
    rotationy: 75,
    duration: 3,
    skewY: 34,
    skewX: 120,
});
gsap.to([box],{
    x: '1vw',
    y: '50mm',
    scaleX:-5,
    scaleY:-10,
    duration: 4,
});