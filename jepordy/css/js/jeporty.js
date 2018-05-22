

    var modal = document.getElementById("modalback");
// this is what they pay the big money for
var btn1 = document.getElementById("questions1-1");
var btn2 = document.getElementById("questions1-2");
var btn3 = document.getElementById("questions1-3");
var btn4 = document.getElementById("questions1-4");
var btn5 = document.getElementById("questions1-5");
var btn6 = document.getElementById("questions1-6");
var btn7 = document.getElementById("questions2-1");
var btn8 = document.getElementById("questions2-2");
var btn9 = document.getElementById("questions2-3");
var btn10 = document.getElementById("questions2-4");
var btn11 = document.getElementById("questions2-5");
var btn12 = document.getElementById("questions2-6");
var btn13 = document.getElementById("questions3-1");
var btn14 = document.getElementById("questions3-2");
var btn15 = document.getElementById("questions3-3");
var btn16 = document.getElementById("questions3-4");
var btn17 = document.getElementById("questions3-5");
var btn18 = document.getElementById("questions3-6");
var btn19 = document.getElementById("questions4-1");

var close = $("button .close");

btn1.onclick = function() {
    $('#modalback').css('display' , 'grid');
    $('#modal-con1-1').css('display' , 'grid');
}
btn2.onclick = function() {
    console.log("does this function work?")
    $('#modalback').css('display' , 'grid');
    $('#modal-con1-2').css('display' , 'grid');
}
btn3.onclick = function() {
    $('#modalback').css('display' , 'grid');
    $('#modal-con1-3').css('display' ,'grid');
}
btn4.onclick = function() {
    $('#modalback').css('display' , 'grid');
    $('#modal-con1-4').css('display' , 'grid');
}
btn5.onclick = function() {
    $('#modalback').css('display' , 'grid');
    $('#modal-con1-5').css('display' , 'grid');
}
btn6.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-6').css('display', 'grid');
}
btn7.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-1').css('display', 'grid');
}
btn8.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-2').css('display', 'grid');
}
btn9.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-3').css('display', 'grid');
}
btn10.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-4').css('display', 'grid');
}
btn11.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-5').css('display', 'grid');
}
btn12.onclick = function() {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-6').css('display', 'grid');
}

// getElementsByClassName("close").onclick = function() {
//     console.log("i am alive!!")
//     document.getElementsById('modalback').style.display = 'none';
// }
// same as

$('.close'  ).click(function() {
    console.log("i am alive!!")
    $('#modalback').hide()
    $('.m').hide()

})