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
  this.title.style.width = "400px"
  this.title.innerHTML = "Mein<br />Eigenheim";
  this.title.style.color = "white";
  this.container.appendChild(this.title);
  this.container.style.position = "absolute";

  this.menu = document.createElement('div');

  this.newHome = this.__createMenuItem("Neues Objekt", 0, 260);
  this.homes = this.__createMenuItem("Objekte", 200, 260, bindFnToContext(this.homesClicked, this));
  this.mydata = this.__createMenuItem("Meine Daten", 0, 320);
  this.beratung = this.__createMenuItem("Beratung", 200, 320);

  this.container.appendChild(this.newHome);
  this.container.appendChild(this.homes);
  this.container.appendChild(this.mydata);
  this.container.appendChild(this.beratung);

  this.imp = document.createElement('img');
  this.imp.style.position = "absolute";
  this.imp.src = "images/logo_basler.jpg";
  this.imp.style.top = "460px";
  this.imp.style.left = "160px";
  this.imp.width = "60";

  this.imp.addEventListener( "click", bindFnToContext(this.clickedImp, this), false );

  this.container.appendChild(this.imp);

}

HomeScreen.prototype.homesClicked = function (e) {
  this.homeCtrl.navigateToHomes();
};

HomeScreen.prototype.clickedImp = function(e) {
  window.open('http://www.baloise.ch');
}

HomeScreen.prototype.__createMenuItem = function (text, x, y, callback) {
  var item = document.createElement('div');
  item.innerHTML = text;
  item.style.position = "absolute";
  item.style.left = x + "px";
  item.style.top = y + "px";
  item.style.width = "180px";
  item.style.height = "40px";
  item.style.color = "#009DD3";
  item.style.backgroundColor = "white";
  item.style.padding = "4px";
  item.addEventListener( "click", callback, false );

  return item;
};
