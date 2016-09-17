NewObjectView = function() {
	this.setupUI();
}

NewObjectView.prototype.getUI = function() {
	return this.container;
};

NewObjectView.prototype.setupUI = function() {
	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = "400px";
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

	this.titleBar.appendChild(this.title);
	this.container.appendChild(this.titleBar);
	this.container.appendChild(this.image);

};
