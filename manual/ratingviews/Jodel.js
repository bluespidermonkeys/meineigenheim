Jodel = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.Jodel = this;
}

Jodel.prototype.setupView = function () {
  this.view = new BaseView("Jodel Nachbarschaft",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Jodel.prototype.getUI = function() {
  return this.view.getUI();
}

Jodel.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Jodel.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Jodel.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Jodel.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
