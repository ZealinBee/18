const play11 = document.querySelector('.play-1--1')
const play22 = document.querySelector('.play-2--2')
const play23 = document.querySelector('.play-2--3')
const play24 = document.querySelector('.play-2--4')
const play25 = document.querySelector('.play-2--5')
const play26 = document.querySelector('.play-2--6')
const play27 = document.querySelector('.play-2--7')
const play28 = document.querySelector('.play-2--8')
const play29 = document.querySelector('.play-2--9')
const pause11 = document.querySelector('.pause-1--1')
const pause22 = document.querySelector('.pause-2--2')
const pause23 = document.querySelector('.pause-2--3')
const pause24 = document.querySelector('.pause-2--4')
const pause25 = document.querySelector('.pause-2--5')
const pause26 = document.querySelector('.pause-2--6')
const pause27 = document.querySelector('.pause-2--7')
const pause28 = document.querySelector('.pause-2--8')
const pause29 = document.querySelector('.pause-2--9')
const audio11 = document.querySelector('.audio-1--1')
const progress11 = document.querySelector('.progress-1--1')
const progressContainer11 = document.querySelector('.bar-1--1')
const pause21 = document.querySelector('.pause-2--1')
const play21 = document.querySelector('.play-2--1')
const audio21 = document.querySelector('.audio-2--1')
const progress21 = document.querySelector('.progress-2--1')
const progressContainer21 = document.querySelector('.bar-2--1')
const audio22 = document.querySelector('.audio-2--2')
const progress22 = document.querySelector('.progress-2--2')
const progressContainer22 = document.querySelector('.bar-2--2')
const audio23 = document.querySelector('.audio-2--3')
const progress23 = document.querySelector('.progress-2--3')
const progressContainer23 = document.querySelector('.bar-2--3')
const audio24 = document.querySelector('.audio-2--4')
const progress24 = document.querySelector('.progress-2--4')
const progressContainer24 = document.querySelector('.bar-2--4')
const audio25 = document.querySelector('.audio-2--5')
const progress25 = document.querySelector('.progress-2--5')
const progressContainer25 = document.querySelector('.bar-2--5')
const audio26 = document.querySelector('.audio-2--6')
const progress26 = document.querySelector('.progress-2--6')
const progressContainer26 = document.querySelector('.bar-2--6')
const audio27 = document.querySelector('.audio-2--7')
const progress27 = document.querySelector('.progress-2--7')
const progressContainer27 = document.querySelector('.bar-2--7')
const audio28 = document.querySelector('.audio-2--8')
const progress28 = document.querySelector('.progress-2--8')
const progressContainer28 = document.querySelector('.bar-2--8')
const audio29 = document.querySelector('.audio-2--9')
const progress29 = document.querySelector('.progress-2--9')
const progressContainer29 = document.querySelector('.bar-2--9')

play11.addEventListener('click', function(){
    pause11.classList.toggle('show')
    play11.classList.toggle('hide')
    audio11.play()
});
pause11.addEventListener('click', function(){
    pause11.classList.toggle('show')
    play11.classList.toggle('hide')
    audio11.pause()
});
audio11.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress11.style.width = `${progressPercent}%`
})
progressContainer11.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio11.duration

    audio11.currentTime = (clickX / width) * duration
})
play21.addEventListener('click', function(){
    pause21.classList.toggle('show')
    play21.classList.toggle('hide')
    audio21.play()
});
pause21.addEventListener('click', function(){
    pause21.classList.toggle('show')
    play21.classList.toggle('hide')
    audio21.pause()
});
audio21.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress21.style.width = `${progressPercent}%`
})
progressContainer21.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio21.duration

    audio21.currentTime = (clickX / width) * duration
})
play22.addEventListener('click', function(){
    pause22.classList.toggle('show')
    play22.classList.toggle('hide')
    audio22.play()
});
pause22.addEventListener('click', function(){
    pause22.classList.toggle('show')
    play22.classList.toggle('hide')
    audio22.pause()
});
audio22.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress22.style.width = `${progressPercent}%`
})
progressContainer22.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio22.duration

    audio22.currentTime = (clickX / width) * duration
})
play23.addEventListener('click', function(){
    pause23.classList.toggle('show')
    play23.classList.toggle('hide')
    audio23.play()
});
pause23.addEventListener('click', function(){
    pause23.classList.toggle('show')
    play23.classList.toggle('hide')
    audio23.pause()
});
audio23.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress23.style.width = `${progressPercent}%`
})
progressContainer23.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio23.duration

    audio23.currentTime = (clickX / width) * duration
})
play24.addEventListener('click', function(){
    pause24.classList.toggle('show')
    play24.classList.toggle('hide')
    audio24.play()
});
pause24.addEventListener('click', function(){
    pause24.classList.toggle('show')
    play24.classList.toggle('hide')
    audio24.pause()
});
audio24.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress24.style.width = `${progressPercent}%`
})
progressContainer24.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio24.duration

    audio24.currentTime = (clickX / width) * duration
})
play25.addEventListener('click', function(){
    pause25.classList.toggle('show')
    play25.classList.toggle('hide')
    audio25.play()
});
pause25.addEventListener('click', function(){
    pause25.classList.toggle('show')
    play25.classList.toggle('hide')
    audio25.pause()
});
audio25.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress25.style.width = `${progressPercent}%`
})
progressContainer25.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio25.duration

    audio25.currentTime = (clickX / width) * duration
})
play26.addEventListener('click', function(){
    pause26.classList.toggle('show')
    play26.classList.toggle('hide')
    audio26.play()
});
pause26.addEventListener('click', function(){
    pause26.classList.toggle('show')
    play26.classList.toggle('hide')
    audio26.pause()
});
audio26.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress26.style.width = `${progressPercent}%`
})
progressContainer26.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio26.duration

    audio26.currentTime = (clickX / width) * duration
})
play27.addEventListener('click', function(){
    pause27.classList.toggle('show')
    play27.classList.toggle('hide')
    audio27.play()
});
pause27.addEventListener('click', function(){
    pause27.classList.toggle('show')
    play27.classList.toggle('hide')
    audio27.pause()
});
audio27.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress27.style.width = `${progressPercent}%`
})
progressContainer27.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio27.duration

    audio27.currentTime = (clickX / width) * duration
})
play28.addEventListener('click', function(){
    pause28.classList.toggle('show')
    play28.classList.toggle('hide')
    audio28.play()
});
pause28.addEventListener('click', function(){
    pause28.classList.toggle('show')
    play28.classList.toggle('hide')
    audio28.pause()
});
audio28.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress28.style.width = `${progressPercent}%`
})
progressContainer28.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio28.duration

    audio28.currentTime = (clickX / width) * duration
})
play29.addEventListener('click', function(){
    pause29.classList.toggle('show')
    play29.classList.toggle('hide')
    audio29.play()
});
pause29.addEventListener('click', function(){
    pause29.classList.toggle('show')
    play29.classList.toggle('hide')
    audio29.pause()
});
audio29.addEventListener('timeupdate', function(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress29.style.width = `${progressPercent}%`
})
progressContainer29.addEventListener('click', function(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio29.duration

    audio29.currentTime = (clickX / width) * duration
})