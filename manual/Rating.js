Rating = function(ctrl, items, data) {
  this.ctrl = ctrl;
  this.like = null;
  this.renovation = null;
  this.cost = null;
  this.favorites = null;
  this.image = data.image;
  this.data = data;

  this.height = 400;
  this.items = items;

  this.setupUI();
  this.initUI();
}

Rating.prototype.initUI = function () {
  try {
    this.setLikeValue(this.data.likes);
  } catch (e) {
    this.setLikeValue(0);
  }

  try {
    this.setRenovationValue(this.data.renovations);
  } catch (e) {
      this.setRenovationValue(0);
  }

  try {
    this.setFavoritesValue(this.data.favorites);
  } catch (e) {
    this.setFavoritesValue(0);
  }

};

Rating.prototype.__calculateDisplayValue = function (value) {
  return (this.height / this.items) * value;
}

Rating.prototype.setLikeValue = function (value) {
  this.likeValue = value;
  this.like.style.height = this.__calculateDisplayValue(value) + "px";
};

Rating.prototype.setRenovationValue = function (value) {
  this.renovationValue = value;
  this.renovation.style.height = this.__calculateDisplayValue(value) + "px";
};

Rating.prototype.setCostValue = function (value) {
  this.costValue = value;
  this.cost.style.height = this.__calculateDisplayValue(value) + "px";
};

Rating.prototype.setFavoritesValue = function (value) {
  this.favoritesValue = value;
  this.favorites.style.height = this.__calculateDisplayValue(value) + "px";
};

Rating.prototype.getUI = function() {
  return this.container;
}

Rating.prototype.imageClicked = function (e) {
  this.ctrl.showRatingView();
};

Rating.prototype.setupUI = function() {
  this.container = document.createElement("div");
  this.container.style.position = "absolute";
  this.container.style.width = "700px";
  this.container.style.left = "60px";
  this.container.style.height = this.height + "px";
  this.container.style.background = "transparent url('" + this.image + "')";
  this.container.style.verticalAlign = "bottom";
  this.container.style.border = "60px solid white";

  this.container.addEventListener('click', bindFnToContext(this.imageClicked, this), false);

  this.setupCost();
  this.container.appendChild(this.cost);

  this.setupLike();
  this.container.appendChild(this.like);

  this.setupFavorites();
  this.container.appendChild(this.favorites);

  this.setupRenovation();
  this.container.appendChild(this.renovation);
}

Rating.prototype.setPosition = function (x,y) {
  this.container.style.top = y + "px";
  this.container.style.left = x + "px";
};

Rating.prototype.setupCost = function() {
  this.cost = this.createRate("yellow");
  this.cost.style.left = "670px";
}

Rating.prototype.setupLike = function() {
  this.like = this.createRate("red");
  this.like.style.left = "640px";
}

Rating.prototype.setupFavorites = function() {
  this.favorites = this.createRate("magenta");
  this.favorites.style.left = "610px";
}

Rating.prototype.setupRenovation = function() {
  this.renovation = this.createRate("dodgerblue");
  this.renovation.style.left = "590px";
}

Rating.prototype.createRate = function(color) {
  var rate = document.createElement('div');
  rate.style.position = "absolute";
  rate.style.bottom = "0px";
  rate.style.width = "30px";
  rate.style.height = "120px";
  rate.style.backgroundColor = color;
  rate.style.opacity = 0.8;
  return rate;
}
