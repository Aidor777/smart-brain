import React from "react";

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badge: "",
    };
  }

  componentDidMount() {
    this.generateBadge(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries !== this.props.entries) {
      this.generateBadge(this.props.entries);
    }
  }

  generateBadge = (entries) => {
    fetch(
      `https://sd8cilapi8.execute-api.eu-west-3.amazonaws.com/rank?entryCount=${entries}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ badge: data.badge }))
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <div className="white f3">
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className="white f1">{this.props.entries}</div>
        <div className="white f3">{`Rank badge: ${this.state.badge}`}</div>
      </div>
    );
  }
}

export default Rank;
