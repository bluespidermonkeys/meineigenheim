Schlafzimmer = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();


}

Schlafzimmer.prototype.setupView = function () {
  this.view = new BaseView("Schlafzimmer",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Schlafzimmer.prototype.getUI = function() {
  return this.view.getUI();
}

Schlafzimmer.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Schlafzimmer.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Schlafzimmer.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Schlafzimmer.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
