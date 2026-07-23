/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});


/* ==========================================
   SCROLL TO LETTER
========================================== */

function scrollToLetter(){

    document.getElementById("letter").scrollIntoView({

        behavior:"smooth"

    });

}


/* ==========================================
   TYPEWRITER
========================================== */

const message = `

There are no perfect words that can truly explain what you mean to me,

but I'll spend my whole life showing you.

You are the calm in my chaos,

the light in my darkest days,

and the reason I believe in love.

I don't always say it,

but I notice everything about you.

The little things you do,

the way you smile,

the way you get angry,

the way you blush,

the way you hold my hand.

Your presence makes ordinary moments feel extraordinary.

Thank you for being my safe place,

my biggest support,

and my greatest blessing.

No matter what life brings,

I'll choose you.

Today.

Tomorrow.

Always.

I love you more than words could ever say.

❤️

Forever Yours,

Neeraj

`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typewriter").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

setTimeout(typeWriter,2200);


/* ==========================================
   RELATIONSHIP TIMER

   CHANGE THIS DATE
========================================== */

const startDate = new Date("2025-05-07T00:00:00");


function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerText = days;

document.getElementById("hours").innerText = hours;

document.getElementById("minutes").innerText = minutes;

document.getElementById("seconds").innerText = seconds;

}

updateTimer();

setInterval(updateTimer,1000);


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "%";

heart.style.fontSize = (18 + Math.random()*30) + "px";

heart.style.animationDuration = (6 + Math.random()*6) + "s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,350);


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(

".photo,.card,.paper,.promises li"

).forEach(el=>{

observer.observe(el);

});


/* ==========================================
   MUSIC PLAYER
========================================== */

const musicBtn = document.getElementById("musicBtn");

const player = document.getElementById("musicPlayer");

musicBtn.onclick = ()=>{

player.classList.toggle("hidden");

};


/* ==========================================
   HEART CURSOR
========================================== */

document.addEventListener("mousemove",(e)=>{

if(Math.random()>.82){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="14px";

heart.style.color="#ff4d88";

heart.style.opacity="1";

heart.style.transition="all 1.2s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-40px)";

heart.style.opacity="0";

},10);

setTimeout(()=>{

heart.remove();

},1200);

}

});


/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*0.45+"px";

});


/* ==========================================
   PHOTO HOVER EFFECT
========================================== */

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("mousemove",(e)=>{

const rect=photo.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

photo.style.transform=

`rotate(${(x-rect.width/2)/40}deg)
translateY(-8px)`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="";

});

});


/* ==========================================
   END
========================================== */