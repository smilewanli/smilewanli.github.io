temple = ["萬年殿", "保安宮", "同安宮", "二天府"];
question = ["萬年萬年萬年萬年問題", "保安保安保安保安問題", "同安同安同安同安問題", "二天府二天府二天府二天府問題"];
picture = ["wannian.jpg", "baoan.jpg", "tongan.jpg", "chunde.jpg",  "chunde.jpg"];

$(document).ready(()=>{
    $("#level1").click({level: 0}, changeLevel);
    $("#level2").click({level: 1}, changeLevel);
    $("#level3").click({level: 2}, changeLevel);
    $("#level4").click({level: 3}, changeLevel);
    $("#level5").click({level: 4}, changeLevel);
    $("#submit").click(submitAns);
});

function changeLevel(event){
    num = event.data.level;
    $("h1").text(temple[num]);
    $("#question").text(question[num] );
    $("#questionPic").attr("src","images/portfolio/" + picture[num]);
}

function submitAns(){
    $("h3").text("(已完成)");
}