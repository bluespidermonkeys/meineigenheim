Neighbors = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.Neighbors = this;
}

Neighbors.prototype.setupView = function () {
  this.view = new BaseView("Nachbarschaft",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Neighbors.prototype.getUI = function() {
  return this.view.getUI();
}

Neighbors.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Neighbors.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Neighbors.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Neighbors.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
