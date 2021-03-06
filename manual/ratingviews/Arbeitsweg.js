Arbeitsweg = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

}

Arbeitsweg.prototype.setupView = function () {
  this.view = new BaseView("Arbeitsweg",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Arbeitsweg.prototype.getUI = function() {
  return this.view.getUI();
}

Arbeitsweg.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Arbeitsweg.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Arbeitsweg.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Arbeitsweg.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
