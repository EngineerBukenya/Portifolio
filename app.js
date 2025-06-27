// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable

//theme management

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

//check for saved theme preference or default to "dark"
const currentTheme = localStorage.getItem("theme")|| "dark"
body.setAttribute("data-theme",currentTheme)

themeToggle.addEventListener("click",()=>{
    const currentTheme = body.getAttribute("data-theme")
    const newTheme =currentTheme =="dark"? "light" :"dark"
    
    body.setAttribute("data-theme",newTheme)
    localStorage.setItem("theme",newTheme)

    //Animate theme toggle
    gsap.to(themeToggle,{
    scale:0.9,
    duration: 0.3,
    yoyo:true,
    repeat:1,
    ease: "power2.inOut",
})
})

//Mobile Menu Managment

const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", ()=>{
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")


    //prevent body from scrolling when menu is open
    if (mobileMenu.classList.contains("active")){
        body.style.overflow= "hidden"
    }else{
        body.style.overflow=""
    }
})

//Loading Animation
    const loader =document.querySelector(".loader")
    const loaderText =document.querySelector(".loader-text")
    const loaderProgress= document.querySelector(".loader-progress")
function initLoader() {
    
    
    //animation loader text
    gsap.to(loaderText, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
    })
    //animation for the width of the progress bar
gsap.to(loaderProgress, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete:() => {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.7,
            onComplete: ()=> {
             loader.style.display = "none"
             initAnimations()   
            }
        })
    }
})
}


//initial loader on page
window.addEventListener("load", initLoader)

//Custom cursor (only on desktop)
if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,});
        gsap.to(cursorFollower, {
            x: e.clientX - 20,
            y: e.clientY - 20,
            duration: 0.2,
});
        });

    
}
//intialize all animations

function initAnimations() {
    //Navigation
    gsap.to("nav", {
        y: 0,
        duration: 1,
        ease: "power3.out",
    })

    //hero Animation
    const heroT1 = gsap.timeline()
    heroT1
    .to(".hero-title", {
        opacity:1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
    })
    .to(".hero-subtitle", {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power.out",
    }, "-=0.5")
    .to(".hero-description", {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power.out",  
    }, "-=0.3")
    .to(".cta-button", {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.8,
        ease: "power.out",
    }, "-=0.3")
}
  