const next = document.querySelector('.next');
const back = document.querySelector('.back');

const selection = document.querySelector('div.testimonial_selection');
const selector_list =[];

let index = 0;
const testimonial_list = [
    `Michael Chen’s tutoring is ten out of ten and I definitely recommend him to anyone looking for extra help and further comprehension. During our tutoring sessions, we were able to complete everything I wanted done and more. Our tutoring sessions were not just about finishing homework, but were also about understanding some of the class’s most important concepts. Even outside tutoring sessions, Michael was always quick to answer my messages when I had further questions. Michael is truly the best and anyone that has received help from him can confirm that. 
    <br><br> <span class = 'bold'>-Kristen N.</span>`,
    `I haven’t struggled more in my life than in my junior year. I had to go in for tutoring almost every day for Spanish, but it never helped since so many people needed tutoring too. Then, Youssef came to help me one on one. Our once a week sessions gave me enough understanding to succeed and suddenly my grades and test scores went up. He’s not only good at Spanish but math too. I don’t know how I would've gotten through my junior year without Youssef.
    <br><br> <span class = 'bold'>-Jasmine F.</span>`,
    'Raunak a GANG'];
const testimonial_text = document.querySelector('div.testimonial_text');
testimonial_text.innerHTML = testimonial_list[index];

for(let i = 0; i<testimonial_list.length;i++){
    const selector = document.createElement('div');
    selector.setAttribute('class','selector');
    if(i===0){
        selector.classList.add('selected');
    }
    selector_list.push(selector);
    selection.appendChild(selector);
    selector.addEventListener('click',()=>{
        applySelectorFill(i)
        const select_index = i;
        index = select_index;
        
        testimonial_text.classList.add('disappear');
        setTimeout(()=>{
            testimonial_text.innerHTML = testimonial_list[index];
            testimonial_text.classList.remove('disappear');
        },500);
    })
}
const newIndex = (i)=>{
    
    if(i===testimonial_list.length){
        return 0;
    }
    else if(i===-1){
        return (testimonial_list.length - 1);
    }else{
        
            return (i);
        
    }
}

const applySelectorFill = (i) =>{
    const all_selectors = document.querySelectorAll('.selector');
        all_selectors.forEach((sel)=>{
            sel.classList.remove('selected');
    })
    selector_list[i].classList.add('selected');
}

next.addEventListener('click',()=>{
    index+=1;
    index = newIndex(index);
    testimonial_text.classList.add('disappear');
    applySelectorFill(index);
    setTimeout(()=>{
        testimonial_text.innerHTML = testimonial_list[index];
        testimonial_text.classList.remove('disappear');
    },500);
})

back.addEventListener('click',()=>{
    index -= 1;
    index = newIndex(index);
    testimonial_text.classList.add('disappear');
    applySelectorFill(index);
    setTimeout(()=>{
        testimonial_text.innerHTML = testimonial_list[index];
        testimonial_text.classList.remove('disappear');
    },500);
})








