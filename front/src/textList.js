import React from 'react';
import TextSample from './textSample';

class TextList extends React.Component{
     //TODO: add props validations
    componentDidMount() {
        const {fetchTextSamples} = this.props;
        fetchTextSamples();
    }

    render(){
        const {texts, updateTextSample} = this.props;
    
        if(texts){
            return (
            <>{texts.map((text, index)=>
                <TextSample key={index} 
                    textId={text.id} 
                    text={text.text} 
                    type={text.type} 
                    hasChanged={text.changed} 
                    result={text.result}
                    updateTextSample={updateTextSample}
                />)
            }</>)
        }
        return (<>No texts loaded</>)
    }
}

export default TextList;