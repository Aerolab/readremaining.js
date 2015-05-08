## ReadRemaining.js

This jQuery plugin allow you to show the user, how long will take to read the article. It takes in consideration the speed in which the user is scrolling.

**[Check out the demo](http://aerolab.github.io/readremaining.js/)**

## Quick start

Load the **readremaining.jquery.js** or the minified version **readremaining.jquery.min.js** after jQuery.

```html
<script src="js/readremaining.jquery.js"></script>
```

To speed up the loading, you can include the code of **readremaining.jquery.js** in your main js file instead.

Init ReadRemaining.js on the element that will be scrolled to read the article. Usually the body of the document.

```html
$('body').readRemaining();
```

That's it.

## Customizing ReadRemaining.js

You can customize the behavior of the gauge with these options:

```html
$('body').readRemaining({
  showGaugeDelay   : 1000,           // Delay before showing the indicator.
  showGaugeOnStart : false,          // Show the gauge initially, even before the user scroll.
  timeFormat       : '%mm %ss left', // Will replace %m and %s with minutes and seconds.
  maxTimeToShow    : 20*60,          // Only show time if is lower than x minutes (multiplied to seconds).
  minTimeToShow    : 10,             // Only show time if is higher than x seconds (If it's less than 10 seconds... just read).
  gaugeContainer   : '',             // The element where the gauge will append. If left '', the container will be the same scrolling element.
  insertPosition   : 'prepend'       // 'append' or 'prepend' as required by style
  verboseMode      : false           // Enable the console logs. For testing only.
  gaugeWrapper     : '',             // Optional, the element that define the visible scope for the gauge. If left "", the gauge will be visible all along.
  topOffset        : 0,              // Distance between the top of the gaugeWrapper and the point where the gauge will start to appear. Some designs require this.
  bottomOffset     : 0               // Distance between bottom border where the box will appear and the bottom of the element.
});
```
### Other methods

You can get the remaining time for reading an element with ReadRemaining.js applied with the 'getRemainingTime' method. e.g.:

```html
var remainingMinutes = $('body').readRemaining('getRemainingTime', {timeFormat : '%m'});
```

## Known Issues

ReadRemaining.js works much more precise when the content of the scrolling element is homogeneous. If the size of the text or complexity of images change in different parts of the scrolling element, then the accuracy will drop.
