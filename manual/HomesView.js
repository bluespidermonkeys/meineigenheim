HomesView = function () {
  this.homes = [];
  this.setupUI();
  this.populateDummyData();
}

HomesView.prototype.getUI = function () {
  return this.container;
};

HomesView.prototype.setupUI = function () {
  this.container = document.createElement('div');
  this.container.style.position = "absolute"
};

HomesView.prototype.addHome = function (home) {
  this.homes.push(home);
  home.registerDetailViewListener(bindFnToContext(this.singleDisplay, this));
  home.registerOverviewListener(bindFnToContext(this.showAll, this));
  this.container.appendChild(home.getRatingOverView().getUI());
};

HomesView.prototype.singleDisplay = function (home) {
  for (var h in this.homes) {
    if (this.homes.hasOwnProperty(h)) {
      if(this.homes[h]!==home[0]) {
        this.homes[h].hide();
      }
      //  else {
      //   debugger;
      // }
    }
  }

};

HomesView.prototype.showAll = function () {
  for (var h in this.homes) {
    if (this.homes.hasOwnProperty(h)) {
      this.homes[h].show();
    }
  }
};

HomesView.prototype.populateDummyData = function () {
  this.addHome(new Home('images/Aussen1.jpg'));
  var second = new Home('images/Aussen2.jpg');
  second.setPosition(0, 320);
  this.addHome(second);
};
