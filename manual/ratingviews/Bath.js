Bath = function(image) {
  this.renovation = false;
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.bad = this;
}

Bath.prototype.setupView = function () {
  this.view = new BaseView("Bad",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
  this.view.setRenovationCallback(bindFnToContext(this.renovateButtonClicked, this));
};

Bath.prototype.getUI = function() {
  return this.view.getUI();
}

Bath.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Bath.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Bath.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};

Bath.prototype.renovateButtonClicked = function (e) {
  this.renovation = true;
};


Bath.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
  this.view.setNextCallback = nextCallback;
};

Bath.prototype.registerPreviousEvent = function (previousCallback) {
  this.previousCallback = previousCallback;
  this.view.previousCallback = previousCallback;
};
