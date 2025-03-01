let box = document.querySelector('.box');
let circle = document.querySelector('.circle');
let label = document.querySelector('.label');
let bkPt = 600;
let mm = gsap.matchMedia();

gsap.set(box, {
    x: innerWidth/2,
    y: innerHeight/2
});

gsap.set(circle, {
    x: innerWidth/2,
    y: innerHeight/4
});

mm.add({
    isDesktop: `(max-width: ${bkPt - 1}px)`,
    isMobile: `(min-width: ${bkPt}px)`
},(context) => {
    let { isDesktop, isMobile } = context.conditions;
    gsap.to(box,{
        scale: isDesktop ? 5 : .5,
        x: innerWidth/2,
        y: isDesktop ?  innerHeight/8 : innerHeight/4
    })
    gsap.to(circle,{
        scale: isMobile ? 5 : .5,
        x: innerWidth/2,
        y: isMobile ? innerHeight/4 : innerHeight/8
    })
    return () =>{
        label.innerText = isDesktop ? 'Desktop' : 'Mobile';
    }
});