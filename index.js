var Cat = require('./cat');
var Mouse = require('./mouse')
var cat = new Cat('Tom');
var mouse = new Mouse('micky');
cat.sayHi();
cat.eat(mouse);
console.log(cat);
