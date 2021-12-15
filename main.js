const icons=document.querySelectorAll('.section-1-icons i');
const sizeOfIcons=icons.length;
let i=1;
/* navigation bar */
const menu=document.querySelector('.menu');
const navbar=document.querySelector('.navbar');
menu.addEventListener('click',function(){
    navbar.classList.toggle('active');
});
/*Nav bar done*/ 

setInterval(function(){
    i++;
    const icon=document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');
    if(i>sizeOfIcons){
        icons[0].classList.add('change');
        i=1;
    }
    else{
        icon.nextElementSibling.classList.add('change');
    }
    
},1000);