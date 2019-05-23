import React from "react";

export default class FakeComponent extends React.Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}
