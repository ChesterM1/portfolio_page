const viewMenu = ()=>{
    const hamburger = document.querySelector('.burger'),
        close = document.querySelector('[data-clase]'),
        overlay = document.querySelector('.overlay'),
        menu = document.querySelector('.menu');

        hamburger.addEventListener('click', () =>{
            menu.classList.add('active');
        });

        menu.addEventListener('click', (e) =>{
            if(e.target === close || e.target === overlay){
                menu.classList.remove('active');
            }
            
        });


};
export default viewMenu;