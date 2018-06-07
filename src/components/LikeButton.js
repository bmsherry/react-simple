import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({ liked: !this.state.liked });
  }
  render() {
    const text = this.state.liked ? "喜欢" : "不喜欢";
    return (
      <p onClick={this.handleClick}>
        你<b>{text}</b>我。点我切换状态。
      </p>
    );
  }
}

export default LikeButton;
