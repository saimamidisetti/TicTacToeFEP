let cell1 = document.getElementById("block1");
let cell2 = document.getElementById("block2");
let cell3 = document.getElementById("block3");
let cell4 = document.getElementById("block4");
let cell5 = document.getElementById("block5");
let cell6 = document.getElementById("block6");
let cell7 = document.getElementById("block7");
let cell8 = document.getElementById("block8");
let cell9 = document.getElementById("block9");
let newBtn = document.getElementById("newGameBtn");
let resetBtn = document.getElementById("resetGameBtn");
let winner = document.getElementById("winnerName");
let congrats = document.getElementById("greetings");
let moves = 0;
let chance = false;
let locks = {
    lock1:true,
    lock2:true,
    lock3:true,
    lock4:true,
    lock5:true,
    lock6:true,
    lock7:true,
    lock8:true,
    lock9:true,
}
console.log("hello")
let oChoice = [];
let xChoice = [];
let winningPosibilities = [[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7], [1,4,7],
[2,5,8], [3,6,9]];
let gameMode = true;

//Winning Logic
function winCheck(n,choices){
    let match = 0
    for(let j = 0; j< n.length;j++){
        for(let k = 0; k < choices.length; k++ ){
            if(parseInt(n[j]) === parseInt(choices[k])){
                match += 1;
                
            }
        }
    }
    if(match === 3){
        return true;
    }else{
        return false;
    }

}

//resetgame
function reset(){
    cell1.textContent = "";
    cell2.textContent = "";
    cell3.textContent = "";
    cell4.textContent = "";
    cell5.textContent = "";
    cell6.textContent = "";
    cell7.textContent = "";
    cell8.textContent = "";
    cell9.textContent = "";
    chance = false;
    moves = 0;
    locks.lock1 = true
    locks.lock2 = true
    locks.lock3 = true
    locks.lock4 = true
    locks.lock5 = true
    locks.lock6 = true
    locks.lock7 = true
    locks.lock8 = true
    locks.lock9 = true
    gameMode = true;
    oChoice = [];
    xChoice = [];
    congrats.classList.add("hidden");
    newBtn.classList.add("hidden");
}

//block 1
cell1.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock1){
        cell1.textContent = "O";
        chance = true;
        oChoice.push(1);
        locks.lock1 = false;
        moves +=1;
        cell1.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;

            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock1){
        cell1.textContent = "X";
        chance = false;
        xChoice.push(1);
        locks.lock1 = false;
        moves +=1;
        cell1.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
});
//block2
cell2.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock2){
        cell2.textContent = "O";
        chance = true;
        oChoice.push(2);
        locks.lock2 = false;
        moves +=1;
        cell2.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock2){
        cell2.textContent = "X";
        chance = false;
        xChoice.push(2);
        locks.lock2 = false;
        moves +=1;
        cell2.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block3
cell3.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock3){
        cell3.textContent = "O";
        chance = true;
        oChoice.push(3);
        locks.lock3 = false;
        moves +=1;
        cell3.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock3){
        cell3.textContent = "X";
        chance = false;
        xChoice.push(3);
        locks.lock3 = false;
        moves +=1;
        cell3.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block4
cell4.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock4){
        cell4.textContent = "O";
        chance = true;
        oChoice.push(4);
        locks.lock4 = false;
        moves +=1;
        cell4.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock4){
        cell4.textContent = "X";
        chance = false;
        xChoice.push(4);
        locks.lock4 = false;
        moves +=1;
        cell4.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block5
cell5.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock5){
        cell5.textContent = "O";
        chance = true;
        oChoice.push(5);
        locks.lock5 = false;
        moves +=1;
        cell5.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock5){
        cell5.textContent = "X";
        chance = false;
        xChoice.push(5);
        locks.lock5 = false;
        moves +=1;
        cell5.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block6
cell6.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock6){
        cell6.textContent = "O";
        chance = true;
        oChoice.push(6);
        locks.lock6 = false;
        moves +=1;
        cell6.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock6){
        cell6.textContent = "X";
        chance = false;
        xChoice.push(6);
        locks.lock6 = false;
        moves +=1;
        cell6.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block7
cell7.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock7){
        cell7.textContent = "O";
        chance = true;
        oChoice.push(7);
        locks.lock7 = false;
        moves +=1;
        cell7.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock7){
        cell7.textContent = "X";
        chance = false;
        xChoice.push(7);
        locks.lock7 = false;
        moves +=1;
        cell7.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block8
cell8.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock8){
        cell8.textContent = "O";
        chance = true;
        oChoice.push(8);
        locks.lock8 = false;
        moves +=1;
        cell8.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock8){
        cell8.textContent = "X";
        chance = false;
        xChoice.push(8);
        locks.lock8 = false;
        moves +=1;
        cell8.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
//block9
cell9.addEventListener("click", function(){
    if(chance === false && gameMode && locks.lock9){
        cell9.textContent = "O";
        chance = true;
        oChoice.push(9);
        locks.lock9 = false;
        moves +=1;
        cell9.style.color = "#110108"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "O"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
    else if(chance && gameMode && locks.lock9){
        cell9.textContent = "X";
        chance = false;
        xChoice.push(9);
        locks.lock9 = false;
        moves +=1;
        cell9.style.color = "#5b5457"
        for(let i=0; i < winningPosibilities.length; i++){
            let winningPossibilty = winningPosibilities[i];
            if(winCheck(winningPossibilty,xChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                winner.textContent = "X"
                gameMode = false;
            }
            if (moves === 9 && !winCheck(winningPossibilty,oChoice)){
                congrats.classList.remove("hidden");
                newBtn.classList.remove("hidden");
                congrats.textContent = "Draw!";
                gameMode = false;
            }
        }
    }
})
resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);