BaseView = function(title, image) {
  this.image = image;
  this.title = title;

  this.renovationCallback = null;
  this.likeCallback = null;
  this.dislikeCallback = null;
  this.favoriteCallback = null;
  this.nextCallback = function(){};
  this.previousCallback = function(){};

  this.setupUI();

  this.__setOnMouseDownHandler();
  this.__setOnMouseUpHandler();
  this.__onMouseMoveHandler = bindFnToContext(this.__onMouseMove, this);
  this.__mouseDownPosition = null;
  this.__mouseUpPosition = null;
}

BaseView.prototype.setupUI = function () {
  this.container = document.createElement('div');

  this.titleElement = document.createElement('h1');
  this.titleElement.innerHTML = this.title;
  this.container.appendChild(this.titleElement);

  this.imageElement = document.createElement('img');
  this.imageElement.src = this.image;
  this.imageElement.width=600;
  this.container.appendChild(this.imageElement);

  this.likeButtons = document.createElement('div');
  this.likeButtons.style.overflow = 'hidden';
  // this.likeButtons.style.width = '960px';
  this.likeButtons.style.marginLeft = '200px';
  this.likeButtons.style.marginTop = '80px';

  this.likeButton = document.createElement('div');
  this.likeButton.style.width = "160px";
  this.likeButton.style.height = "60px";
  this.likeButton.style.float = "left";
  this.likeButton.style.backgroundColor = "lime";
  // this.likeButton.innerHTML = "+";
  this.likeButton.style.background = "transparent url('images/Smile_gut.PNG') no-repeat center center";

  this.dislikeButton = document.createElement('div');
  this.dislikeButton.style.width = "160px";
  this.dislikeButton.style.height = "60px";
  this.dislikeButton.style.marginLeft = "80px";
  this.dislikeButton.style.float = "left";
  this.dislikeButton.style.backgroundColor = "orange";
  // this.dislikeButton.innerHTML = "-";
  this.dislikeButton.style.background = "transparent url('images/Smile_schlecht.PNG') no-repeat center center";

  this.likeButtons.appendChild(this.likeButton);
  this.likeButtons.appendChild(this.dislikeButton);
  this.container.appendChild(this.likeButtons);

  this.favRenovButtons = document.createElement('div');
  this.favRenovButtons.style.overflow = 'hidden';
  this.favRenovButtons.style.width = '400px';
  this.favRenovButtons.style.marginTop = '20px';
  this.favRenovButtons.style.marginLeft = '200px';

  this.renovateButton = document.createElement('div');
  this.renovateButton.style.width = "160px";
  this.renovateButton.style.height = "60px";
  this.renovateButton.style.float = "left";
  this.renovateButton.style.backgroundColor = "silver";
  this.renovateButton.style.background = "transparent url('images/Renovieren.PNG') no-repeat center center";

  this.favoriteButton = document.createElement('div');
  this.favoriteButton.style.width = "160px";
  this.favoriteButton.style.height = "60px";
  this.favoriteButton.style.marginLeft = "80px";
  this.favoriteButton.style.float = "left";
  this.favoriteButton.style.backgroundColor = "magenta";
  // this.favoriteButton.innerHTML = "fav";
  this.favoriteButton.style.background = "transparent url('images/Love.PNG') no-repeat center center";

  this.favRenovButtons.appendChild(this.renovateButton);
  this.favRenovButtons.appendChild(this.favoriteButton);
  this.container.appendChild(this.favRenovButtons);

  this.likeButton.addEventListener('click', bindFnToContext(this.likeButtonClicked, this), false);
  this.dislikeButton.addEventListener('click', bindFnToContext(this.dislikeButtonClicked, this), false);

  this.favoriteButton.addEventListener('click', bindFnToContext(this.favoriteButtonClicked, this), false);
  this.renovateButton.addEventListener('click', bindFnToContext(this.renovateButtonClicked, this), false);

};

BaseView.prototype.likeButtonClicked = function (e) {
  this.likeCallback();
};

BaseView.prototype.dislikeButtonClicked = function (e) {
  this.dislikeCallback();
};

BaseView.prototype.favoriteButtonClicked = function (e) {
  this.favoriteCallback();
};

BaseView.prototype.renovateButtonClicked = function (e) {
  this.renovationCallback();
};

BaseView.prototype.setLikeCallback = function (callback) {
  this.likeCallback = callback
};

BaseView.prototype.setDislikeCallback = function (callback) {
  this.dislikeCallback = callback
};

BaseView.prototype.setRenovationCallback = function (callback) {
  this.renovationCallback = callback
};

BaseView.prototype.setFavoriteCallback = function (callback) {
  this.favoriteCallback = callback
};

BaseView.prototype.setNextCallback = function (callback) {
  this.nextCallback = callback;
};

BaseView.prototype.setPreviousCallback = function (callback) {
  this.previousCallback = callback;
};

BaseView.prototype.__setOnMouseDownHandler = function () {
  this.container.addEventListener('mousedown', bindFnToContext(this.__mouseDown, this), false);
};

BaseView.prototype.__setOnMouseUpHandler = function () {
  this.container.addEventListener('mouseup', bindFnToContext(this.__mouseUp, this), false);
};

BaseView.prototype.__mouseDown = function (e) {
  console.log('mouseDown');
  this.__attachMouseMoveHandler();
};

BaseView.prototype.__mouseUp = function (e) {
  console.log('mouseUp');
  this.__dettachMouseMoveHandler();
};

BaseView.prototype.__attachMouseMoveHandler = function () {
  this.container.addEventListener('mousemove', this.__onMouseMoveHandler, false);
}

BaseView.prototype.__dettachMouseMoveHandler = function () {
  this.container.removeEventListener('mousemove', this.__onMouseMoveHandler, false);
}

BaseView.prototype.__onMouseMove = function (e) {
  var event = e[0];
  if(event.movementX > 20) {
    this.nextCallback();
  } else {
    this.previousCallback();
  }
};

BaseView.prototype.getUI = function () {
  return this.container;
};
