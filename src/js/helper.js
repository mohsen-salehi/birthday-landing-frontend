const post = async (path, data = {} , headersToken = '') => {
    let response = await fetch(`https://apilanding.elanzacom.ir/api${path}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : "Bearer " + headersToken
        },
        body: JSON.stringify(data)
    })
    return [response.status, await response.json()]
}

const exceptionHandler = (exception) => {
    console.log(exception)
}