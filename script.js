var h1 = document.querySelector("#head1");


var hs = document.querySelectorAll("h1");

hs.forEach(function(det){
    var spittedtext = det.textContent.split("");
    var clutter = ""
    spittedtext.forEach(function(e){
        clutter+= `<span>${e}</span>`
    })
    det.innerHTML = clutter;
    det.addEventListener("mouseenter",function(){
        gsap.to("#head1 span",{
            y : -180,
            stagger:{
                amount:0.4,
            }
        })
    })
    det.addEventListener("mouseleave",function(){
        gsap.to("#head1 span",{
            y : 0,
            stagger:{
                amount:0.4,
            }
        })
    })
    det.addEventListener("mouseenter",function(){
        gsap.to("#head2 span",{
            y : -180,
            stagger:{
                amount:0.3,
            }
        })
    })
    det.addEventListener("mouseleave",function(){
        gsap.to("#head2 span",{
            y : 0,
            stagger:{
                amount:0.3,
            }
        })
    })
})
