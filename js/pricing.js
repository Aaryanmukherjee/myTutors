const categories = document.querySelectorAll('tbody tr');

categories.forEach(function(row){
    let cells = row.children;
    row.addEventListener('mouseover',function(){

        row.classList.add('active');
    
    })
    row.addEventListener('mouseleave',function(){
        row.classList.remove('active');
    })
    
})