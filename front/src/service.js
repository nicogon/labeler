const updateTextSample = (textId, result) => {
    // TODO: refactor using await async
    return fetch(`https://labeler-app.herokuapp.com/textSamples/${textId}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({result})
    }).then(res => res.json()).then(res => {
        if (res.error) {
            throw(res.error);
        }
        return res;
    }).catch(error => {
        console.log(error)
    })

}

export default {updateTextSample}
