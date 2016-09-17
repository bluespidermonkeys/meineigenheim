Gemeinde = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

}

Gemeinde.prototype.setupView = function () {
  this.view = new BaseView("Gemeinde",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Gemeinde.prototype.getUI = function() {
  return this.view.getUI();
}

Gemeinde.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Gemeinde.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Gemeinde.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Gemeinde.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
