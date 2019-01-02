var temple = ["萬年殿", "保安宮", "同安宮", "二天府"];
var question = ["萬年萬年萬年萬年問題", "保安保安保安保安問題", "同安同安同安同安問題", "二天府二天府二天府二天府問題"];
var picture = ["wannian.jpg", "baoan.jpg", "tongan.jpg", "chunde.jpg",  "chunde.jpg"];
var ans = ["A", "B", "C", "D", "E"];
var nowLevel;

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
});

function changeLevel(event){
    num = event.data.level;
    $("h1").text(temple[num]);
    $("#question").text(question[num] );
    $("#questionPic").attr("src","images/portfolio/" + picture[num]);
    $("#answer").val("");
    nowLevel = num;
}

function submitInfo(){
    /*gaming view*/
    $("#gameing").css("display","block");
    $("#genGame").css("display","none");
    $(".game-panel").css("display","block");

    /*show level 1*/
    $("h1").text(temple[0]);
    $("#question").text(question[0] );
    $("#questionPic").attr("src","images/portfolio/" + picture[0]);
    $("#answer").val("");
    nowLevel = 0;
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