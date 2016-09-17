HomesView = function () {
  this.homes = [];
  this.setupUI();
  this.populateDummyData();
  this.title = null;

  window.me.homesview = this;
}

HomesView.prototype.getUI = function () {
  return this.container;
};

HomesView.prototype.setupUI = function () {
  this.container = document.createElement('div');
  this.container.style.position = "absolute"

  this.titleBar = document.createElement("div");
  this.titleBar.style.backgroundColor = "#009DD3"
  this.titleBar.style.border = '20px solid white';
  this.titleBar.style.marginLeft = "60px";
  this.titleBar.style.marginBottom = "60px";
  this.title = document.createElement("h1");
  this.title.innerHTML = "Objekte";
  this.title.style.display = "inline-block";
  this.title.style.width = "690px";
  this.title.style.color = "white";

  this.backImage = document.createElement('img');
  this.backImage.src = 'images/back.png';
  this.backImage.addEventListener('click', bindFnToContext(this.backClicked, this),false);
  this.backImage.height = 60;
  this.backImage.style.marginLeft = "60px";

  this.titleBar.appendChild(this.backImage);
  this.titleBar.appendChild(this.title);
  this.container.appendChild(this.titleBar);

};

HomesView.prototype.backClicked = function (e) {
  // debugger;
  window.me.controller.navigateHome();
};

HomesView.prototype.addHome = function (home) {
  this.homes.push(home);
  home.registerDetailViewListener(bindFnToContext(this.singleDisplay, this));
  home.registerOverviewListener(bindFnToContext(this.showAll, this));
  this.container.appendChild(home.getRatingOverView().getUI());
};

HomesView.prototype.singleDisplay = function (home) {
  this.titleBar.style.display = "none";
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
  this.titleBar.style.display = "block";
  for (var h in this.homes) {
    if (this.homes.hasOwnProperty(h)) {
      this.homes[h].show();
    }
  }
};

HomesView.prototype.populateDummyData = function () {
  var data1 = {'image':'images/Aussen1.jpg', 'cost':9, 'likes':2, 'favorites':1, 'renovations':0};
  var data2 = {'image':'images/Aussen2.jpg', 'cost':8, 'likes':1, 'favorites':0, 'renovations':1};

  var first = new Home(data1)
  // first.setPosition(60, )
  this.addHome(first);
  var second = new Home(data2);
  second.setPosition(60, 860);
  this.addHome(second);
};
