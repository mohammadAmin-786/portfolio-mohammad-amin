  const menuOpen = document.getElementById('menu-open');//bars
  const menuClose = document.getElementById('menu-close');//cross
  const menuList = document.getElementById('menu-list');

  
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen; 

            if(isOpen){
                menuClose.classList.add('visible');
                menuClose.classList.remove('hidden');

                
            menuList.classList.add('visible');
            menuList.classList.remove('hidden');

            menuOpen.classList.add('hidden');
                menuOpen.classList.remove('visible');
            }
            else{
                menuClose.classList.remove('visible');
                 menuClose.classList.add('hidden');

                menuOpen.classList.add('visible');
                menuOpen.classList.remove('hidden');

                menuList.classList.remove('visible');
                menuList.classList.add('hidden');
            }
        }
        

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click',toggleMenu);