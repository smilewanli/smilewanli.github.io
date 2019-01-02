var temple = ["萬年殿", "保安宮", "同安宮", "二天府"];
var question = ["萬年萬年萬年萬年問題", "保安保安保安保安問題", "同安同安同安同安問題", "二天府二天府二天府二天府問題"];
var picture = ["wannian.jpg", "baoan.jpg", "tongan.jpg", "chunde.jpg",  "chunde.jpg"];
var ans = ["A", "B", "C", "D", "E"];
var nowLevel;
var clickDownX;
var lastX;

$(document).ready(()=>{
    $("#level1").click({level: 0}, changeLevel);
    $("#level2").click({level: 1}, changeLevel);
    $("#level3").click({level: 2}, changeLevel);
    $("#level4").click({level: 3}, changeLevel);
    $("#level5").click({level: 4}, changeLevel);
    $("#submit").click(submitInfo);
    $("#OK").click(submitAns);
    $("#gameing").css("display","none");
    $("#genGame").css("display","block");

    $("#game_level").mousedown(()=>{
        clickDownX = getCursorPosition();        
    });
    
    $("#game_level").mouseup(()=>{
        swipe(getCursorPosition() - clickDownX);
    })

    $('#game_level').on('touchstart', (e)=>{
        clickDownX = e.originalEvent.touches[0].pageX;
    });

    $('#game_level').on('touchmove', (e)=>{
        lastX = e.originalEvent.touches[0].pageX;
    });

    $('#game_level').on('touchend', (e)=>{        
        swipe(lastX - clickDownX);
    });


});

function getCursorPosition()
{
    var posx = 0;
    var e = window.event;
    if (e.pageX || e.pageY)     {
        posx = e.pageX- document.documentElement.scrollLeft- document.body.scrollLeft;
    }
    else if (e.clientX || e.clientY)     {  //for IE
        posx = e.clientX ;
    }
    return posx;
}


function swipe(swipewidth){
    if(swipewidth < -50 && nowLevel < 4){
        changeLevelByNum(nowLevel + 1);
    }else if(swipewidth > 50 && nowLevel > 0){
        changeLevelByNum(nowLevel - 1);
    }
}


function changeLevel(event){
    changeLevelByNum(event.data.level);
}

function changeLevelByNum(num){
    $("h1").text(temple[num]);
    $("#question").text(question[num] );
    $("#questionPic").attr("src","images/portfolio/" + picture[num]);
    $("#answer").val("");
    nowLevel = num;
}

function submitInfo(){
    $("#gameing").css("display","block");
    $("#genGame").css("display","none");
    $(".game-panel").css("display","block");
    changeLevelByNum(0);
}

function submitAns(){
    var inputAns = $("#answer").val();
    if (inputAns == ans[nowLevel]){
        $("h3").text("(完成)");
        question[nowLevel] = "(完成)";
    }
    else{
        $("#answer").val("");
    }
}

function swiperightHandler(){
    if(nowLevel > 0)
        changeLevelByNum(nowLevel - 1);
    alert(nowLevel);
}

function swipeleftHandler(){
    if(nowLevel < 4)
        changeLevelByNum(nowLevel + 1);
    alert(nowLevel);
}