
Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', function(){
	this.render('home');
});

Router.route('/signIn', function(){
  this.render('signIn');
});