import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars:null,
    };
  }
  
  handleOnChange=(event)=>{ 
    return this.setState({
      maxChars:event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange} maxChars={this.props.maxChar}  name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
