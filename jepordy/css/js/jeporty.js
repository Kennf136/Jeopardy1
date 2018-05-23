

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
var btn20 = document.getElementById("questions4-2");
var btn21 = document.getElementById("questions4-3");
var btn22 = document.getElementById("questions4-4");
var btn23 = document.getElementById("questions4-5");
var btn24 = document.getElementById("questions4-6");
var btn25 = document.getElementById("questions5-1");
var btn26 = document.getElementById("questions5-2");
var btn27 = document.getElementById("questions5-3");
var btn28 = document.getElementById("questions5-4");
var btn29 = document.getElementById("questions5-5");
var btn30 = document.getElementById("questions5-6");
var btn31 = document.getElementById("questions6-1");
var btn32 = document.getElementById("questions6-2");
var btn33 = document.getElementById("questions6-3");
var btn34 = document.getElementById("questions6-4");
var btn35 = document.getElementById("questions6-5");
var btn36 = document.getElementById("questions6-6");
var btn37 = document.getElementById("erric")

var answer = null;
var close = $("button .close");
var score1 = 0;
var p1 = 100;
var p2 = 200;
var p3 = 300;
var p4 = 400;
var p5 = 500;
var p6 = 600;



btn1.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-1').css('display', 'grid');
    $('.points1').hide()

}
btn2.onclick = function () {
    console.log("does this function work?")
    $('#modalback').css('display', 'grid');
    $('#modal-con1-2').css('display', 'grid');
    $('.points2').hide()

}
btn3.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-3').css('display', 'grid');
    $('.points3').hide()

}
btn4.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-4').css('display', 'grid');
    $('.points4').hide()

}
btn5.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-5').css('display', 'grid');
    $('.points5').hide()

}
btn6.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con1-6').css('display', 'grid');
    $('.points6').hide()

}
btn7.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-1').css('display', 'grid');
    $('.points7').hide()

}
btn8.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-2').css('display', 'grid');
    $('.points8').hide()

}
btn9.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-3').css('display', 'grid');
    $('.points9').hide()

}
btn10.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-4').css('display', 'grid');
    $('.points10').hide()

}
btn11.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-5').css('display', 'grid');
    $('.points11').hide()

}
btn12.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con2-6').css('display', 'grid');
    $('.points12').hide()

}
btn13.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-1').css('display', 'grid');
    $('.points13').hide()

}
btn14.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-2').css('display', 'grid');
    $('.points14').hide()

}
btn15.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-3').css('display', 'grid');
    $('.points15').hide()

}
btn16.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-4').css('display', 'grid');
    $('.points16').hide()

}
btn17.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-5').css('display', 'grid');
    $('.points17').hide()

}
btn18.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con3-6').css('display', 'grid');
    $('.points18').hide()

}
btn19.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-1').css('display', 'grid');
    $('.points19').hide()

}
btn20.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-2').css('display', 'grid');
    $('.points20').hide()

}
btn21.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-3').css('display', 'grid');
    $('.points21').hide()

}
btn22.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-4').css('display', 'grid');
    $('.points22').hide()

}
btn23.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-5').css('display', 'grid');
    $('.points23').hide()

}
btn24.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con4-6').css('display', 'grid');
    $('.points24').hide()

}
btn25.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-1').css('display', 'grid');
    $('.points25').hide()

}
btn26.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-2').css('display', 'grid');
    $('.points26').hide()

}
btn27.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-3').css('display', 'grid');
    $('.points27').hide()

}
btn28.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-4').css('display', 'grid');
    $('.points28').hide()

}
btn29.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-5').css('display', 'grid');
    $('.points29').hide()

}
btn30.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con5-6').css('display', 'grid');
    $('.points30').hide()

}
btn31.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-1').css('display', 'grid');
    $('.points31').hide()

}
btn32.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-2').css('display', 'grid');
    $('.points32').hide()

}
btn33.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-3').css('display', 'grid');
    $('.points33').hide()

}
btn34.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-4').css('display', 'grid');
    $('.points34').hide()

}
btn35.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-5').css('display', 'grid');
    $('.points35').hide()

}
btn36.onclick = function () {
    $('#modalback').css('display', 'grid');
    $('#modal-con6-6').css('display', 'grid');
    $('.points36').hide()
}





$('.close').click(function () {
    console.log("i am alive!!")
    $('#modalback').hide()
    $('.m').hide()
    // var answer=''

})

$('#modal-con1-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
var i=36
$(".close").on("click", function () {
    answer: null;
     console.log('I feel nothing');
     $('#modalback').css('display', 'grid');
                $('#erric').css('display', 'grid');
        //  console.log(i)
        //  if(i>0){
        //      i--
        //  }
        
        // if(i==0) {
        //         $('#modalback').css('display', 'grid');
        //         $('#erric').css('display', 'grid');
        $(".close").on("click", function () {
            answer: null;
             console.log('I feel nothing');
             $('#modalback').css('display', 'none');
                             $('#erric').css('display', 'none');

        //         }
         }
        
)

$('#modal-con1-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con1-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con1-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con1-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con1-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p1 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con1-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p1 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con2-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p2 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con2-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p2 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con3-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p3 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con3-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p3 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con4-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p4 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con4-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p4 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con5-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p5 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con5-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p5 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-1 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-1 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-2 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-2 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-3 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-3 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-4 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-4 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-5 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-5 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})
$('#modal-con6-6 .g').on("click", function () {
    answer= true;
    console.log("I love you");
    if (answer==true){score1 += p6 }
    console.log(score1);
    $('.score1').text(score1);
} )

$("#modal-con6-6 .d").on("click", function () {
    answer = false;
    console.log("I hate you fater");
    if (answer==false){score1 -= p6 }  
    console.log(score1) ; 
    console.log(answer);
    $('.score1').text(score1);
})































// function boo() {
//    if( $(this).hasClass('.g')){answer=true; coonsole.log('true');}

//     else if ($(this).hasClass('.d')) { answer = false; console.log('No');}
// else { answer = null; }
    // $('.g').click(function(){ answer=true; })
    // $('.d').click(function(){answer=false;})


    // function boo() {

// write out as an if statement
    // instead of creating a plus function, just += score1

    // if (answer=true){
    //     console.log('Yes');
    // }
    // else if(answer=false){
    //     console.log('No');}
// }
// $('.c').click(boo())

// getElementsByClassName("close").onclick = function() {
//     console.log("i am alive!!")
//     document.getElementsById('modalback').style.display = 'none';
// }
// same as