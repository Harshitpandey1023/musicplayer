console.log("bas suntejaa");

let songIndex = 2;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let MasterSong = document.getElementById('MasterSong');
let songsItem=Array. from(document.getElementsByClassName('songItem'));



let songs= [
    {songName:"hai apna dil-sanam puri",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"kaleshi chori",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"darkside",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"roz-neucleya",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"my ordinary life",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"RVFV-YONOSÉ ",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"}, 
]

songsItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
    
//audioElement.play();
//play pause
masterPlay.addEventListener('click',()=>{
    if( audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;


    }
        
      
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
}) 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
    }


    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays (); 
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex}.mp3`;
     MasterSong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    })
    })

    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>8){
        songIndex = 2
        }
        else{
        songIndex += 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        MasterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
    
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        })
        document.getElementById('previous').addEventListener('click', ()=>{
            if(songIndex<=2){
            songIndex = 7
            }
            else{
            songIndex -= 1;
            }

            audioElement.src = `songs/${songIndex}.mp3`;
            MasterSong.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
        
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    
            })