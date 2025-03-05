var pattern = [], possibleColors = ["red", "green", "blue", "yellow"];
var lvl = 1

var userPattern = []

var startGame = false
function getRandIndex(index) {
    return Math.floor(Math.random()*index)
}

function startNewGame(){
    userPattern = []
    lvl = 1
    pattern = []
    startGame = false

    $(document).keydown(function(event){
        if(event.key == 'a'){
            if(!startGame){
                addToPattern()
                startGame = true
            }
            
        }
    })

}
function addToPattern() {
    var color = possibleColors[getRandIndex(4)]
    pattern.push(color)
    $('#'+color).ready(function() {
        const audio = new Audio("sounds/"+color+".mp3");
        audio.play();
    });
    $('#'+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    console.log(pattern)
}

//Start of the game
/*$(document).keydown(function(event){
    if(event.key == 'a'){
        if(!startGame){
            addToPattern()
            startGame = true
        }
        
    }
})*/

startNewGame()

function checkIfPatternsMatch(){
    let flag = true
    for(let i = 0 ; i < userPattern.length; i ++) {
        if(userPattern[i] === pattern[i]){
            //console.log("MAtch")
        }else{
            //console.warn("MISSED")
            flag = false
        }
    }

    if(flag){
        if(userPattern.length == lvl){
            userPattern = []
            setTimeout(addToPattern(), 5000)
            lvl++
            $("#level-title").text(lvl)
        }
    }else{ 
        alert("END OF GAME")
        $("#level-title").text("PRESS a to restart!")
        
        console.log("FINAL PATTERN "  + pattern)
        startNewGame()
        return 0;
    }

}


$("#blue").click(function(){
    //console.log("CLICKED ON BLUE")
    userPattern.push('blue')
    checkIfPatternsMatch()
})
$("#red").click(function(){
    //console.log("CLICKED ON RED")
    userPattern.push('red')
    checkIfPatternsMatch()
})
$("#yellow").click(function(){
    //console.log("CLICKED ON YELLOW")
    userPattern.push('yellow')
    checkIfPatternsMatch()
})
$("#green").click(function(){
    //console.log("CLICKED ON BLUE")
    userPattern.push('green')
    checkIfPatternsMatch()
})





