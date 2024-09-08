const indicartor = document.querySelector(".scroll-indicator .progress");
console.log(indicartor);
const scrollheight =
document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scroll(){
    let scrolltop = document.documentElement.scrollTop;
    let scrolled = (scrolltop / scrollheight) * 100;
    // console.log(scrolled);
    
    indicartor.style.width = `${scrolled}%`;
}


window.addEventListener('scroll',scroll);
