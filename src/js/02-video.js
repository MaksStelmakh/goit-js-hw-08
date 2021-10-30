import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`)
const videoPlayer = new Vimeo.Player(iframe)

onTimePauseVideo()

videoPlayer.on(`timeupdate`, throttle(saveTimePauseVideo, 1000));

function saveTimePauseVideo(video) {
    localStorage.setItem(`videoplayer-current-time`, video.seconds)
}

function onTimePauseVideo() {
    let pauseVideo = localStorage.getItem(`videoplayer-current-time`)
    videoPlayer.setCurrentTime(pauseVideo)
}



// Налаштування плеєра без бібліотеки

// Html розмітка

// <div class="player">
//     <video class="player__video viewer" src="./video/652333414.mp4"></video>

//     <div class="player__controls">
//         <div class="progress">
//             <div class="progress__filled"></div>
//         </div>
//         <button class="player__button toggle" title="Toggle Play">►</button>
//         <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
//         <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
//         <button data-skip="-10" class="player__button">« 10s</button>
//         <button data-skip="25" class="player__button">25s »</button>
//     </div>
// </div>



// CSS розмітка

// html {
//   box-sizing: border-box;
// }

// *,
// *:before,
// *:after {
//   box-sizing: inherit;
// }

// body {
//   margin: 0;
//   padding: 0;
//   display: flex;
//   min-height: 100vh;
//   background: linear-gradient(135deg, #7c1599 0%, #921099 48%, #7e4ae8 100%);
//   background-size: cover;
//   align-items: center;
//   justify-content: center;
// }

// .player {
//   max-width: 750px;
//   border: 5px solid rgba(0, 0, 0, 0.2);
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
//   position: relative;
//   font-size: 0;
//   overflow: hidden;
// }

// /* This css is only applied when fullscreen is active. */
// .player:fullscreen {
//   max-width: none;
//   width: 100%;
// }

// .player:-webkit-full-screen {
//   max-width: none;
//   width: 100%;
// }

// .player__video {
//   width: 100%;
// }

// .player__button {
//   background: none;
//   border: 0;
//   line-height: 1;
//   color: white;
//   text-align: center;
//   outline: 0;
//   padding: 0;
//   cursor: pointer;
//   max-width: 50px;
// }

// .player__button:focus {
//   border-color: #ffc600;
// }

// .player__slider {
//   width: 10px;
//   height: 30px;
// }

// .player__controls {
//   display: flex;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   transform: translateY(100%) translateY(-5px);
//   transition: all 0.3s;
//   flex-wrap: wrap;
//   background: rgba(0, 0, 0, 0.1);
// }

// .player:hover .player__controls {
//   transform: translateY(0);
// }

// .player:hover .progress {
//   height: 15px;
// }

// .player__controls > * {
//   flex: 1;
// }

// .progress {
//   flex: 10;
//   position: relative;
//   display: flex;
//   flex-basis: 100%;
//   height: 5px;
//   transition: height 0.3s;
//   background: rgba(0, 0, 0, 0.5);
//   cursor: ew-resize;
// }

// .progress__filled {
//   width: 50%;
//   background: #ffc600;
//   flex: 0;
//   flex-basis: 0%;
// }

// /* unholy css to style input type="range" */

// input[type="range"] {
//   -webkit-appearance: none;
//   background: transparent;
//   width: 100%;
//   margin: 0 5px;
// }

// input[type="range"]:focus {
//   outline: none;
// }

// input[type="range"]::-webkit-slider-runnable-track {
//   width: 100%;
//   height: 8.4px;
//   cursor: pointer;
//   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
//   background: rgba(255, 255, 255, 0.8);
//   border-radius: 1.3px;
//   border: 0.2px solid rgba(1, 1, 1, 0);
// }

// input[type="range"]::-webkit-slider-thumb {
//   height: 15px;
//   width: 15px;
//   border-radius: 50px;
//   background: #ffc600;
//   cursor: pointer;
//   -webkit-appearance: none;
//   margin-top: -3.5px;
//   box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
// }

// input[type="range"]:focus::-webkit-slider-runnable-track {
//   background: #bada55;
// }

// input[type="range"]::-moz-range-track {
//   width: 100%;
//   height: 8.4px;
//   cursor: pointer;
//   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
//   background: #ffffff;
//   border-radius: 1.3px;
//   border: 0.2px solid rgba(1, 1, 1, 0);
// }

// input[type="range"]::-moz-range-thumb {
//   box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
//   height: 15px;
//   width: 15px;
//   border-radius: 50px;
//   background: #ffc600;
//   cursor: pointer;
// }


// JS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const mediaPlayer = document.querySelector(`.player`)
// const toggleBtn = mediaPlayer.querySelector(`.toggle`)
// const video = mediaPlayer.querySelector(`.viewer`)
// const skipBtns = mediaPlayer.querySelectorAll(`[data-skip]`)
// const playerSlider = mediaPlayer.querySelectorAll(`.player__slider`)
// const progress = mediaPlayer.querySelector(`.progress`)
// const progressBar = mediaPlayer.querySelector(`.progress__filled`)

// let mousedown = false

// // console.log(toggleBtn)
// video.addEventListener(`play`, updateBtn)
// video.addEventListener(`pause`, updateBtn)
// video.addEventListener(`click`, togglePlay)
// video.addEventListener(`timeupdate`, hundleProgress)

// skipBtns.forEach(btn => btn.addEventListener(`click`, skip))
// playerSlider.forEach(slider => slider.addEventListener(`input`, handleChangeUpdate))
// progress.addEventListener(`click`, scrab)

// progress.addEventListener(`mousedown`, () => mousedown = true)
// progress.addEventListener(`mouseup`, () => mousedown = false)
// progress.addEventListener(`mousemove`, event => mousedown && scrab(event) )

// toggleBtn.addEventListener(`click`, togglePlay)

// function togglePlay() {
//   const method = video.paused ? "play" : "pause";
//   video[method]()
// }

// function updateBtn() {
//   const icon = this.paused ? '▶' : '❚ ❚'
//   toggleBtn.textContent = icon
// }

// function skip() {
//   video.currentTime += Number(this.dataset.skip)
// }

// function handleChangeUpdate() {
//   video[this.name] = this.value
// }

// function scrab(event) {
//   const scrabTime = (event.offsetX / progress.offsetWidth) * video.duration
//   video.currentTime = scrabTime
// }

// function hundleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`
// }
