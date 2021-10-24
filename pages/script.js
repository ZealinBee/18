const play = document.querySelector('.fa-play')
const pause = document.querySelector('.fa-pause')
const audio = document.querySelector('audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-bar')
let timeLeft = document.querySelector('.time-left')

play.addEventListener('click', function() {
    pause.classList.toggle('show')
    play.classList.toggle('hide')
    audio.play()
})
pause.addEventListener('click', function() {
    pause.classList.toggle('show')
    play.classList.toggle('hide')
    audio.pause()
})
audio.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%`
})
progressContainer.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
})

audio.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    timeLeft.textContent = Math.floor(duration - currentTime)
})