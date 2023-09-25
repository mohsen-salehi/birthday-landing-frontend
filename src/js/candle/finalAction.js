// TODO  End
async function finalActionHandler() {
    let modalStage = document.getElementsByTagName("modal")[0]
    setTimeout(() => {
        modalStage.classList.add("show-modal")
        modalStage.innerHTML = bonusModal
    } , 2000)
    window.volScannerBeActive = false
    const userToken = JSON.parse(localStorage.getItem("token"))
    const [httpStatus , data] = await post("/bonus" , {} , userToken )

    data?.data?.map(item => (
        document.getElementById("bonus_list").innerText = item?.bonus?.title
    ))
}
window.addEventListener('candleFinalActionEvent', finalActionHandler, false,);
