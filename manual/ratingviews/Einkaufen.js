Einkaufen = function(image) {
  this.like = false;
  this.favorite = false;
  this.image = image;

  this.setupView();

  window.Einkaufen = this;
}

Einkaufen.prototype.setupView = function () {
  this.view = new BaseView("Einkaufen",this.image);
  this.view.setLikeCallback(bindFnToContext(this.likeButtonClicked, this));
  this.view.setDislikeCallback(bindFnToContext(this.dislikeButtonClicked, this));
  this.view.setFavoriteCallback(bindFnToContext(this.favoriteButtonClicked, this));
};

Einkaufen.prototype.getUI = function() {
  return this.view.getUI();
}

Einkaufen.prototype.likeButtonClicked = function (e) {
  this.like = true;
  this.nextCallback();
};

Einkaufen.prototype.dislikeButtonClicked = function (e) {
  this.like = false;
  this.nextCallback();
};

Einkaufen.prototype.favoriteButtonClicked = function (e) {
  this.favorite = true;
};


Einkaufen.prototype.registerNextEvent = function (nextCallback) {
  this.nextCallback = nextCallback;
};
