Home = function(data) {
  // debugger;
  this.data = data;
  this.ratingView = new RatingView(this);
  this.ratingOverView = new Rating(this, this.ratingView.getNumberoOfAspects(), data);
  this.ratingView.setBackCallback(bindFnToContext(this.showRatingOverView, this));

  this.currentView = this.ratingOverView.getUI();
}

Home.prototype.getUI = function () {
  return this.currentView;
};

Home.prototype.getRatingOverView = function () {
  return this.ratingOverView;
};

Home.prototype.showRatingView = function () {
  // debugger;
  if (typeof this.detailViewListener === 'function') {
    this.detailViewListener(this);
  }
  var p = this.currentView.parentElement;
  p.replaceChild(this.getRatingView().getUI(),this.currentView);
  this.currentView = this.getRatingView().getUI();
}

Home.prototype.getRatingView = function () {
  return this.ratingView
};

Home.prototype.registerDetailViewListener = function (listener) {
  this.detailViewListener = listener;
};

Home.prototype.registerOverviewListener = function (listener) {
  this.overViewListener = listener;
};


Home.prototype.showRatingOverView = function () {
  if (typeof this.detailViewListener === 'function') {
    this.overViewListener(this);
  }
  var likes = 0;
  var favorites = 0;
  var renovation = 0;
  for (var aspect in this.ratingView.aspects) {
    if (this.ratingView.aspects.hasOwnProperty(aspect)) {
        if(this.ratingView.aspects[aspect].like) {likes++};
        if(this.ratingView.aspects[aspect].favorite) {favorites++};
        if(this.ratingView.aspects[aspect].renovation) {renovation++};
    }
  }

  this.getRatingOverView().setLikeValue(likes);
  this.getRatingOverView().setFavoritesValue(favorites);
  this.getRatingOverView().setRenovationValue(renovation);
  this.getRatingOverView().setCostValue(this.data.cost);

  var p = this.currentView.parentElement;
  p.replaceChild(this.getRatingOverView().getUI(),this.currentView);
  this.currentView = this.getRatingOverView().getUI();
}

Home.prototype.setPosition = function (x,y) {
  this.getRatingOverView().setPosition(x,y);
};

Home.prototype.hide = function () {
  this.currentView.style.display = "none";
};

Home.prototype.show = function () {
  this.currentView.style.display = "block";
};
