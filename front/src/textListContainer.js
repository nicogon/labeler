import {connect} from 'react-redux'
import TextList from './textList'
import actions from './actions'

const mapStateToProps = state => ({texts: state.texts});
const mapDispatchToProps = dispatch => {
    return {
        fetchTextSamples: () => dispatch(actions.fetchTextSamples()),
        updateTextSample: (textId, result) => dispatch(actions.updateTextSample(textId, result))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextList);
