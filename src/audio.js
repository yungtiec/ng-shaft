var jumpAudio, rightCrossAudio, screamAudio, coinAudio;
function createAudio() {
    jumpAudio = document.createElement('audio');
    rightCrossAudio = document.createElement('audio');
    screamAudio = document.createElement('audio');
    coinAudio = document.createElement('audio');
    jumpAudio.src = 'src/jump.mp3';
    rightCrossAudio.src = 'src/rightCross.mp3';
    screamAudio.src = 'src/scream.mp3';
    coinAudio.src = 'src/coin.mp3'
    jumpAudio.load();
    rightCrossAudio.load();
    screamAudio.load();
    coinAudio.load();
}
