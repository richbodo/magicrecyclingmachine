Router.configure({
  layoutTemplate:'layout'
});

Router.route('/', function(){
  this.render('home');
});

// create route for item in collection
Router.route('/item/:_id', {
  template: 'item',
  data: function() {
    var currentItem = this.params._id;
    return Images.findOne({ _id: Images})
  }
});

Router.route('/signIn', function(){
  this.render('signIn');
});