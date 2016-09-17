HomeController = function(container) {

	this.homesView = new HomesView();
	this.newObjectView = new NewObjectView();
	this.homescreen = new HomeScreen(this);
	this.dataView = new MyDataView();

	this.container = container;
	this.attachUI();

}

HomeController.prototype.navigateToHomes = function () {
	// debugger;
	this.container.removeChild(this.container.children[0]);
	this.container.appendChild(this.homesView.getUI());
};

HomeController.prototype.navigateToData = function () {
	this.container.removeChild(this.container.children[0]);
	this.container.appendChild(this.dataView.getUI());
}

HomeController.prototype.navigateToNewObject = function () {
	this.container.removeChild(this.container.children[0]);
	this.container.appendChild(this.newObjectView.getUI());
}

HomeController.prototype.attachUI2 = function() {
	this.container.appendChild(this.homesView.getUI());
}

HomeController.prototype.clickHandler = function(e) {
	console.log('handler');
	this.renovation = true;
}


HomeController.prototype.attachUI = function() {
	this.container.style.width = "960px";
	this.container.style.border = "2px solid magenta";
	this.container.style.textAlign = "center";

	this.container.appendChild(this.homescreen.getUI());


	// this.container.appendChild(this.homesView.getUI());

return;

	this.button = document.createElement('div');
	this.button.innerHTML = "mybutton";

	this.button.addEventListener( "click", bindFnToContext(this.clickHandler), false );

	this.container.appendChild(this.button);
}

HomeController.prototype.clickHandler = function(e) {
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
