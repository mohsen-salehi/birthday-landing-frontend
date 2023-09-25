// TODO  2
window.maximumUserVoice = 0
const candleVoiceActionEvent = new CustomEvent('candleVoiceActionEvent');
let volSender = false
window.volScannerBeActive = true

function testVoice() {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(window.stream);
    const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;
    microphone.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);
    scriptProcessor.onaudioprocess = function () {
        if (!window.volScannerBeActive) return
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        const arraySum = array.reduce((a, value) => a + value, 0);
        const average = arraySum / array.length;
        handleFlame(Math.round(average))
    };

    function handleFlame(vol) {
        if (volSender) {
            let candleUserVolEvent = new CustomEvent('candleUserVolEvent', {detail: vol})
            window.dispatchEvent(candleUserVolEvent)
        } else {
            if (window.maximumUserVoice < vol) {
                window.maximumUserVoice = vol
            }
        }
    }
}

function readyToVoiceTestingHandler() {
    let modalStage = document.getElementsByTagName("modal")[0]
    modalStage.innerHTML = getUserVoiceModal
    testVoice()
    setTimeout(() => {
        statusModalHandler('success')
        window.dispatchEvent(candleVoiceActionEvent)
        volSender = true
    }, 3000)
}


window.addEventListener('candleReadyToVoiceTestingEvent', readyToVoiceTestingHandler, false,);
