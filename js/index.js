const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#nav-toggle");
const closeMenu = document.querySelector("#nav-close")

toggleMenu.addEventListener('click',function(){
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener("click",function () { 
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll(".nav__link");

function linkActive(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkActive))

const sections = document.querySelectorAll("section[id]");
console.log(sections);

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__item a[href*='+ sectionId +']').classList.add('active');
        }
        else{
            document.querySelector('.nav__item a[href*='+ sectionId +']').classList.remove('active');

        }
    })
}