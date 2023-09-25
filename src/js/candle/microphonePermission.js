// TODO  1
const candleReadyToVoiceTestingEvent = new CustomEvent('candleReadyToVoiceTestingEvent');
const candleBtnFinalActionEvent = new CustomEvent('candleBtnFinalActionEvent');

function nextEventHandler(state = 'granted') {
    if (state === 'granted') {
        window.dispatchEvent(candleReadyToVoiceTestingEvent)
    } else {
        window.dispatchEvent(candleBtnFinalActionEvent)
    }
}

function microphonePermissionEventHandler() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            window.stream = stream
            navigator.permissions.query({
                name: 'microphone'
            })
            return nextEventHandler("granted")
        })
        .catch(function(err) {
            return nextEventHandler("false")
        });
    // navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
    //     window.stream = stream
    //     navigator.permissions.query({
    //         name: 'microphone'
    //     }).then(function (permissionStatus) {
    //         console.log(permissionStatus)
    //         return nextEventHandler(this.state)
    //     })
    // });

}

window.addEventListener('candleMicrophonePermissionEvent', microphonePermissionEventHandler, false);
