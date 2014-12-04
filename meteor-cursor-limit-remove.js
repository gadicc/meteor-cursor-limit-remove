if (Meteor.isClient) {
  items = new Mongo.Collection(null);

  Template.body.helpers({
    items: function() {
      return items.find({}, {sort: {name: 1}, limit: 1 });
    }
  });

  var start;
  Template.body.rendered = function() {
    start = Date.now();
    for (var i=400; i > 0; i--)
      items.insert({name: 'b' + ("0000"+i).slice(-5)});
    items.insert({name: 'apple'});
  };

  var lastCreateTime;
  Template.item.created = function() {
    lastCreateTime = Date.now();
//    console.log('created', this.data.name);
  };

  var diffRecord = 0;
  Template.item.destroyed = function() {
    var diff;
    time = Date.now();
    diff = time - lastCreateTime;
    if (diff > diffRecord * 1.1) {
      diffRecord = diff;
      console.log('lifetime of ' + this.data.name + ' was ' + diff + 'ms');
    }
//    console.log('destroy', this.data.name);
  };

  Template.item.rendered = function() {
    console.log('render', this.data.name);
    console.log('total time: ' + (Date.now() - start) + 'ms');
  };
}