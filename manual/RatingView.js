RatingView = function() {
  this.index = 0;
  this.backCallback = null;
  this.setupAspects();
  this.setupUI();
}

RatingView.prototype.setupAspects = function () {
  this.aspects = [];
  this.aspects.push(new Bath('images/Bad1.jpg'));
  this.aspects.push(new Kitchen('images/Kueche.jpg'));
};

RatingView.prototype.getNumberoOfAspects = function () {
  return this.aspects.length;
};

RatingView.prototype.getAspects = function () {
  return this.aspects;
};


RatingView.prototype.getUI = function () {
  return this.container;
};

RatingView.prototype.setupUI = function () {
  this.container = document.createElement("div");
  this.container.style.position = "absolute";
  this.container.style.width = "960px";
  this.container.style.height = this.height + "px";
  this.container.style.background = "white";
  this.container.style.verticalAlign = "bottom";
  this.container.style.border = "20px solid white";

  this.titleBar = document.createElement("div");
  this.title = document.createElement("h1");
  this.title.innerHTML = "Rating";
  this.title.style.display = "inline-block";
  this.title.style.width = "360px";
  // this.title.style.backgroundColor = "orange";

  this.back = document.createElement("span");
  this.back.innerHTML = "<<";
  this.back.style.display = "inline-block";
  // this.back.style.marginTop = "-10px";
  // this.back.style.backgroundColor = "lime";
  this.back.addEventListener('click', bindFnToContext(this.backClicked, this),false);

  this.titleBar.appendChild(this.back);
  this.titleBar.appendChild(this.title);
  this.container.appendChild(this.titleBar);

  this.nextCallback = bindFnToContext(this.next, this);
  this.aspects[this.index].registerNextEvent(this.nextCallback);
  this.container.appendChild(this.aspects[this.index].getUI());
};

RatingView.prototype.backClicked = function (e) {
  if (typeof this.backCallback === 'function') {
    this.backCallback();
  }
};

RatingView.prototype.setBackCallback = function (cb) {
  this.backCallback = cb;
};

RatingView.prototype.next = function (e) {
  var nextIndex = this.index+1;
  if(this.index==this.aspects.length-1) {
    nextIndex = 0;
  }
  this.gotTo(nextIndex);
};

RatingView.prototype.previous = function (e) {
  var nextIndex = this.index-1;
  if(this.index==0) {
    nextIndex = this.aspects.length;
  }
  this.gotTo(nextIndex);
};

RatingView.prototype.gotTo = function (nextIndex) {
  this.aspects[nextIndex].registerNextEvent(this.nextCallback);
  this.container.replaceChild(this.aspects[nextIndex].getUI(), this.aspects[this.index].getUI());
  this.index = nextIndex;
};