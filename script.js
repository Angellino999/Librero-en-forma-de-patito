// =======================
// AOS ANIMATIONS
// =======================

AOS.init({

duration: 1200,
once: true,
offset: 100,
easing: "ease-out-cubic"

});

// =======================
// SWIPER 3D CAROUSEL
// =======================

const swiper = new Swiper(".mySwiper", {

effect: "coverflow",

grabCursor: true,

centeredSlides: true,

slidesPerView: "auto",

loop: true,

autoplay: {

delay: 3000,
disableOnInteraction: false,

},

coverflowEffect: {

rotate: 20,
stretch: 0,
depth: 200,
modifier: 1,
slideShadows: false,

},

breakpoints: {

320: {

slidesPerView: 1

},

768: {

slidesPerView: 2

},

1200: {

slidesPerView: 3

}

}

});

// =======================
// COUNTERS ANIMATION
// =======================

const counters =
document.querySelectorAll("[data-target]");

const startCounter = (counter) => {

const target =
parseInt(counter.getAttribute("data-target"));

let count = 0;

const increment =
target / 100;

const updateCounter = () => {

count += increment;

if(count < target){

counter.innerText =
Math.ceil(count) + "%";

requestAnimationFrame(updateCounter);

}else{

counter.innerText =
target + "%";

}

};

updateCounter();

};

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(
entry.target
);

observer.unobserve(
entry.target
);

}

});

},

{
threshold:0.5
}

);

counters.forEach(counter=>{

observer.observe(counter);

});

// =======================
// HERO PARALLAX
// =======================

window.addEventListener(
"scroll",
()=>{

const scroll =
window.pageYOffset;

const heroImage =
document.querySelector(
".hero-image img"
);

if(heroImage){

heroImage.style.transform =
`translateY(${scroll * 0.08}px)`;

}

}
);

// =======================
// CARD 3D EFFECT
// =======================

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y-centerY)/12);

const rotateY =
((centerX-x)/12);

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =

`
perspective(1000px)
rotateX(0)
rotateY(0)
translateY(0)
`;

});

});

// =======================
// SMOOTH APPEAR
// =======================

const fadeElements =
document.querySelectorAll(
".card,.stat,.price-card"
);

const fadeObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1;

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.1
}

);

fadeElements.forEach(el=>{

el.style.opacity = 0;
el.style.transform =
"translateY(50px)";
el.style.transition =
"all .8s ease";

fadeObserver.observe(el);

});

// =======================
// FLOATING BUTTON EFFECT
// =======================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener(
"mouseenter",
()=>{

btn.style.boxShadow =
"0 15px 35px rgba(184,156,231,.4)";

});

btn.addEventListener(
"mouseleave",
()=>{

btn.style.boxShadow =
"none";

});

});

// =======================
// PREMIUM LOADING EFFECT
// =======================

window.addEventListener(
"load",
()=>{

document.body.style.opacity = 1;

}
);

document.body.style.opacity = 0;
document.body.style.transition =
"opacity 1s ease";

// =======================
// NAVBAR FUTURA
// =======================
// Se activará cuando agreguemos menú
// en la siguiente mejora premium

console.log(
"Cuack Books Premium Loaded 🚀"
);