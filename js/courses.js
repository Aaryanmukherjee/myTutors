const courses = {
    'mathemetics': false,
    'science': false,
    'history': false,
    'english': false,
    'foreign':false,
    'electives': false,
    'test': false,
}

const add_courses = (course_container,course_list)=>{
    for(let i =0;i<course_list.length; i++){
        const li = document.createElement('li');
        li.innerHTML=course_list[i];
        course_container.appendChild(li);
    }
}

const math_course_list = ['Algebra I/II',	
    'Geometry',
    'Accelerated Math',
    'Pre-Calculus',
    'Calculus AB/BC',	
    'Multivariable Calculus',
    'Differential Equations',	
    'Linear Algebra',	
    'Statistics',
    'AP Statistics'	];
const science_course_list = ['Investigative Science',	
    'Biology/Chemistry/Physics',	
    'AP Physics I',	
    'AP Biology/Chemistry',	
    'AP Physics 2/Physics C',	
    'AP Environmental Science',		];

const history_course_list = ['World History',	
    'AP World History',	
    'AP Human Geo',	
    'US History',	
    'AP US History',	
    'AP Micro/Macroeconomics',	
    'Economics'		];

const english_course_list = [	
    'English 9/10/11/12',	
    'AP English Language and Composition',		];

const foreign_course_list = ['Spanish 1/2',	
    'Honors Spanish 3',	
    'AP Spanish 4/5',		];

const elective_course_list = ['AP Seminar',	
    'AP Computer Science Principles',	
    'AP Java/Computer Science A',		];
const test_course_list = ['SAT Reading',	
    'SAT Writing',	
    'SAT Math',	
    'SAT Essay',	
    'ACT General' ,		
    'ACT Essay',	
    'SAT Subject Tests - Math Level 1 and 2',	
    'SAT Subject Tests - All Sciences',	
    'SAT Subject Tests - US/World History',	
    'SAT Subject Tests - Spanish, both versions',		];


const math_courses = document.createElement('ul');
const science_courses = document.createElement('ul');
const history_courses = document.createElement('ul');
const english_courses = document.createElement('ul');
const foreign_courses = document.createElement('ul');
const elective_courses = document.createElement('ul');
const test_courses = document.createElement('ul');



add_courses(math_courses,math_course_list);
add_courses(science_courses,science_course_list);
add_courses(history_courses,history_course_list);
add_courses(english_courses,english_course_list);
add_courses(foreign_courses,foreign_course_list);
add_courses(elective_courses,elective_course_list);
add_courses(test_courses,test_course_list);

const all_courses = [math_courses,
 science_courses, 
 history_courses, 
 english_courses,
 foreign_courses, 
 elective_courses, 
 test_courses];


function removeAllChildNodes(parent) {
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

const initial_message = document.getElementById('initial_message');
const clear = ()=>{
    course_btns.forEach(function(btn){
        btn.classList.remove('highlighted');
    })
    for(let i =0; i<all_courses.length;i++){
        all_courses[i].classList.remove('show');
    }
    initial_message.classList.remove('show');
}

const course_area = document.querySelector('.course_list');
course_btns = document.querySelectorAll('.courses_selector h3');
course_btns.forEach(function(btn){
    const index = btn.id;
    btn.addEventListener('click',function(){
        clear();
        btn.classList.add('highlighted');
        
        
        setTimeout(()=>{
            removeAllChildNodes(course_area);
            
                course_area.appendChild(all_courses[index]);
                setTimeout(()=>{
                    all_courses[index].classList.add('show');
                },100)
                
            

        },250) 
        

        
    })
})



