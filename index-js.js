



// Voice Player Section

// var player=document.getElementByClassName("player");
// var progress=document.getElementByClassName("progress");
// // var playBtn=document.getElementByClassName("playBtn");



// alert("playerol");

var playpause = function(){
 
    alert("ok");
    if(player.paused){
        player.play();
    }
    else{
        player.pause();
    }
}

playBtn.addEventListener("click",playpause);

player.onplay = function(){
 // alert("ok");
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

player.onpause = function(){
 // alert("ok");
     playBtn.classList.add("fa-play");
     playBtn.classList.remove("fa-pause");      
}

player.ontimeupdate=function(){
    var ct=player.currentTime;
    current.innerHTML=timeFormat(ct);


    //progress
    var duration =player.duration;
    prog= Math.floor((ct*100)/duration);
    progress.style.setProperty("--progress",prog+"%");

}
function timeFormat(ct){
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if(seconds<10){
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}



















//Nav Var

const openMenu = document.querySelector('#open_bar');
const cross = document.querySelector('.open');

// handle click button
openMenu.onclick = function () {

    cross.style.display="block";
  
    openMenu.style.display="none";
    // openMenu.classList.add("fa-play");
    //  playBtn.classList.remove("fa-pause"); 
};

// handle click button
cross.onclick = function () {


    openMenu.style.display="block";
    cross.style.display="none";
};














