//Hide-Show sidebar
const toggleNav=()=>{
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.content').classList.toggle('active');
    document.querySelectorAll('.navText').forEach((element)=>{
        element.classList.toggle('active');
    })
    
}

//Just works if it's responsive
const responsiveToggle=()=>{
    if(screen.availWidth<=667){
        return  toggleNav();
    }
}

//When a page loads
setTimeout(toggleNav,3000);

//Smooth scroll
var scroll = new SmoothScroll('a[href*="#home"]',{
    speed:400,
    speedAsDuration: true
});
var scroll = new SmoothScroll('a[href*="#about"]');
var scroll = new SmoothScroll('a[href*="#work"]');
var scroll = new SmoothScroll('a[href*="#contact"]');

// Scroll Reveal

let nodelist=document.querySelectorAll('.section')

ScrollReveal().reveal(nodelist, { 
    delay: 300,
    reset:true 
});