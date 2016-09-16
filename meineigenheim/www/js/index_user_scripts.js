Bewertung = function(){
    this.like = false;
    this.unlike = false;
    this.renovation = false;
    this.love = false;
}

Bewertung.prototype.clickLike = function(){
    this.like = true;
}

Bewertung.prototype.clickUnlike = function(){
    this.unlike = true;
}

Bewertung.prototype.clickRenovation = function(){
    this.renovation = true;
}

Bewertung.prototype.clickLove = function(){
    this.love = true;
}

Home = function() {
	this.aussen = new Bewertung();
    this.wohnzimmer = new Bewertung();
}

window.eigenheim = new Home();

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {



     /* graphic button  Button */


        /* graphic button  Button */


        /* graphic button  Button */


        /* graphic button  Button */


        /* graphic button  Button */


        /* button  .uib_w_19 */


        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#ratingoverview");
         return false;
    });

        /* listitem  title eins */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#rateingview");
         return false;
    });

        /* graphic button  #aussen_unlike */
    $(document).on("click", "#aussen_unlike", function(evt)
    {
        /* your code goes here */
        window.eigenheim.aussen.clickUnlike();
        return true;
    });

        /* graphic button  #aussen_like */
    $(document).on("click", "#aussen_like", function(evt)
    {
        /* your code goes here */
        window.eigenheim.aussen.clickLike();
        return true;
    });

        /* button  Objekte */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#ratingoverview");
         return false;
    });

        /* graphic button  #aussen_love */
    $(document).on("click", "#aussen_love", function(evt)
    {
        window.eigenheim.aussen.clickLove();
         return true;
    });

        /* graphic button  #aussen_renovieren */
    $(document).on("click", "#aussen_renovieren", function(evt)
    {
        window.eigenheim.aussen.clickRenovation();
         return true;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
