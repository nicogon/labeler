// import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';
import service from './service';

function textSampleResultFiller(textSample) {
    const textLength = textSample.text.split(" ").length;
    const result = textSample.result || [];
    if (result.length !== textLength) {
        textSample.result = new Array(textLength).fill(null)
    }
    return textSample;
}


function fetchTextSamplesSuccess(textSamples) {
    const adaptedTextSamples = textSamples.map(textSampleResultFiller)
    return {type: ActionTypes.FETCH_TEXT_SAMPLES_SUCCESS, textSamples: adaptedTextSamples}
}

function updateTextSample(textId, result){
    service.updateTextSample(textId,result);
    return {type: ActionTypes.TEXT_SAMPLES_UPDATED, textId}

}

function classifyWord(textId, wordIndex, classification, dispatch) {
    return {type: ActionTypes.CLASSIFY_WORD, textId, wordIndex, classification}
}

function fetchTextSamples() {
    return(dispatch) => {
        // TODO: move fetch to service
        return fetch('https://labeler-app.herokuapp.com/textSamples/').then(res => res.json()).then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(fetchTextSamplesSuccess(res))
            return res;
        }).catch(error => {
            console.log(error)
        })
    }
}




export default {classifyWord, fetchTextSamples, updateTextSample};
