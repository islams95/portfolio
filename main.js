
$(".nav-toggle").click(function(){

    const on = document.querySelector("nav").getAttribute("active")
    console.log(on)
    if (on == "false") {

    $("nav").attr("active","true")
        $("nav").css({ "height": "100vh"})
        $(".navv").css({ "display" : "block"})
           $("nav").css({ "background-color": "black"})
            $("nav").css({ "color": "white"})
            $(".nav-toggle").css({ "color": "white"})
               $(".email").css({ "color": "black"})
                    $(".email").css({ "background-color": "black"})

    }
    else if (on == "true"){
        $("nav").css({ "height": "80px"})
      
        $(".navv").css({ "display" : "none"})
    $("nav").attr("active","false")
     $("nav").css({ "background-color": "white"})
            $("nav").css({ "color": "black"})
             $(".nav-toggle").css({ "color": "black"})
                  $(".email").css({ "color": "black"})
                       $(".email").css({ "background-color": "black"})

  

    
}

})

document.querySelector(".java").onclick=function(){
    
 const random = setInterval(function(){
       
        let a = Math.floor(Math.random() * 26);
        let b = Math.floor(Math.random() * 26);
        let c = Math.floor(Math.random() *26);
        let d = Math.floor(Math.random() * 26);
        let e = Math.floor(Math.random() * 26);
        let f = Math.floor(Math.random() *26);
        let g = Math.floor(Math.random() * 26);
        let h = Math.floor(Math.random() * 26);
        let i= Math.floor(Math.random() *26);
var litt=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        document.querySelector(".java").innerHTML= litt[a]+''+litt[b]+''+litt[c]+""+a+c+''+''+litt[d]+''+litt[e]+''+litt[f]+""+litt[g]+''+litt[h]+""+litt[i]
    },150);
    setTimeout(() => {
        clearInterval(random)
        document.querySelector(".java").innerHTML="javascript"
    }, 3000);
}

$(".jq").click(function(){
$(".one").css({  "transform": "translateX(-500px)"} )
   
    setTimeout(function(){
      $(".one").css({  "transform": "translateX(500px)"} )
    },3000)
    setTimeout(function(){
      $(".one").css({  "transform": "translateX(0%)"} )
    },6000)

})
$(".navv ul > li > a").mouseenter(function(){
    $(".navv ul > li > a").css({  "color": "grey"} )
    $(this).css({  "color": "white"} )
})
$(".navv ul > li > a").mouseleave(function(){
    $(".navv ul > li > a").css({  "color": "white"} )
})
let lastscroll=0;
const body = document.body
window.addEventListener('scroll',function(){
    const currentscroll = window.pageYOffset
    if(currentscroll <= 0 ){
      body.classList.remove("scroll-up ")
    }
    if (currentscroll > lastscroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
         body.classList.add("scroll-down")
        
    }
    if (currentscroll < lastscroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
         body.classList.add("scroll-up")
        
    }
lastscroll = currentscroll
})
