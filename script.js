

const sliderContainer = document.getElementById('slider-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const slideUrls = [
        'assets/Pic2.jpg',
    'assets/Pic3.jpg',
    'assets/Pic1.jpg',
    'assets/Pic4.jpg',
    'assets/Pic5.jpg',
    'assets/Pic6.jpg'

];

let currentIndex = 0;
let allSlides = []; 

slideUrls.forEach((url, index) => {
    let li = document.createElement('li');
    li.innerHTML = `<img src="${url}" alt="Slider Image ${index + 1}" class="w-full h-auto object-cover rounded-xl transition-opacity duration-500 ease-in-out">`;
    li.classList.add('slide'); 

    if (index !== 0) {
        li.style.display = 'none';
    }
    sliderContainer.appendChild(li);
    allSlides.push(li);
});

function showSlide(index) {
    allSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    allSlides[index].style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allSlides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % allSlides.length;
    showSlide(currentIndex);
}, 5000); 




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