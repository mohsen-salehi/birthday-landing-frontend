const candleMicrophonePermissionEvent = new CustomEvent("candleMicrophonePermissionEvent")


function authGetCodeEventHandler(arguments) {


    let otpCodes = []
    let formElement = document.getElementById("formSection")
    formElement.innerHTML = getOtpFormElement
    let getOtpFrom = document.getElementById("get_otp_form")

    const inputs = document.getElementById("inputs");

    inputs.addEventListener("input", function (e) {
        const target = e.target;
        const val = target.value;
        otpCodes.push(val)
        if (isNaN(val)) {
            target.value = "";
            return;
        }

        if (val !== "") {
            target.classList.replace("input-error-styles", "input-success-styles")
            const next = target.nextElementSibling;
            if (next) {
                next.focus();
            }
        }

    });

    inputs.addEventListener("keyup", function (e) {
        const target = e.target;
        const key = e.key.toLowerCase();
        if (key === "backspace" || key === "delete") {
            target.value = "";
            otpCodes.pop()
            const prev = target.previousElementSibling;
            if (prev) {
                prev.focus();
            }
            return;
        }
    });

    getOtpFrom.addEventListener("submit", async (e) => {
        e.preventDefault()
        if (otpCodes.length === 5) {
            for (let i = 0; i < inputs.children.length; i++) {
                inputs.children[i].classList.replace("input-error-styles", "input-success-styles")
            }
            await sendOtpCode(otpCodes , arguments?.detail)

        } else {
            for (let i = 0; i < inputs.children.length; i++) {
                inputs.children[i].classList.add("input-error-styles")
            }
            otpCodes = []
            getOtpFrom.reset()
        }

    })
}

const sendOtpCode = async (token, contact) => {
    let formElement = document.getElementById("formSection")
    // for test
    formElement.innerHTML = happyBirthDayElanza
    try {
        let [httpStatus, data] = await post('/auth/verify', {token, contact})
        if (httpStatus && data.status) {
            localStorage.setItem("token", JSON.stringify(data?.data?.token))
            window.dispatchEvent(candleMicrophonePermissionEvent)
            formElement.innerHTML = happyBirthDayElanza
        }
    } catch (e) {
        exceptionHandler(e.response.status)
    }
}


window.addEventListener('authGetCodeEvent', authGetCodeEventHandler, false);