let currentPage = 1;

function unlock(){

const code =
document.getElementById("passcode").value;

if(code === "1107"){

showPage(2);

}
else{

alert("Wrong Passcode ❤️");

}

}

function showPage(page){

document
.querySelector(".active")
.classList.remove("active");

document
.getElementById("page"+page)
.classList.add("active");

currentPage = page;

}

function nextPage(){

showPage(currentPage + 1);

}

function blowCandles(){

document
.querySelectorAll(".flame")
.forEach(f=>f.style.display="none");

createConfetti();

setTimeout(()=>{

nextPage();

},2000);

}

function createConfetti(){

for(let i=0;i<100;i++){

const confetti =
document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="absolute";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize="30px";

document.body.appendChild(confetti);

let pos=0;

const drop=setInterval(()=>{

pos+=5;

confetti.style.top=pos+"px";

if(pos>window.innerHeight){

clearInterval(drop);
confetti.remove();

}

},20);

}

}

setInterval(()=>{

const heart =
document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);
