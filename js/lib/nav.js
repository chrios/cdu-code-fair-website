/* adapted from 
https://gist.github.com/taniarascia/56893ff29f64038dca91
https://www.taniarascia.com/responsive-dropdown-navigation-bar/
*/

(function($) {

  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');        /*toggles the active class on the hamburger click button*/
  });

  $('#nav-toggle').click(function() {   /*#nav-toggle is the <a> wrapping the <span>'s of the hamburger menu*/
    $('nav ul').toggle();               /*toggle() is jquery function which toggles classes on and off*/
  });

  $('.nav-list-item').click(function() {
  	$('nav ul').toggle();
  	document.querySelector('#nav-toggle').classList.toggle('active');  
  });



})(jQuery);