Home = function(container) {
	
	this.renovation = false;
	this.button = null;
	this.container = container;
	this.attachUI();
}

Home.prototype.attachUI = function() {
	this.button = document.createElement('div');
	this.button.innerHTML = "mybutton";
	
	this.button.addEventListener( "click", this.clickHandler, false );
	
	this.container.appendChild(this.button);
}

Home.prototype.clickHandler = function(e) {
	debugger;
	console.log('handler');
	this.renovation = true;
}



function bindFnToContext( fn, context ) {
	if ( typeof fn != "function") { 
		throw "not a Function, can not bind " + fn;
	}

//    if (arguments.length < 2 && (typeof arguments[0] === "undefined")) return this;	

	var args = Array.prototype.slice.call(arguments, 2);
	
	var boundFn = function () {
    	var a = args.concat( arguments );
    	return fn.apply(context, a);
	}
	
	return boundFn;
}