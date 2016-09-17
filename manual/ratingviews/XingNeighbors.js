XingNeighbors = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();
}

XingNeighbors.prototype.setupView = function () {
  this.view = new BaseView("Xing Nachbarschaft",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

XingNeighbors.prototype.getUI = function() {
  return this.view.getUI();
}

XingNeighbors.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

XingNeighbors.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

XingNeighbors.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


XingNeighbors.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
