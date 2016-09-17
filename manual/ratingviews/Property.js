Property = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();
}

Property.prototype.setupView = function () {
  this.view = new BaseView("Grundst&uuml;ck",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Property.prototype.getUI = function() {
  return this.view.getUI();
}

Property.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Property.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Property.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Property.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
