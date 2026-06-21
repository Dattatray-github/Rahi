let currentPage = 1;

let enteredPin = "";

function pressKey(value){

    if(enteredPin.length >= 4){
        return;
    }

    enteredPin += value;

    updatePinBoxes();
}

function updatePinBoxes(){

    document.getElementById("box1").innerHTML =
        enteredPin[0] || "";

    document.getElementById("box2").innerHTML =
        enteredPin[1] || "";

    document.getElementById("box3").innerHTML =
        enteredPin[2] || "";

    document.getElementById("box4").innerHTML =
        enteredPin[3] || "";
}

function clearPin(){

    enteredPin = "";
    updatePinBoxes();
}

function submitPin(){

    const correctPin = "2302";

    if(enteredPin === correctPin){

        createConfetti();

        setTimeout(() => {
            showPage(2);
        }, 1000);

    }else{

        alert("Wrong Passcode ❤️");

        clearPin();
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
