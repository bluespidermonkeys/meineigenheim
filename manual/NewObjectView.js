NewObjectView = function() {
	this.setupUI();
}

NewObjectView.prototype.getUI = function() {
	return this.container;
};

NewObjectView.prototype.setupUI = function() {
	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = "920px";
	this.container.style.height = this.height + "px";
	this.container.style.background = "white";
	this.container.style.verticalAlign = "bottom";
	this.container.style.border = "20px solid white";

	this.titleBar = document.createElement("div");
	this.title = document.createElement("h1");
	this.title.innerHTML = "Neues Objekt";
	this.title.style.display = "inline-block";
	this.title.style.width = "360px";

	this.image = document.createElement("img");
	this.image.src = 'images/Eigenheim_erfassen.PNG';
	this.image.addEventListener('click',
			bindFnToContext(this.immoscoutClicked, this), false);
	this.image.width = 700;

	this.titleBar.appendChild(this.title);
	this.container.appendChild(this.titleBar);
	this.container.appendChild(this.image);

};

NewObjectView.prototype.immoscoutClicked = function(e) {
	this.image.src = 'images/immoscout.png';
	this.image.addEventListener('click',
			bindFnToContext(this.objectClicked, this), false);
}


NewObjectView.prototype.objectClicked = function(e) {
	var newHome = new Home({'image':'images/Aussen1.jpg', 'cost':9, 'likes':0, 'favorites':0, 'renovations':0});
	window.me.homesview.addHome(newHome);
	newHome.showRatingView();
	window.me.controller.navigateToHomes()
}
