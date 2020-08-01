const nav = document.querySelector('nav');



nav.setAttribute('class','flex fixed');
const logo = document.createElement('h1');
logo.setAttribute('class','logo');
logo.innerHTML = 'LOGO';
const menu_container = document.createElement('div');
menu_container.setAttribute('class','menu flex');
const menu_btn = document.createElement('div');
menu_btn.setAttribute('class','menu_btn col flex');


menu_container.appendChild(menu_btn);
nav.appendChild(logo);
nav.appendChild(menu_container);




for( let i=0; i<3;i++){
  const i = document.createElement('i');
  
  menu_btn.appendChild(i);
  
}




const menu_bars = document.querySelectorAll('.menu_btn i');




const detect = document.createElement('div');
detect.setAttribute('class','detect');

const navOptions = {
    root: null,
    rootMargin: "20px"
  };

const navObserver = new IntersectionObserver(function(
    entries,
    navObserver){
      entries.forEach(entry =>{
        let scrollPosition = window.pageYOffset;
        console.log(scrollPosition);
        if(!entry.isIntersecting && scrollPosition<100){
            nav.classList.remove('solid_nav');
            
            logo.classList.remove('solid_logo');
            menu_bars.forEach(function(btn){
              btn.classList.remove('solid_btn');
            })
            
            

        } else{
            nav.classList.add('solid_nav');
            
            logo.classList.add('solid_logo');
            menu_bars.forEach(function(btn){
              btn.classList.add('solid_btn');
            })
            
            
        }
      })
  },navOptions);

const b = document.querySelector('body');
b.appendChild(nav);
b.appendChild(detect);


navObserver.observe(detect);