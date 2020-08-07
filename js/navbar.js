const nav = document.querySelector('nav');



nav.setAttribute('class','flex fixed');
const logo = document.createElement('h1');
const logo_link = document.createElement('a');
logo_link.setAttribute('href','./index.html')
logo.setAttribute('class','logo');
logo.innerHTML = 'My Tutors';
logo_link.appendChild(logo);
const menu_container = document.createElement('div');
menu_container.setAttribute('class','menu flex');
const menu_btn = document.createElement('div');
menu_btn.setAttribute('class','menu_btn col flex');
const menu_tag = document.createElement('h3');
menu_tag.innerHTML = 'Menu'

menu_container.appendChild(menu_tag);
menu_container.appendChild(menu_btn);

nav.appendChild(logo_link);
nav.appendChild(menu_container);



let numbers = ['one','two','three'];
let menu_clicked = false;
let active = false;
for( let j=0; j<3;j++){
  const i = document.createElement('i');
  i.setAttribute('id',numbers[j]+'bar');
  
  menu_btn.appendChild(i);
  
}

function overMenu(){
  if(menu_clicked===false){
    menu_btn.classList.add('menu_hover');
    menu_container.classList.add('menu_see_through')
  }else{
    menu_btn.classList.remove('menu_hover')
  }
  
}
function leaveMenu(){
  menu_btn.classList.remove('menu_hover')
  
    menu_container.classList.remove('menu_see_through');
  
 
}
const top_bar = document.getElementById('onebar');
const mid_bar = document.getElementById('twobar');
const bottom_bar = document.getElementById('threebar');
let transition =false;
function menuAnimation(){
  
    if(active===false){
      
      menu_clicked = true;
      setTimeout(()=>{
        menu_btn.classList.add('shrink');
        menu_tag.innerHTML = 'Close';
      },50);
      
      setTimeout(()=>{
        menu_bars.forEach(function(bar){
          bar.classList.add('absolute')
        });
        top_bar.classList.add('top_bar');
        mid_bar.classList.add('mid_bar')
        bottom_bar.classList.add('bottom_bar')
        menu_clicked = false;
        
      },100)
      
    }
    else{
      menu_clicked = true;
      
      setTimeout(()=>{
        menu_bars.forEach(function(bar){
          bar.classList.remove('absolute')
        });
        menu_btn.classList.remove('shrink');
        
      },200);
      
      setTimeout(()=>{
        
        top_bar.classList.remove('top_bar');
        mid_bar.classList.remove('mid_bar')
        bottom_bar.classList.remove('bottom_bar')
        
        
      },50)
      setTimeout(()=>{
        menu_tag.innerHTML = 'Menu';
        menu_clicked = false;
      },400)
    }
    setTimeout(()=>{
      if(menu_tag.innerHTML === 'Menu'){
        active = false;
        menu_bars.forEach(function(bar){
          bar.classList.remove('absolute')
        });
        menu_btn.classList.remove('shrink');
        top_bar.classList.remove('top_bar');
        mid_bar.classList.remove('mid_bar')
        bottom_bar.classList.remove('bottom_bar')
        document.body.style.overflow='';
        

      }
    },600)
  
  

}

menu_container.addEventListener('click',menuAnimation);
menu_container.addEventListener('mouseover',overMenu);
menu_container.addEventListener('mouseleave',leaveMenu);

const nav_paths = ['./index.html','./courses.html','./pricing.html','https://forms.gle/4iR8ndJaN2JYiZ778'];
const nav_link_titles = ['Home', 'Courses', 'Pricing', 'Find Tutoring'];
const nav_page = document.createElement('div');
nav_page.setAttribute('class','nav_page flex col');
for(let i =0;i<nav_paths.length;i++){
  const anchor = document.createElement('a');
  anchor.setAttribute('href',nav_paths[i])
  const nav_link = document.createElement('h2');
  nav_link.innerHTML = nav_link_titles[i];
  nav_link.setAttribute('class','nav_link');
  anchor.appendChild(nav_link);
  anchor.addEventListener('click',()=>{
    removeNav()
  })
  nav_page.appendChild(anchor)
}
document.body.appendChild(nav_page);
const nav_links = document.querySelectorAll('.nav_link');






function removeNav(){
  let scrollPosition = window.pageYOffset;
  document.body.style.overflow='';
    let increment = 0;
    nav_links.forEach(function(link){
      setTimeout(()=>{
        link.classList.remove('active_nav_link');
      },increment);
    increment+=100;
    })
    setTimeout(()=>{
      nav_page.classList.remove('nav_active');
      if(scrollPosition<100){
        
        menu_tag.classList.remove('solid_logo');
        logo.classList.remove('solid_logo');
        menu_bars.forEach(function(btn){
          btn.classList.remove('solid_btn');
        })
      }else{
        nav.classList.add('solid_nav');
      }

    },increment-100)
    active = false;
    setTimeout(()=>{
      menu_bars.forEach(function(bar){
        bar.classList.remove('absolute')
      });
      menu_btn.classList.remove('shrink');
      
    },200);
    const top_bar = document.getElementById('onebar');
    const mid_bar = document.getElementById('twobar');
    const bottom_bar = document.getElementById('threebar');
    setTimeout(()=>{
      
      top_bar.classList.remove('top_bar');
      mid_bar.classList.remove('mid_bar')
      bottom_bar.classList.remove('bottom_bar')
      
      
    },50)
    setTimeout(()=>{
      menu_tag.innerHTML = 'Menu';
      menu_clicked = false;
    },400)
    
    
    




}

menu_container.addEventListener('click',function(){

  
  if(active=== false){
    document.body.style.overflow='hidden';
    
    nav.classList.remove('solid_nav');
    menu_tag.classList.add('solid_logo');
    logo.classList.add('solid_logo');
    menu_bars.forEach(function(btn){
      btn.classList.add('solid_btn');
    })
    nav_page.classList.add('nav_active');



  let increment = 50;
  setTimeout(()=>{
    nav_links.forEach(function(link){
    setTimeout(()=>{
      link.classList.add('active_nav_link');
    },increment);
    increment+=100;
    })
  },100);
    
    active = true;
  }
  else{
    removeNav()
  }
  
  
})








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
        
        if(!entry.isIntersecting && scrollPosition<100){
            nav.classList.remove('solid_nav');
            
            logo.classList.remove('solid_logo');
            menu_tag.classList.remove('solid_logo');
            menu_bars.forEach(function(btn){
              btn.classList.remove('solid_btn');
            })
            
            

        } else{
            nav.classList.add('solid_nav');
            menu_tag.classList.add('solid_logo');
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