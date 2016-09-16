BaseView = function(title, image) {
  this.image = image;
  this.title = title;
  
  this.renovationCallback = null;
  this.likeCallback = null;
  this.dislikeCallback = null;
  this.favoriteCallback = null;

  this.setupUI();
}

BaseView.prototype.setupUI = function () {
  this.container = document.createElement('div');

  this.titleElement = document.createElement('h1');
  this.titleElement.innerHTML = this.title;
  this.container.appendChild(this.titleElement);

  this.imageElement = document.createElement('img');
  this.imageElement.src = this.image;
  this.imageElement.width=400;
  this.container.appendChild(this.imageElement);

  this.likeButtons = document.createElement('div');
  this.likeButtons.style.overflow = 'hidden';
  this.likeButtons.style.width = '400px';

  this.likeButton = document.createElement('div');
  this.likeButton.style.width = "160px";
  this.likeButton.style.float = "left";
  this.likeButton.style.backgroundColor = "lime";
  this.likeButton.innerHTML = "+";

  this.dislikeButton = document.createElement('div');
  this.dislikeButton.style.width = "160px";
  this.dislikeButton.style.marginLeft = "80px";
  this.dislikeButton.style.float = "left";
  this.dislikeButton.style.backgroundColor = "orange";
  this.dislikeButton.innerHTML = "-";

  this.likeButtons.appendChild(this.likeButton);
  this.likeButtons.appendChild(this.dislikeButton);
  this.container.appendChild(this.likeButtons);

  this.favRenovButtons = document.createElement('div');
  this.favRenovButtons.style.overflow = 'hidden';
  this.favRenovButtons.style.width = '400px';
  this.favRenovButtons.style.marginTop = '20px';

  this.renovateButton = document.createElement('div');
  this.renovateButton.style.width = "160px";
  this.renovateButton.style.float = "left";
  this.renovateButton.style.backgroundColor = "silver";
  this.renovateButton.innerHTML = "renovate";

  this.favoriteButton = document.createElement('div');
  this.favoriteButton.style.width = "160px";
  this.favoriteButton.style.marginLeft = "80px";
  this.favoriteButton.style.float = "left";
  this.favoriteButton.style.backgroundColor = "magenta";
  this.favoriteButton.innerHTML = "fav";

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

BaseView.prototype.getUI = function () {
  return this.container;
};
