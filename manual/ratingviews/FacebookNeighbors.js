FacebookNeighbors = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.FacebookNeighbors = this;
}

FacebookNeighbors.prototype.setupView = function () {
  this.view = new BaseView("Facebook Nachbarschaft",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

FacebookNeighbors.prototype.getUI = function() {
  return this.view.getUI();
}

FacebookNeighbors.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

FacebookNeighbors.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

FacebookNeighbors.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


FacebookNeighbors.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
