/* eslint-disable no-useless-constructor */
import logo from './logo.svg';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import './App.css';
import React, {Component} from 'react';

const STARTING_TEXT = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: STARTING_TEXT
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    return(
      this.setState({
        inputValue: event.target.value
      }));
  }

  render(){
    return (
      <div id="megatainer">
        <EditorWindow 
          input={this.state.inputValue}
          handleChange={this.handleChange} />
        <DisplayWindow 
          input={this.state.inputValue} />
      </div>
    );
  }
}

class EditorWindow extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="mainWindow">
        <HeaderBar name="Editor"/>
        <textarea className="content" type="text" id="editor" value={this.props.input} onChange={this.props.handleChange}></textarea>
      </div>
    );
  }
};

const DisplayWindow = (props) => {
  return (
    <div className="mainWindow">
      <HeaderBar name="Output"/>
      {/* */}
      <div className="content" id="preview"><ReactMarkdown>{props.input}</ReactMarkdown></div>
      
    </div>
  );
};

//this.props.

const HeaderBar = (props) => {
  return (
    <div className="windowHeaderBar">
      <i className="fab fa-markdown"></i>
      <p className="titleBox">
        {props.name}
      </p>
    </div>
  );
};

export default App;
