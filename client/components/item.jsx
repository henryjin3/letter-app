Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.item.text}</li>
    )
  }
});
