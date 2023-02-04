<!DOCTYPE html>
<html class="light cc ltr" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <title>Astrosearch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://www.astrosearch.com/uploads/brand/favicon.png" rel="icon">
    <link href="https://www.astrosearch.com/themes/search/assets/css/jquery.flex-images.css" rel="stylesheet" type="text/css">
    <link href="https://www.astrosearch.com/themes/search/assets/css/style.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="https://www.astrosearch.com/themes/search/assets/js/jquery.js"></script>
    <script type="text/javascript" src="https://www.astrosearch.com/themes/search/assets/js/jquery.flex-images.js"></script>
    <script type="text/javascript" src="https://www.astrosearch.com/themes/search/assets/js/dragscroll.js"></script>
    <script type="text/javascript" src="https://www.astrosearch.com/themes/search/assets/js/functions.js"></script>
        </head>
<body >
    <div id="loading-bar"></div>
    <div id="header" class="header header-home">
    
    <div class="header-content">
        <div class="header-col header-col-logo"><a href="https://www.astrosearch.com/"><div class="logo-small"><img src="https://www.astrosearch.com/uploads/brand/logo_small.png"></div></a></div>
       
		<div class="header-col header-col-content">
                            <div class="page-menu header-menu">
                                            <div class="home-search-menu home-search-menu-active" id="path-web" data-new-path="web">Web</div>
                                            <div class="home-search-menu" id="path-images" data-new-path="images">Images</div>
                                            <div class="home-search-menu" id="path-videos" data-new-path="videos">Videos</div>
                                            <div class="home-search-menu" id="path-news" data-new-path="news">News</div>
                                    </div>
                    </div>
		<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Product Sans", Arial, sans-serif;
  background: #fff;
  color: #272727;
}

.container {
  width: 500px;
  margin: 0 auto;
}

.launcher {
  position: relative;
  text-align: center;
  color: #272727;
}

header {
  text-align: center;
}

header h1 {
  font-size: 3rem;
  line-height: 1.3;
  margin: 0;
  font-weight: 300;
  margin: 20px;
  color: #aaa;
}
header h1 span {
  font-weight: 500;
}
header h1 span:nth-child(1), header h1 span:nth-child(4) {
  color: #4284f3;
}
header h1 span:nth-child(2), header h1 span:nth-child(6) {
  color: #ea4336;
}
header h1 span:nth-child(3) {
  color: #fabc05;
}
header h1 span:nth-child(5) {
  color: #33a852;
}
header h1 i {
  font-style: normal;
  padding-left: 1rem;
  font-size: 2rem;
}

.app-launcher {
  position: absolute;
  left: 90px;
  top: 45px;
  animation: menu 200ms;
  z-index: -1;
  transition: all 200ms ease-in-out 0s, visibility 0s linear 200ms;
  display: block;
  border-radius: 2px;
}
.app-launcher:before {
  content: "";
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ccc;
  border-bottom-color: #ccc;
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
}
.app-launcher:after {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translate(-50%);
  display: inline-block;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #fff;
  border-left: 9px solid transparent;
  content: "";
  z-index: 2;
}

.apps {
  position: relative;
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  -webkit-transition: height 200ms ease-in-out;
  transition: height 200ms ease-in-out;
  min-height: 196px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 320px;
  height: 388px;
  margin-bottom: 30px;
  display: block;
  white-space: normal;
  text-align: left;
  margin: 0;
  padding: 0;
}
.apps ul {
  background: #fff;
  margin: 0;
  padding: 24px;
  text-align: left;
  width: 272px;
  overflow: hidden;
  list-style: none;
  position: relative;
  display: block;
  white-space: normal;
  min-height: 100px;
}
.apps ul li {
  height: 98px;
  width: 86px;
  color: black;
  margin: 0;
  padding: 1px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
.apps ul li a {
  text-decoration: none;
  font-family: arial, sans-serif;
  display: block;
  margin: 8px 2px;
  text-align: center;
  border: 1px solid transparent;
  transform: translate(0px, 0px);
  transition: transform 0.2s cubic-bezier(0.333, 0, 0, 1);
}
.apps ul li a:hover {
  border-color: #e5e5e5;
}
.apps ul li a span {
  font-size: 13px;
  line-height: 20px;
  display: block;
  color: #272727;
}
.apps ul li a img {
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
}
.apps .more {
  line-height: 40px;
  text-align: center;
  display: block;
  width: 322px;
  background: #f5f5f5;
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  position: absolute;
  text-decoration: none;
  color: #282828;
  bottom: 0;
}
.apps .more .apps {
  height: 500px !important;
}
.apps .overflow .more {
  border-bottom: 1px solid #ebebeb;
  left: 28px;
  width: 270px;
  height: 0;
  cursor: default;
  outline: none;
}

.launcher .button {
  cursor: pointer;
  width: 30px;
  margin: 0 auto;
  color: #FFF;
  background-color: #FFF;
}
.launcher .button img {
  opacity: 0.55;
}
.launcher .button:hover img {
  opacity: 0.85;
}

.hide {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, 0.3);
  border: 5px solid transparent;
  border-radius: 10px;
  min-height: 20px;
  min-width: 20px;
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar {
  height: 15px;
  width: 15px;
  background: #fff;
}

::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}

@keyframes menu {
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    oapcity: 1;
    transform: translateY(0);
  }
}
</style>
</head>
<body>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Product+Sans:100,300,400,500,700'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">

  <div class="launcher">
    <div class="button"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--apps.svg"/></div>
    <div class="app-launcher">
      <div class="apps">
        <ul class="first-set">
                    <li><a href="https://www.astrosearch.com"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-search.png"/><span>Search</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-youtube.png"/><span>AstroTube</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-photos.png"/><span>Photos</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-play-music.png"/><span>Music</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-maps.png"/><span>Maps</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-news.png"/><span>News</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-inbox.png"/><span>Inbox</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-plus.png"/><span>Google+</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-hangouts.png"/><span>Hangouts</span></a></li>
        </ul><a class="more" href="#">More</a>
        <ul class="second-set hide">
          <!-- +app("#","","")-->
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-drive.png"/><span>Drive</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-calendar.png"/><span>Calendar</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-keep.png"/><span>Keep</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-gmail.png"/><span>Gmail</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-play.png"/><span>Play</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-account.png"/><span>My Account</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-translate.png"/><span>Translate</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-finance.png"/><span>Finance</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-docs.png"/><span>Docs</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-blogger.png"/><span>Blogger</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-contacts.png"/><span>Contacts</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-my-business.png"/><span>My Business</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-wallet.png"/><span>Wallet</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-shopping.png"/><span>Shopping</span></a></li>
                    <li><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-books.png"/><span>Books</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="./script.js"></script>
</body>
</html>
<script>
(function() {
  $(document).ready(function() {
    var launcherMaxHeight, launcherMinHeight, scroll;
    scroll = false;
    launcherMaxHeight = 600;
    launcherMinHeight = 396;
    
    // Mousewheel event handler to detect whether user has scrolled over the container
    $('.apps').bind('mousewheel', function(e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {

      } else {
        if (!scroll) {
          $('.second-set').show();
          $('.apps').css({
            height: launcherMaxHeight
          }).addClass('overflow');
          scroll = true;
          $(this).scrollTop(e.originalEvent.wheelDelta);
        }
      }
    });
    
    // Scroll event to detect that scrollbar reached top of the container
    $('.apps').scroll(function() {
      var pos;
      pos = $(this).scrollTop();
      if (pos === 0) {
        scroll = false;
        $('.apps').css({
          height: launcherMinHeight
        }).removeClass('overflow');
        $('.second-set').hide();
      }
    });
    
    // Click event handler to show more apps
    $('.apps .more').click(function() {
      $('.second-set').show();
      $('.apps').animate({
        scrollTop: $('.apps')[0].scrollHeight
      }).css({
        height: 396
      }).addClass('overflow');
    });
    
    // Click event handler to toggle dropdown
    $('.button').click(function(event) {
      event.stopPropagation();
      $('.app-launcher').toggle();
    });
    $(document).click(function() {
      
      //Hide the launcher if visible
      $('.app-launcher').hide();
    });
    
    // Prevent hiding on click inside app launcher
    $('.app-launcher').click(function(event) {
      event.stopPropagation();
    });
  });

  
  // Resize event handler to maintain the max-height of the app launcher
  $(window).resize(function() {
    $('.apps').css({
      maxHeight: $(window).height() - ($('.apps').offset().top)
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtBQUNsQixRQUFBLGlCQUFBLEVBQUEsaUJBQUEsRUFBQTtJQUFFLE1BQUEsR0FBUztJQUNULGlCQUFBLEdBQW9CO0lBQ3BCLGlCQUFBLEdBQW9CLElBRnRCOzs7SUFLRSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFnQixZQUFoQixFQUE4QixRQUFBLENBQUMsQ0FBRCxDQUFBO01BQzVCLElBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFoQixHQUE2QixHQUE3QixHQUFtQyxDQUF0QztBQUFBO09BQUEsTUFBQTtRQUlFLElBQUcsQ0FBQyxNQUFKO1VBQ0UsQ0FBQSxDQUFFLGFBQUYsQ0FBZ0IsQ0FBQyxJQUFqQixDQUFBO1VBQ0EsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLEdBQVgsQ0FBZTtZQUFBLE1BQUEsRUFBUTtVQUFSLENBQWYsQ0FBeUMsQ0FBQyxRQUExQyxDQUFtRCxVQUFuRDtVQUNBLE1BQUEsR0FBUztVQUNULENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxTQUFSLENBQWtCLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBbEMsRUFKRjtTQUpGOztJQUQ0QixDQUE5QixFQUxGOzs7SUFtQkUsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLE1BQVgsQ0FBa0IsUUFBQSxDQUFBLENBQUE7QUFDcEIsVUFBQTtNQUFJLEdBQUEsR0FBTSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsU0FBUixDQUFBO01BQ04sSUFBRyxHQUFBLEtBQU8sQ0FBVjtRQUNFLE1BQUEsR0FBUztRQUNULENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxHQUFYLENBQWU7VUFBQSxNQUFBLEVBQVE7UUFBUixDQUFmLENBQXlDLENBQUMsV0FBMUMsQ0FBc0QsVUFBdEQ7UUFDQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLElBQWpCLENBQUEsRUFIRjs7SUFGZ0IsQ0FBbEIsRUFuQkY7OztJQTRCRSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLEtBQWpCLENBQXVCLFFBQUEsQ0FBQSxDQUFBO01BQ3JCLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsSUFBakIsQ0FBQTtNQUNBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxPQUFYLENBQW1CO1FBQUEsU0FBQSxFQUFXLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxDQUFELENBQUcsQ0FBQztNQUF6QixDQUFuQixDQUF5RCxDQUFDLEdBQTFELENBQThEO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FBOUQsQ0FBMEUsQ0FBQyxRQUEzRSxDQUFvRixVQUFwRjtJQUZxQixDQUF2QixFQTVCRjs7O0lBa0NFLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxLQUFiLENBQW1CLFFBQUEsQ0FBQyxLQUFELENBQUE7TUFDakIsS0FBSyxDQUFDLGVBQU4sQ0FBQTtNQUNBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsTUFBbkIsQ0FBQTtJQUZpQixDQUFuQjtJQUlBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFFBQUEsQ0FBQSxDQUFBLEVBQUE7OztNQUdoQixDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLElBQW5CLENBQUE7SUFIZ0IsQ0FBbEIsRUF0Q0Y7OztJQTZDRSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEtBQW5CLENBQXlCLFFBQUEsQ0FBQyxLQUFELENBQUE7TUFDdkIsS0FBSyxDQUFDLGVBQU4sQ0FBQTtJQUR1QixDQUF6QjtFQTlDZ0IsQ0FBbEIsRUFBQTs7OztFQW9EQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixRQUFBLENBQUEsQ0FBQTtJQUNmLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxHQUFYLENBQWU7TUFBQSxTQUFBLEVBQVcsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBQSxDQUFBLEdBQXFCLENBQUMsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLE1BQVgsQ0FBQSxDQUFtQixDQUFDLEdBQXJCO0lBQWhDLENBQWY7RUFEZSxDQUFqQjtBQXBEQSIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIHNjcm9sbCA9IGZhbHNlXG4gIGxhdW5jaGVyTWF4SGVpZ2h0ID0gNjAwXG4gIGxhdW5jaGVyTWluSGVpZ2h0ID0gMzk2XG4gIFxuICAjIE1vdXNld2hlZWwgZXZlbnQgaGFuZGxlciB0byBkZXRlY3Qgd2hldGhlciB1c2VyIGhhcyBzY3JvbGxlZCBvdmVyIHRoZSBjb250YWluZXJcbiAgJCgnLmFwcHMnKS5iaW5kICdtb3VzZXdoZWVsJywgKGUpIC0+XG4gICAgaWYgZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgLyAxMjAgPiAwXG4gICAgZWxzZVxuICAgICAgXG4gICAgICAjIFNjcm9sbGluZyBkb3duXG4gICAgICBpZiAhc2Nyb2xsXG4gICAgICAgICQoJy5zZWNvbmQtc2V0Jykuc2hvdygpXG4gICAgICAgICQoJy5hcHBzJykuY3NzKGhlaWdodDogbGF1bmNoZXJNYXhIZWlnaHQpLmFkZENsYXNzICdvdmVyZmxvdydcbiAgICAgICAgc2Nyb2xsID0gdHJ1ZVxuICAgICAgICAkKHRoaXMpLnNjcm9sbFRvcCBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YVxuICAgICAgICBcbiAgICByZXR1cm5cbiAgICBcbiAgIyBTY3JvbGwgZXZlbnQgdG8gZGV0ZWN0IHRoYXQgc2Nyb2xsYmFyIHJlYWNoZWQgdG9wIG9mIHRoZSBjb250YWluZXJcbiAgJCgnLmFwcHMnKS5zY3JvbGwgLT5cbiAgICBwb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpXG4gICAgaWYgcG9zID09IDBcbiAgICAgIHNjcm9sbCA9IGZhbHNlXG4gICAgICAkKCcuYXBwcycpLmNzcyhoZWlnaHQ6IGxhdW5jaGVyTWluSGVpZ2h0KS5yZW1vdmVDbGFzcyAnb3ZlcmZsb3cnXG4gICAgICAkKCcuc2Vjb25kLXNldCcpLmhpZGUoKVxuICAgIHJldHVyblxuICAgIFxuICAjIENsaWNrIGV2ZW50IGhhbmRsZXIgdG8gc2hvdyBtb3JlIGFwcHNcbiAgJCgnLmFwcHMgLm1vcmUnKS5jbGljayAtPlxuICAgICQoJy5zZWNvbmQtc2V0Jykuc2hvdygpXG4gICAgJCgnLmFwcHMnKS5hbmltYXRlKHNjcm9sbFRvcDogJCgnLmFwcHMnKVswXS5zY3JvbGxIZWlnaHQpLmNzcyhoZWlnaHQ6IDM5NikuYWRkQ2xhc3MgJ292ZXJmbG93J1xuICAgIHJldHVyblxuICAgIFxuICAjIENsaWNrIGV2ZW50IGhhbmRsZXIgdG8gdG9nZ2xlIGRyb3Bkb3duXG4gICQoJy5idXR0b24nKS5jbGljayAoZXZlbnQpIC0+XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAkKCcuYXBwLWxhdW5jaGVyJykudG9nZ2xlKClcbiAgICByZXR1cm5cbiAgJChkb2N1bWVudCkuY2xpY2sgLT5cbiAgICBcbiAgICAjSGlkZSB0aGUgbGF1bmNoZXIgaWYgdmlzaWJsZVxuICAgICQoJy5hcHAtbGF1bmNoZXInKS5oaWRlKClcbiAgICByZXR1cm5cbiAgICBcbiAgIyBQcmV2ZW50IGhpZGluZyBvbiBjbGljayBpbnNpZGUgYXBwIGxhdW5jaGVyXG4gICQoJy5hcHAtbGF1bmNoZXInKS5jbGljayAoZXZlbnQpIC0+XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICByZXR1cm5cbiAgcmV0dXJuXG4gIFxuIyBSZXNpemUgZXZlbnQgaGFuZGxlciB0byBtYWludGFpbiB0aGUgbWF4LWhlaWdodCBvZiB0aGUgYXBwIGxhdW5jaGVyXG4kKHdpbmRvdykucmVzaXplIC0+XG4gICQoJy5hcHBzJykuY3NzIG1heEhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpIC0gKCQoJy5hcHBzJykub2Zmc2V0KCkudG9wKVxuICByZXR1cm4iXX0=
//# sourceURL=coffeescript
</script>
   
</body>
</html> 

        <div class="header-col header-col-menu">
            <div class="header-menu-el">
                <div class="icon header-icon icon-menu menu-button" id="db-menu" data-db-id="menu"></div>
                <div class="menu" id="dd-menu">
                    <div class="menu-content">
                                                                                    <div class="menu-title">Preferences</div>
                                <div class="divider"></div>
                                                                                                                            <a href="https://www.astrosearch.com/preferences/language"><div class="menu-icon icon-language"></div>Language</a>
                                                                    <a href="https://www.astrosearch.com/preferences/theme"><div class="menu-icon icon-theme"></div>Theme</a>
                                                                    <a href="https://www.astrosearch.com/preferences/search"><div class="menu-icon icon-search"></div>Search</a>
                                                                                                        </div>
                </div>
            </div>
        </div>
    </div>
</div>    <div id="content" class="content content-home">
    <div class="home-center">
        <div class="home-logo"><div class="logo-large"><a href="https://www.astrosearch.com/"><img src="https://www.astrosearch.com/uploads/brand/logo_large.png"></a></div></div>
        <div class="search-content">
    <div class="search-container">
        <input type="text" name="search" id="search-input" class="search-input" tabindex="1" autocomplete="off" autocapitalize="off" autocorrect="off" data-search-url="https://www.astrosearch.com/" data-search-path="web" data-suggestions-path="requests/suggestions" value="" data-token-id="4de0202b886f44a184e6637e923eccec1e7771af4358750d97f8c7458aee9e35" data-autofocus="1" data-suggestions="1">
        <div id="clear-button" class="clear-button"></div>
        <div id="search-button" class="search-button"></div>
        <div class="search-list">
            <div class="search-list-container" id="search-results"></div>
        </div>
    </div>
</div>        <div class="home-description">Search For Anything </div>
            </div>
</div>    <footer id="footer" class="footer footer-home">
    <div class="footer-content">
        <div class="footer-menu">
                            <div class="footer-element"><a href="https://www.astrosearch.com/info/contact">Contact</a></div>
                            <div class="footer-element"><a href="https://www.astrosearch.com/info/about">About</a></div>
            
                    </div>

        <div class="footer-info">
            <div class="footer-element desktop-only"><a href="https://www.astrosearch.com"  data-nd></div>
            <div class="footer-element">&copy; 2022 Astrosearch</div>
        </div>
    </div>
</footer></body>
</html>