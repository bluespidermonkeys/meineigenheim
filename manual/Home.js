Home = function() {
  // this.ratingOverView = new Rating(this);
  this.ratingView = new RatingView(this);
  this.ratingOverView = new Rating(this, this.ratingView.getNumberoOfAspects());
  this.ratingView.setBackCallback(bindFnToContext(this.showRatingOverView, this));

  this.currentView = this.ratingOverView.getUI();
}

Home.prototype.getUI = function () {
  return this.currentView();
};

Home.prototype.getRatingOverView = function () {
  return this.ratingOverView;
};

Home.prototype.showRatingView = function () {
  // debugger;
  var p = this.currentView.parentElement;
  p.replaceChild(this.getRatingView().getUI(),this.currentView);
  this.currentView = this.getRatingView().getUI();
}

Home.prototype.showRatingOverView = function () {
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

<<<<<<< 5f68f0ec70450696d22e6c429ca1edff96d81765
function bindFnToContext( fn, context ) {
	if ( typeof fn != "function") {
		throw "not a Function, can not bind " + fn;
	}

//    if (arguments.length < 2 && (typeof arguments[0] === "undefined")) return this;

	var args = Array.prototype.slice.call(arguments, 2);

	var boundFn = function () {
    	var a = args.concat( arguments );
    	return fn.apply(context, a);
	}

	return boundFn;
}
=======
  var p = this.currentView.parentElement;
  p.replaceChild(this.getRatingOverView().getUI(),this.currentView);
  this.currentView = this.getRatingOverView().getUI();
}


Home.prototype.getRatingView = function () {
  return this.ratingView
};
>>>>>>> ratings are dynamic
