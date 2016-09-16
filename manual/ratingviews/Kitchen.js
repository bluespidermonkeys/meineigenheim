Kitchen = function(image) {
  this.renovation = false;
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.kitchen = this;
}

Kitchen.prototype.setupView = function () {
  this.view = new BaseView("K&uuml;che",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
  this.view.setRenovationCallback(bindFnToContext(this.renovateButtonClicked, this));
};

Kitchen.prototype.getUI = function() {
  return this.view.getUI();
}

Kitchen.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Kitchen.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Kitchen.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};

Kitchen.prototype.renovateButtonClicked = function (e) {
  this.renovation = true;
};


Kitchen.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
