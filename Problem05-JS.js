var counter = 0;

var ids = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"),
    document.getElementById("4"), document.getElementById("5"), document.getElementById("6"),
    document.getElementById("7"), document.getElementById("8"), document.getElementById("9")
];

function playerWon(counter, id1, id2, id3){
    if((counter - 1) % 2 == 0){
        document.getElementById(id1).style.color = 'red';
        document.getElementById(id2).style.color = 'red';
        document.getElementById(id3).style.color = 'red';
        alert("Player 1 won !");
        location.reload();
    }
    if((counter - 1) % 2 == 1){
        document.getElementById(id1).style.color = 'red';
        document.getElementById(id2).style.color = 'red';
        document.getElementById(id3).style.color = 'red';
        alert("Player 2 won !");
        location.reload();
    }
}

function drawFigure(id){

    if(counter % 2 == 0 && document.getElementById(id).innerHTML === ""){
       ids[id] = document.getElementById(id).innerHTML = "X";
        counter++;
    }
    if(counter % 2 == 1 && document.getElementById(id).innerHTML === ""){
        ids[id] = document.getElementById(id).innerHTML = "O";
        counter++;
    }

    var check1 = ids[1] === ids[2] && ids[2] === ids[3];
    var test1 = !(ids[1] === null && ids[2] === null && ids[3] === null);

    if(check1 && test1){
        playerWon(counter, 1, 2, 3);
    }

    var check2 = ids[4] === ids[5] && ids[5] === ids[6];
    var test2 = !(ids[4] === null && ids[5] === null && ids[6] === null);

    if(check2 && test2){
        playerWon(counter, 4, 5, 6);
    }

    var check3 = ids[7] === ids[8] && ids[8] === ids[9];
    var test3 = !(ids[7] === null && ids[8] === null && ids[9] === null);

    if(check3 && test3){
        playerWon(counter, 7, 8, 9);
    }

    var check4 = ids[1] === ids[4] && ids[4] === ids[7];
    var test4 = !(ids[1] === null && ids[4] === null && ids[7] === null);

    if(check4 && test4){
        playerWon(counter, 1, 4, 7);
    }

    var check5 = ids[2] === ids[5] && ids[5] === ids[8];
    var test5 = !(ids[2] === null && ids[5] === null && ids[8] === null);

    if(check5 && test5){
        playerWon(counter, 2, 5, 8);
    }

    var check6 = ids[3] === ids[6] && ids[6] === ids[9];
    var test6 = !(ids[3] === null && ids[6] === null && ids[9] === null);

    if(check6 && test6){
        playerWon(counter, 3, 6, 9);
    }

    var check7 = ids[1] === ids[5] && ids[5] === ids[9];
    var test7 = !(ids[1] === null && ids[5] === null && ids[9] === null);

    if(check7 && test7){
        playerWon(counter, 1, 5, 9);
    }

    var check8 = ids[7] === ids[5] && ids[5] === ids[3];
    var test8 = !(ids[7] === null && ids[5] === null && ids[3] === null);

    if(check8 && test8){
        playerWon(counter, 7, 5, 3);
    }

    if(counter === 9){
        alert("Remi !");
        location.reload();
    }

}