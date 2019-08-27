var chalk = require('chalk');

function Cat(name) {
	this.Name = name;
	this.Stomach = [];
}
Cat.prototype.eat = function(mouse) {
	this.Stomach.push(mouse);
};
Cat.prototype.sayHi = function() {
	console.log('Hi i am a cat, my name is '+ chalk.blue(this.Name));
};
module.exports = Cat;