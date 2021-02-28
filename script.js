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
