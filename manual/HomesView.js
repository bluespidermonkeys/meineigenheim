HomesView = function () {
  this.homes = [];
  // this.ratings.push(new Rating());
  this.setupUI();
  this.populateDummyData();
}

HomesView.prototype.getUI = function () {
  return this.container;
};

HomesView.prototype.setupUI = function () {
  this.container = document.createElement('div');
  this.container.style.position = "absolute"
  // this.container.style.width = "420px";
  // this.container.style.height = "320px";
  // this.container.style.padding = "20px 0 0 20px";
  // this.container.style.backgroundColor = "white";
// var ui = this.ratings[0].getUI();
  // this.container.appendChild(this.ratings[0].getUI());
};

HomesView.prototype.addHome = function (home) {
  this.homes.push(home);
  this.container.appendChild(home.getRatingOverView().getUI());
};

HomesView.prototype.populateDummyData = function () {
  this.addHome(new Home());
};
