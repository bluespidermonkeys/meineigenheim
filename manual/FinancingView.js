FinancingView = function() {
	this.setupUI();
}

FinancingView.prototype.getUI = function() {
	return this.container;
};

FinancingView.prototype.setupUI = function() {
	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = "920px";
	this.container.style.height = this.height + "px";
	this.container.style.background = "white";
	this.container.style.verticalAlign = "bottom";
	this.container.style.border = "20px solid white";

	this.titleBar = document.createElement("div");
	this.title = document.createElement("h1");
	this.title.innerHTML = "Finanzieren und versichern";
	this.title.style.display = "inline-block";
	this.title.style.width = "360px";

	this.image = document.createElement("img");
	this.image.src = 'images/Finanzieren.PNG';
	this.image.addEventListener('click',
			bindFnToContext(this.dataEntryClicked, this), false);
	this.image.width = 700;

	this.titleBar.appendChild(this.title);
	this.container.appendChild(this.titleBar);
	this.container.appendChild(this.image);
};

FinancingView.prototype.dataEntryClicked = function(e) {
	var parent = this.container.parentNode;
	parent.removeChild(this.container);
	parent.appendChild(window.me.controller.homescreen.getUI());
}
