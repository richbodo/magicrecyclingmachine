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
    console.log(this.params._id);
    var currentItem = this.params._id;
    return Images.findOne({ _id: currentItem})
  }
});

Router.route('/signIn', function(){
  this.render('signIn');
});

Router.route('/about', function(){
  this.render('about');
});

Router.route('/profile', function(){
  this.render('profile')
})