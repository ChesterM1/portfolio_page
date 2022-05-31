
const skills = ()=>{
   const insert =  document.querySelectorAll('.skills-type__interest'),
        bg = document.querySelectorAll('.skills-type__bg');

        insert.forEach((item, i )=>{
            bg[i].style.width = item.textContent;
        });
    
}

export default skills;