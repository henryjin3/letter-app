if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    items: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}
