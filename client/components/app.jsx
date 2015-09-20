App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      items: Items.find({}).fetch()
    };
  },

  renderItems() {
    return this.data.items.map((item) => {
      return <Item key={item._id} item={item} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Letter App</h1>
        </header>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
});
