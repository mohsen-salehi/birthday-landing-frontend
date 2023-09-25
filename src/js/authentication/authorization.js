const userToken = JSON.parse(localStorage.getItem("token"))
if(userToken){
    const candleMicrophonePermissionEvent = new CustomEvent('candleMicrophonePermissionEvent');
    // const candleFinalActionEvent = new CustomEvent('candleFinalActionEvent');
    window.dispatchEvent(candleMicrophonePermissionEvent);
    document.getElementById("modal").classList.add("hideModal")
}else{
    const authGetMobileEvent = new CustomEvent('authGetMobileEvent');
    window.dispatchEvent(authGetMobileEvent)
}