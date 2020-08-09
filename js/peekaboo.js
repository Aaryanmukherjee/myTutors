const peeks = document.querySelectorAll('.peek');
const peekOptions = {
    root: null,
    rootMargin: "-100px",
    
  };
peeks.forEach(function(peek){

    const eventsObserver = new IntersectionObserver(function(
      entries,
      eventsObserver){
        entries.forEach(entry =>{
        if(!entry.isIntersecting ){
            
                peek.classList.remove('boo')
            
          } else{
              
            
                peek.classList.add('boo')
            
          }
         
      })
    },peekOptions);

    eventsObserver.observe(peek);

    
});  
