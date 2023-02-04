<?php
defined('FIR') OR exit();
/**
 * The template for displaying the Header section
 */
?>
<div id="header" class="header<?php if(!$this->url[0]): ?> header-home<?php endif ?>">
    <?php if($this->settings['cookie_policy_url']): ?>
        <?php if(isset($_COOKIE['cookie_law']) && empty($_COOKIE['cookie_law'])): ?>
        <div class="cookie-law-container">
            <div class="cookie-law-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,2A10,10,0,1,1,2,12,10,10,0,0,1,12,2Zm0,3.81a2.69,2.69,0,0,0-.5,0,1.3,1.3,0,0,0-.44.22,1.08,1.08,0,0,0-.28.38,1.32,1.32,0,0,0-.09.56,1.32,1.32,0,0,0,.09.56,1,1,0,0,0,.28.38,1.25,1.25,0,0,0,.44.19,2.63,2.63,0,0,0,.5.06,3,3,0,0,0,.53-.06,1.11,1.11,0,0,0,.41-.19,1,1,0,0,0,.28-.38,1.37,1.37,0,0,0,0-1.12,1.08,1.08,0,0,0-.28-.38,1.16,1.16,0,0,0-.41-.22A3,3,0,0,0,12,5.81ZM10.78,9.16v9h2.44v-9Z"/></svg>
                <div><?=$lang['cookie_text']?></div>
                <a href="javascript:;" onclick="cookieLaw('<?=COOKIE_PATH?>')" data-nd><?=$lang['ok']?></a>
                <a href="<?=e($this->settings['cookie_policy_url'])?>" target="_blank" data-nd><?=$lang['more_info']?></a>
            </div>
        </div>
        <?php endif ?>
    <?php endif ?>

    <div class="header-content">
        <div class="header-col header-col-logo"><a href="<?=$data['url']?>/"><div class="logo-small"><img src="<?=$data['url']?>/<?=UPLOADS_PATH?>/brand/<?php if($data['cookie']['dark_mode']): ?><?=$data['settings']['logo_small_dark']?><?php else: ?><?php if($data['settings']['site_backgrounds'] && $data['cookie']['backgrounds']): ?><?php if(!$this->url[0]): ?><?=$data['settings']['logo_small_dark']?><?php else: ?><?=$data['settings']['logo_small']?><?php endif ?><?php else: ?><?=$data['settings']['logo_small']?><?php endif ?><?php endif ?>"></div></a></div>
        <div class="header-col header-col-content">
            <?php if(isset($data['search_bar_view'])): ?>
                <?=$data['search_bar_view']?>
            <?php elseif(!$this->url[0]): ?>
                <div class="page-menu header-menu">
                    <?php foreach($data['menu'] as $value): ?>
                        <div class="home-search-menu<?=($value[1] == true ? ' home-search-menu-active' : '')?>" id="path-<?=$value[0]?>" data-new-path="<?=$value[0]?>"><?=$lang[$value[0]]?></div>
                    <?php endforeach ?>
                </div>
            <?php endif ?>
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
  margin: 0 auto;

}

.launcher {
  padding-top: 17px;
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
  left: -275%;
  top: 64px;
  animation: menu 200ms;
  z-index: -1;
  transition: all 200ms ease-in-out 0s, visibility 0s linear 200ms;
  display: none;
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
  top: -9px;
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
  height: 350px;
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
  color: #F5F5F5;
  background-color: #F5F5F5;
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
                    <li><a href="https://www.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Astrosearch.png"/><span>Search</span></a></li>
                    <li><a href="https://astrotube.tv"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/AstroTube.png"/><span>AstroTube</span></a></li>
                    <li><a href="https://photos.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Photos.png"/><span>Photos</span></a></li>
                    <li><a href="https://music.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Music.png"/><span>Music</span></a></li>
                    <li><a href="https://maps.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Maps.png"/><span>Maps</span></a></li>
                    <li><a href="https://news.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Astronews.png"/><span>News</span></a></li>
                    <li><a href="https://mail.astrosearch.com"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-inbox.png"/><span>Inbox</span></a></li>
                    <li><a href="https://plus.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Astroplus.png"/><span>Astrosearch+</span></a></li>
                    <li><a href="https://hangouts.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Hang.png"/><span>Hangouts</span></a></li>
        </ul><a class="more" >More</a>
        <ul class="second-set hide">
          <!-- +app("","","")-->
                    <li><a href="https://drive.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Drive.png"/><span>Drive</span></a></li>
                    <li><a href="https://calendar.astrosearch.com"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-calendar.png"/><span>Calendar</span></a></li>
                    <li><a href="https://keep.astrosearch.com"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-keep.png"/><span>Keep</span></a></li>
                    <li><a href="https://astromail.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Astromail.png"/><span>Astromail</span></a></li>
                    <li><a href="https://appstore.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Apps.png"/><span>Appstore</span></a></li>
                    <li><a href="https://accounts.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Account.png"/><span>My Account</span></a></li>
                    <li><a href="https://translate.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Translate.png"/><span>Translate</span></a></li>
                    <li><a href="https://finance.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Financial.png"/><span>Finance</span></a></li>
                    <li><a href="https://docs.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/docs.png"/><span>Docs</span></a></li>
                    <li><a href="https://www.astrobook.io"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Astrobook.png"/><span>Astrobook</span></a></li>
                    <li><a href="https://contacts.astrosearch.com"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/59615/icon--google-contacts.png"/><span>Contacts</span></a></li>
                    <li><a href="https://business.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Business.png"/><span>My Business</span></a></li>
                    <li><a href="https://wallet.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Wallet.png"/><span>Wallet</span></a></li>
                    <li><a href="https://shopping.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/Shopping.png"/><span>Shopping</span></a></li>
                    <li><a href="https://books.astrosearch.com"><img src="https://www.astrosearch.com/public/themes/search/assets/images/icons/books.png"/><span>Books</span></a></li>
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
<script data-host="https://analytics.astrosearch.com" data-dnt="false" src="https://analytics.astromari.com" id="ZwSg9rf6GA" async defer></script>
</body>
</html> 
        <div class="header-col header-col-menu">
            <div class="header-menu-el">
                <div class="icon header-icon icon-menu menu-button" id="db-menu" data-db-id="menu"></div>
                <div class="menu" id="dd-menu">
                    <div class="menu-content">
                        <?php foreach($data['site_menu'] as $key => $value): ?>
                            <?php if(isset($_SESSION['user']['id'])): ?>
                                <div class="divider"></div>
                            <?php else: ?>
                                <div class="menu-title"><?=$lang[$key]?></div>
                                <div class="divider"></div>
                            <?php endif ?>

                            <?php if(is_array($value)): ?>
                                <?php foreach($value as $list => $meta): ?>
                                    <a href="<?=$data['url']?>/<?=$key?>/<?=$list?>"<?=(($meta[0] == true) ? ' data-nd' : '')?>><div class="menu-icon icon-<?=$list?>"></div><?=$lang[$list]?></a>
                                <?php endforeach ?>
                            <?php endif ?>
                        <?php endforeach ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>