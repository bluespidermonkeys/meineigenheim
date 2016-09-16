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
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#ratingoverview");
         return false;
    });

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

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
