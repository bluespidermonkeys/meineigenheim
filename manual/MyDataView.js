MyDataView = function() {
	this.setupUI();
}

MyDataView.prototype.getUI = function() {
	return this.container;
};

MyDataView.prototype.setupUI = function() {
	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = "920px";
	this.container.style.height = this.height + "px";
	this.container.style.background = "white";
	this.container.style.verticalAlign = "bottom";
	this.container.style.border = "20px solid white";

	this.titleBar = document.createElement("div");
	this.title = document.createElement("h1");
	this.title.innerHTML = "Meine Daten";
	this.title.style.display = "inline-block";
	this.title.style.width = "360px";

	this.image = document.createElement("img");
	this.image.src = 'images/Meine_Daten.PNG';
	this.image.addEventListener('click',
			bindFnToContext(this.dataEntryClicked, this), false);
	this.image.width = 700;

	this.titleBar.appendChild(this.title);
	this.container.appendChild(this.titleBar);
	this.container.appendChild(this.image);
};

MyDataView.prototype.dataEntryClicked = function(e) {
	var parent = this.container.parentNode;
	parent.removeChild(this.container);
	debugger; // haben wir die variable home?
}
