// TODO  3
const finalActionEvent = new CustomEvent('candleFinalActionEvent');
let flag = 1

function flameClassByVol(vol) {
    let max = window.maximumUserVoice
    // let step5 = Math.round((max * 90) / 100)
    // let step4 = Math.round((max * 83) / 100)
    // let step3 = Math.round((max * 73) / 100)
    // let step2 = Math.round((max * 47) / 100)
    // let step1 = Math.round((max * 27) / 100)

    // if (vol > step1 && vol < step2) {
    //     return 'flame-1'
    // }
    // if (vol >= step2 && vol < step3) {
    //     return 'flame-2'
    // }
    // if (vol >= step3 && vol < step4) {
    //     return 'flame-3'
    // }
    // if (vol >= step4 && vol < step5) {
    //     return 'flame-4'
    // }
    // if (vol >= step5 && vol < max) {
    //     return 'flame-6'
    // }
    if (vol >= max) {
        return "cake-image-off"
    }
    return 'cake_image'
}

function actionHandler(vol) {
    // const flameSelector = document.querySelectorAll('[data-flame=flameSelector]')
    // for (let i = 0; i < flameSelector.length; i++) {
    //     if (!flameClassByVol(vol)) {
    //         flameSelector[i].innerHTML = '';
    //     } else {
    //         flameSelector[i].className = flameClassByVol(vol)
    //     }
    // }
    const cakeElement = document.getElementById("cake_image")
    if (!flameClassByVol(vol)) {
        cakeElement.classList.replace(flameClassByVol(vol), "cake_image")
    } else {
        cakeElement.classList.replace("cake_image", flameClassByVol(vol))
    }
}

function voiceActionHandler() {
    window.addEventListener('candleUserVolEvent', function (eventArguments) {
        actionHandler(eventArguments.detail)
        flag++
        if (flag === 2) {
            let formElement = document.getElementById("formSection")
            formElement.innerHTML = readyToBlowingText
        }
        // document.getElementById("show-max-voice").innerHTML = "max " + window.maximumUserVoice
        // document.getElementById("show-current-voice").innerHTML = "current " + eventArguments.detail
        if (eventArguments.detail > window.maximumUserVoice) {
            window.dispatchEvent(finalActionEvent)
            flag = 0
        }
        // else{
        //     if (flag !== 0) {
        //         flag = -1
        //         let modalStage = document.getElementsByTagName("modal")[0]
        //         setTimeout(() => {
        //             modalStage.classList.add("show-modal")
        //             modalStage.innerHTML = failedModal
        //         }, 1000)
        //     }
        // }

    }, false);


}

window.addEventListener('candleVoiceActionEvent', voiceActionHandler, false,);
