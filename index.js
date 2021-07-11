var number=document.querySelectorAll(".drum").length;
for(i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerhtml=this.innerHTML;
        makesound(innerhtml);
        ButtonAnimation(innerhtml)
    } );
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    ButtonAnimation(event.key);
});
function makesound(key){
    switch(key){
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case 'a':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case 's':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case 'd':
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case 'j':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case 'k':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'l':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
    }
}

function ButtonAnimation(currentkey){
    var ActivationButton=document.querySelector("."+currentkey);
    ActivationButton.classList.add("pressed");
    setTimeout(function(){ActivationButton.classList.remove("pressed");},100);
}