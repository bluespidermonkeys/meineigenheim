HomeScreen = function(homeCtrl) {
  this.homeCtrl = homeCtrl;
  this.setupUI();
};

HomeScreen.prototype.getUI = function () {
  return this.container;
}

HomeScreen.prototype.setupUI = function () {
  this.container = document.createElement('div');
  this.title = document.createElement('h1');
  this.title.style.width = "960px";
  this.title.style.fontSize = "96pt";
  this.title.innerHTML = "Mein<br />Eigenheim";
  this.title.style.color = "white";
  this.container.appendChild(this.title);
  this.container.style.position = "absolute";

  this.menu = document.createElement('div');

  this.newHome = this.__createMenuItem("Neues Objekt", "images/Icon_Neues_Objekt.PNG", 40, 560, bindFnToContext(this.newObjectClicked, this));
  this.homes = this.__createMenuItem("Objekte", "images/Icon_Objekte.PNG", 500, 560, bindFnToContext(this.homesClicked, this));
  this.mydata = this.__createMenuItem("Meine Daten", "images/Icon_Meine_Daten.PNG", 40, 820, bindFnToContext(this.dataClicked, this));
  this.beratung = this.__createMenuItem("Finanzieren und versichern", "images/Icon_Beratung.PNG", 500, 820, bindFnToContext(this.financingClicked, this));

  this.container.appendChild(this.newHome);
  this.container.appendChild(this.homes);
  this.container.appendChild(this.mydata);
  this.container.appendChild(this.beratung);

  this.imp = document.createElement('img');
  this.imp.style.position = "absolute";
  this.imp.src = "images/logo_basler.jpg";
  this.imp.style.top = "1260px";
  this.imp.style.left = "400px";
  this.imp.width = "160";
  this.imp.style.border = "20px solid #ffffff";

  this.imp.addEventListener( "click", bindFnToContext(this.clickedImp, this), false );

  this.container.appendChild(this.imp);

}

HomeScreen.prototype.homesClicked = function (e) {
  this.homeCtrl.navigateToHomes();
};

HomeScreen.prototype.dataClicked = function (e) {
	this.homeCtrl.navigateToData();
}

HomeScreen.prototype.newObjectClicked = function (e) {
	this.homeCtrl.navigateToNewObject();
};

HomeScreen.prototype.financingClicked = function (e) {
	this.homeCtrl.navigateToFinancing();
};

HomeScreen.prototype.clickedImp = function(e) {
  window.open('http://www.baloise.ch');
}

HomeScreen.prototype.__createMenuItem = function (text, imgurl, x, y, callback) {
  var item = document.createElement('div');
  item.innerHTML = text;
  item.style.position = "absolute";
  item.style.left = x + "px";
  item.style.top = y + "px";
  item.style.width = "380px";
  item.style.height = "120px";
  item.style.color = "#009DD3";
  item.style.backgroundColor = "white";
  item.style.padding = "4px";
  item.style.paddingTop = "60px";
  item.style.fontSize = "38pt";
  item.style.fontWeight = "bold";
  item.style.background = "white url("+imgurl+") no-repeat center 10px";

  item.addEventListener( "click", callback, false );

  return item;
};
