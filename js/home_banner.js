
window.addEventListener('scroll' , function(){
    const parallax = document.querySelector('.home_banner img.background')
    let scrollPosition = window.pageYOffset;
    
    if(scrollPosition<200){
      parallax.style.transform = 'translateY(' +  scrollPosition*.4+ 'px)';
    }
  })
  
  