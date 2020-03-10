import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron
} from 'react-bootstrap';
import Word from './wordContainer'


class TextSample extends React.Component {

    componentDidUpdate = () => {
      const {hasChanged, updateTextSample, textId, result} = this.props;
      if(hasChanged){
        updateTextSample(textId, result);
      }
    }
    getTextSampleComponent = () => {
        const {type, text, textId} = this.props;
        let options;

        // This a strategy to select the kind of textSample we are gonna show
        // In this case is to label word by word with the following configuration
        if (type === 'LABELER_GOOD_BAD') {
            options = [
                {
                    value: 'Good word',
                    key: 'GOOD'
                }, {
                    value: 'Bad word',
                    key: 'BAD'
                }
            ]
            return <WordLabeler text={text} options={options} textId={textId}/>
        }
    }

    render() {
        const textSampleComponent = this.getTextSampleComponent();
        return (
            <Jumbotron> {textSampleComponent} </Jumbotron>
        )
    }

}

// Wordlabeler could be one kind of component. Other component could be one evaluating the sentiment in the hole sentence
class WordLabeler extends React.Component {

    buildWord = (word, index) => {
        // TODO: refator this code to improve legibility
        const {textId, options} = this.props;
        const space = index === 0 ? '' : ' ';
        return (
            <>{space}
                <Word options={options}
                    textId={textId}
                    wordIndex={index}
                    word={word}/>
            </>
        )
    }
    render() {
        return (
            <span className='text'>
              {this.props.text.split(" ").map((word, index) => this.buildWord(word, index))} 
            </span>
        )
    }
}

export default TextSample;
