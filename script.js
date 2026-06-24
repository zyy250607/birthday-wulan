const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const giftSection = document.getElementById("giftSection");
const closingSection = document.getElementById("closingSection");

const typingText = document.getElementById("typingText");

const giftBtn = document.getElementById("giftBtn");
const secretMessage = document.getElementById("secretMessage");

/* LOVE LETTER */

const loveLetter = `

i don't know anything about ur past birth day gift,,
but i hope this is the first time you recieved
a letter like this,,

aku mau jadi orang pertama yang kasih love letter
buat kamuuu...

even aku bukan orang pertama yang jadi tempat nyaman kamuuu...

aku mau bilaangggg makasiihhh buat segalanyaaaaa,,

makasihh buat semua senyum sama canda tawaaa
selama kita sama samaaa,,

makasih karna udah bertahan sejauh ini
buat tetep samaa akuuu,,

maaff karna aku belum bisa jadiii pendamping terbaik
yang kamu punyaaa,,

aku belum bisa sepenuhnya mahamin kamuuu,,

dan aku belum bisa kasih kamu semua
keinginan kamuuu,,

tapi aku harapp suatu saattt aku bisa bikin kamuu
bener bener senyum bahagiaaa karnaaa adanyaa akuuu,,

bisa ngerasain rasa tenanggg
yang selalu kamu harap,,

dan setelah semuanyaaa aku harap kamu nerima
semua kebaikan yang kamu berhak untuk dapetin
dari orang orang disekitar kamuuu,,

tapii selama itu semua belum bisa terwujud,,

aku bakalan selalu jadii seenggaknyaa salah satuuu
yang bisaaa ngasih kamu kebaikan yang layaakkk,,

aku mau jadi setidaknya salah satu orang baiik
yang bisa selalu ada buat kamuuu 💙🦋

`;

/* TYPE EFFECT */

let index = 0;

function typeLetter() {

    if(index < loveLetter.length){

        typingText.innerHTML += loveLetter.charAt(index);

        index++;

        setTimeout(typeLetter, 22);
    }
}

/* SIMPLE CONFETTI */

function createConfetti(){

    for(let i = 0; i < 120; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.opacity = Math.random();

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/* START SURPRISE */

startBtn.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

    letterSection.classList.remove("hidden");
    gallerySection.classList.remove("hidden");
    giftSection.classList.remove("hidden");
    closingSection.classList.remove("hidden");

    startBtn.style.display = "none";

    createConfetti();

    typeLetter();

    letterSection.scrollIntoView({
        behavior:"smooth"
    });

});

/* SECRET GIFT */

giftBtn.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

    createConfetti();

});

/* EXTRA CONFETTI STYLE */

const style = document.createElement("style");

style.innerHTML = `

.confetti{

    position:fixed;
    top:-10px;

    width:12px;
    height:12px;

    background:#87CEEB;

    z-index:9999;

    animation:fall linear forwards;
}

@keyframes fall{

    to{

        transform:
        translateY(110vh)
        rotate(720deg);

    }

}
`;

document.head.appendChild(style);

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.classList.add("active");

        }

    });

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("hideLoader");

},2500);

});
