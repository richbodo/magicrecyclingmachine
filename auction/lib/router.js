
Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', function(){
	this.render('home');
});

Router.route('/signin', function(){
  this.render('signin');
});