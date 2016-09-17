Schule = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.Schule = this;
}

Schule.prototype.setupView = function () {
  this.view = new BaseView("Schule",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Schule.prototype.getUI = function() {
  return this.view.getUI();
}

Schule.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Schule.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Schule.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Schule.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
