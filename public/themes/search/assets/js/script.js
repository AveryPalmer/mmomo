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