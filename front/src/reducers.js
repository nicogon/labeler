import ActionTypes from './actionTypes.js';

const classifyReducer = (textId,wordIndex,classification, texts) => {
    return texts.map((text) => {
        if(text.id === textId) {
            text.changed = true;
            text.result[wordIndex] = classification;
        }
        return text;
    });
}

const sampleUpdatedReducer = (textId, texts) => {
    return texts.map((text) => {
        if(text.id === textId) {
            text.changed = false;
        }
        return text;
    });
}

export default (state, action) => {
    switch (action.type) {
        case ActionTypes.CLASSIFY_WORD:
            return {...state,texts:classifyReducer(action.textId,action.wordIndex,action.classification, state.texts)}
        case ActionTypes.FETCH_TEXT_SAMPLES_SUCCESS:
            return {...state,texts:action.textSamples}
        case ActionTypes.TEXT_SAMPLES_UPDATED:
            return {...state,texts:sampleUpdatedReducer(action.textId,state.texts)}
        case ActionTypes.FETCH_TEXT_SAMPLES:
          return {
          rotating: action.payload
        };
      default:
        return state;
    }
};