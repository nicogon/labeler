import { connect } from 'react-redux'
import Word from './word'
import actions from './actions'


function wordStateSelector(wordIndex,textId,state){
  //(state.texts)
  const textData = state.texts.find(text => text.id === textId);
  if (!textData) return;
  let result = textData.result;

  return result[wordIndex];
}
const mapStateToProps = (state, ownProps) => {
  const {wordIndex,textId} = ownProps;
  return {wordState: wordStateSelector(wordIndex,textId,state)}
};

const mapDispatchToProps = (dispatch) => {
    return {
      classifyWordAction: (textId,wordIndex, key) => dispatch(actions.classifyWord(textId,wordIndex,key,dispatch)),
      //TODO: remove this, can use the one from above
      classifyAsNothingWordAction: (textId,wordIndex) => dispatch(actions.classifyWord(textId,wordIndex, null))

    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Word);