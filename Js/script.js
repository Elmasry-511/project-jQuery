
$(document).ready(function () {
// clos asid bar.........................................
$("aside .clos").click(function () {
    $("aside").css({
        left:"-100%"
    })
    $(".openS").css({
        left:"10px",
        color:"white"
        
    })
});
// open asid bar.........................................
$(".openS").click(function () {
    $("aside").css({
        left: "0%"
    })
    $(".openS").css({
        left:"180px",
        color:"yellow"
        
    })
});
//^^^^^^^^^^^^^^
$(".info .btn").click(function () {
    let myId = $(this).css( "boxShadow"," 0").attr("id");
    $(".info p").hide();
    $("." + myId).slideToggle();
})
// ^^^^^^^^^^^^^^^^
$("#textarea").keyup(function (event) {
    let targets = event.target.value.length
    $("#count").html(100 - Number(targets))
    if($("#count").html() < 0  ){
        $("#count").html("your available character finished")
        $("#textarea").css( "boxShadow"," 0 0 0 0.25rem rgb(255 0 0 / 25%)")
    }
    if(targets >= 100){
        event.target.value =event.target.value.substr(0,100)
        conter=0
    }else{
        $("#textarea").css({
            border : "1px solid #ced4da",
            boxShadow : "0 0 0 0.25rem rgb(13 110 253 / 25%)",
        });
    }
})
// ^^^^^^^^^^^^^^^^^


})

// *******************8
function countdown() {
    let now = new Date();
    let eventDate = new Date(2022, 7, 1);
    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTiime;
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;
    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.querySelector(".dayBox").innerHTML = "<h4>" + d + " D" + "</h4>";
    document.querySelector(".hoursBox").innerHTML = "<h4>" + h + " h" + "</h4>";
    document.querySelector(".minutesBox").innerHTML = "<h4>" + m + " m" + "</h4>";
    document.querySelector(".secondsBox").innerHTML = "<h4>" + s + " s" + "</h4>";
    setTimeout(countdown, 1000);
}
countdown();





