let dice = document.querySelector(".sprite");
let playercolor = document.querySelector(".heading");
let payer1color = document.querySelector(".player1");
let payer2color = document.querySelector(".player2");

let dicePositions = {
  1: { X: "0px", Y: "0px" },
  2: { X: "-170px", Y: "0px" },
  3: { X: "-340px", Y: "0px" },
  4: { X: "0px", Y: "-170px" },
  5: { X: "-170px", Y: "-170px" },
  6: { X: "-340px", Y: "-170px" },
};
let scores=[0,0];

function oneSelector(selectorvalue,assignvalue){
  document.getElementById(selectorvalue).textContent=assignvalue;
}

// ====================switch condition===============
function switchplayer(){
  oneSelector(`current--${activePlayer}`,0)
  playercurrentscore=0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  setActiveBg(activePlayer);
}

function setActiveBg(activePlayer) {
  const prevPlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--${prevPlayer}`).classList.remove('active');
  document.querySelector(`.player--${activePlayer}`).classList.add('active');
}
//  =================DICE VALUE AND LOGIC OF GAME================
let activePlayer=0;
let playercurrentscore = 0;
function positionDice(){
  const num = Math.floor(Math.random() * 6 + 1);
  let posx = dicePositions[num].X;
  let posy = dicePositions[num].Y;
  dice.style.backgroundPositionX = posx;
  dice.style.backgroundPositionY = posy;
  if(num!==1){
    playercurrentscore+=num;
    oneSelector(`current--${activePlayer}`,playercurrentscore)
    
  }
  else{
    switchplayer();
  }
}
// activePlayer = !activePlayer;
function rollbutton() {
  positionDice();
}

// ==========================End==================

// ===================HOLD BUTTON==================


function clickholdbutton(){
  scores[activePlayer]+=playercurrentscore;
  oneSelector(`winner--${activePlayer}`,scores[activePlayer])
  if(scores[activePlayer]>=100){
    document.querySelector(`.winnerSurprise--${activePlayer}`).style.visibility="visible";
    startit();
    stopit();
    setActiveBg(activePlayer);
  }else{
  switchplayer();
  }
}

function holdbutton(){
  clickholdbutton();
}
// =============================end===================
// ================NEW GAME==========================
function zerovalue(){
  console.log("zerovalie");
  scores=[0,0];
  stopit();
  document.querySelector(".zero").textContent=0;
  document.querySelector(".zero2").textContent=0;
  document.getElementById("winner--0").textContent=0;
  document.getElementById("winner--1").textContent=0;
  setActiveBg(0);
  document.querySelector(`.player--${0}`).style.color="black";
  document.querySelector(`.player--${1}`).style.color="black";
  document.querySelector(`.winnerSurprise--${activePlayer}`).style.visibility="hidden";
}
function newgame(){
  zerovalue();
}
// =========================END NEW GAME=======================


