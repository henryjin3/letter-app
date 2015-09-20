App = React.createClass({
  getItems() {
    return [
      { _id: 1, text: "Item 1"},
      { _id: 2, text: "Item 2"},
      { _id: 3, text: "Item 3"}
    ];
  },

  renderItems() {
    return this.getItems().map((item) => {
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
