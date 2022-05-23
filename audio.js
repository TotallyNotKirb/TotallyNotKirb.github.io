var audiothing = document.getElementById('audiothing');
var songnow = document.getElementById('songnow');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn, song){
   if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);
      if(current==end){
         reset(btn, song);
      }

      progress(btn, song);     
   }, 1000);
}

songnow.addEventListener('click', function(){
   songnow.classList.toggle('playing');
   playPause(audiothing);
   progress(songnow, audiothing);
});

