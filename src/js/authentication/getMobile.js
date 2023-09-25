
function authGetMobileEventHandler() {
    let contact = ""
    let iconCheck = document.getElementById("icon_check")
    let inputMobile = document.getElementById("user_mobile")
    let getMobileForm = document.getElementById("get_mobile_form")
    getMobileForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        contact = (e.target["user_mobile"].value)
        if (contact.length === 11) {
            inputMobile.classList.add("input-success-styles")
            inputMobile.classList.replace("input-error-styles" , "input-success-styles")
            iconCheck.classList.remove("d-none")
            iconCheck.children[0].setAttribute("src" , "src/icon/tick.svg")
            // e.target.reset()
            await sendContact(contact)
        } else {
            inputMobile.classList.replace("input-success-styles" , "input-error-styles")
            inputMobile.classList.replace("input-styles" , "input-error-styles")
            iconCheck.children[0].setAttribute("src" , "src/icon/close-circle.svg")
            iconCheck.classList.remove("d-none")
            // alert("شماره موبایل صحیح نیست !")
        }
    })
}

const sendContact = async (contact) => {
    const authGetCodeEvent = new CustomEvent('authGetCodeEvent', {detail: contact});
    window.dispatchEvent(authGetCodeEvent)
    try {
        let [httpStatus, data] = await post('/auth/request', {contact})
        if (httpStatus && data.status) {
            const authGetCodeEvent = new CustomEvent('authGetCodeEvent', {detail: contact});
            window.dispatchEvent(authGetCodeEvent)
        }
    } catch (e) {
        console.log(e)
        // exceptionHandler(e.response.status)
    }
}

window.addEventListener('authGetMobileEvent', authGetMobileEventHandler, false);