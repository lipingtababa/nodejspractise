var fib = function (n){
	if(n<2) return n;
	return fib(n-1) + fib(n-2);
};

var Obj = function(){};

Obj.prototype.doSomething = function(arg1_){
	var callback_ = arguments[arguments.length-1];
	console.log("typeof callback_ is "+typeof(callback_))
	callback = typeof callback_ == 'function' ? callback_ : null;
	var arg1 = typeof arg1_ === 'number' ? arg1_ : null;
	if(!arg1){
		//Not good code. Callback could be null
		return callback(new Error('First arg missing or not a number'));
	}

	process.nextTick(function(){
		//Block on CPU
		var data = fib(arg1);
		callback(null, data);
	});
};

var test = new Obj();
var number = 100;

test.doSomething(number, function(err, value){
	if(err){
		console.error(err);
	}
	else{
		console.log("fibonaci value for %d is %d\n", number, value);
	}
}
);

console.log("Called doSomething");

