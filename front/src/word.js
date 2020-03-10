import React from 'react';
import utils from './utils'
import {
    Button,
    Overlay,
    Tooltip
} from 'react-bootstrap';

class Word extends React.Component {
    state = {
        highlighted: false,
        showTooltip: false
    };
  
    constructor() {
        super();
        this.inputRef = null;
    }

    onClickFn = () => {
        this.setState({
            highlighted: true,
            showTooltip: !this.state.showTooltip
        });
    }

    dismiss = () => {
        const {textId, wordIndex, classifyAsNothingWordAction} = this.props
        classifyAsNothingWordAction(textId, wordIndex);
        this.closeTooltipFn();
    }

    closeTooltipFn = () => {
        this.setState({showTooltip: false});
    }

    classifyWord = (textId, wordIndex, key) => {
        this.closeTooltipFn();
        this.props.classifyWordAction(textId, wordIndex, key);
    }

    generateButton = ({key, value}) => {
        const {textId, wordIndex} = this.props;
        return (
            <Button className='tooltip-button' onClick={() => this.classifyWord(textId, wordIndex, key)}>{value}</Button>
        )
    }

    render() {
        const {options} = this.props;
        return (
            <>
                <span   ref={inputRef => {this.inputRef = inputRef}} 
                        onClick={this.onClickFn}
                        style={{background: utils.getColor(this.props.wordState)}
                }>
                        {this.props.word}
                </span>

                <Overlay rootClose
                    onHide={this.closeTooltipFn}
                    target={this.inputRef}
                    show={this.state.showTooltip}
                    placement="top">

                    <Tooltip className='customTooltip'>
                        <Button variant="outline-secondary" onClick={this.dismiss}>
                            Dismiss
                        </Button>
                        <div>{options.map(this.generateButton)}</div>
                    </Tooltip>
                </Overlay>
            </>
        );
    }
}

export default Word;
