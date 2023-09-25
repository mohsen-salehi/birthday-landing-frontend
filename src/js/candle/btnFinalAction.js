// TODO  before End
const candleFinalActionEvent = new CustomEvent("candleFinalActionEvent")
function btnFinalActionHandler() {
    let modalStage = document.getElementsByTagName("modal")[0]
    let formElement = document.getElementById("formSection")
    let cakeElement = document.getElementById("cake_image")
    let turnOfBtn = document.getElementById("turnOffCandle")
    formElement.innerHTML = clickTurnOffText
    modalStage.classList.replace("show-modal" , "hide-modal")
    turnOfBtn.classList.remove("d-none")
    turnOfBtn.addEventListener("click" , () => {
        cakeElement.classList.add("cake-image-off")
        turnOfBtn.classList.add("d-none")
        setTimeout(() => {
            window.dispatchEvent(candleFinalActionEvent)
            formElement.innerHTML = ''
        } , 1000)
    })
}
window.addEventListener('candleBtnFinalActionEvent', btnFinalActionHandler, false);
