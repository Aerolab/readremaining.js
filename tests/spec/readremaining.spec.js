beforeEach(function () {
  $(`
    <div class="plugin-wrapper">
      <p>If time is so priceless and ReadRemaining.js is about not wasting time, isn't this text totally self-contradictory? The answer is yes, but no, no really. I mean yes. But in a way is a kinda a smart meta-text. I mean, this is a long text about long texts and about how confusing is the experience of scrolling through long texts. Is like that movie, you know which one. The one with Leo DiCaprio and Juno where they are in a dream about a dream about a dream. That was confusing. I have seen it twice and the second time I didn't get it at all. ReadRemaining.js on the other hand, is pretty easy.</p>
      <p>Wouldn't be better to just copy and paste some lorem ipsum? What's the fun in lorem ipsum? It's not like we speak latin. Let me show you how boring is lorem ipsum, the next paragraph will be lorem ipsum all the way.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat dolor, mattis eu ex at, tincidunt ornare lorem. Proin ut massa ut massa venenatis eleifend. Vestibulum eu posuere lectus, vitae suscipit libero. Quisque dapibus, libero sed dapibus laoreet, diam erat venenatis urna, eu blandit nibh quam sit amet urna. Donec id volutpat tortor, quis mollis diam. Integer sit amet est vel justo tristique aliquam. Nulla id nulla ac nisl eleifend ultrices. Vivamus vitae lorem egestas tortor vestibulum sagittis.</p>
      <p>Do you really prefer lorem ipsum to this state-of-the-art-shakesperean-like-awesome text? Hey, you know what, that's rude. I'm doing my best effort here. Do you think that writing this is easy? I'm gonna write nonsense gibberish till you say you're sorry. Blah blah blah, blah blah blah. Blah blah blah? Blah blah blah. Blah! Blah-blah? Blah blah blah. I hope you're enjoying your blah-blas cause I have a bucket full of it. Oh, I see. You want me to continue writing with actual words. Are you sorry now? Now you are valuing my great prose. Aren't you? Ok, I'm an easy guy. Let's start a blank page. No, not literally. Stay in this page, but let's start fresh in our reader/writer relationship.</p>
      <p>You know what's the secret of comedy and ReadRemaining.js? It's ti... ming. Really. ReadRemaining.js will be timing how long take you to scroll and will calculate the total time of reading. You can use a clock to test ReadRemaining.js. You'll see that it can estimate the reading time quite precisely. You can test it with any kind of clock. A pocket watch? What are you? An elegant grandpa? A hipster? My grandpa is a very elegant man and he's kinda a hipster. It's ok, you can use a pocket watch if you want, you'll see that ReadRemaining.js works fine. What about an atomic clock that measure the vibrations of Cesium-133? Sure dude, why not. You can test the time with the freaking Big Ben for all I care. I use one of those kitchen clocks that looks like a tomato. One time I was eating salad and I found something crunchy in it. Later I realised that I made a confusion when I tried to see what time it was looking at an actual vegetable.</p>
      <p>Are you still reading this? Thanks man, I'm having a blast here, but it's a hard work. It would be a shame if nobody read this. Let's make a game. If you've read this far make a tweet with the text "Say hello to your hipster grandpa, you damn ReadRemaining.js writer". I'll be looking for it and you will make me smile. That will be our little secret. I really appreciate you're taking this time.</p>
      <p>You know what would be cool? If one could apply ReadRemaining.js to any situation in life. Let's say in dating. Imagine if you meet a girl and you can see a gauge (only visible for you, Terminator style) telling you how long it will take to get to a point with her (if you know what I mean). Wouldn't that be awesome? Man, that could be life changing. If that was real you can totally dump a girl with a TL;DNR message. Lol. I would pay for a gadget like that. I'm so lame with girls that it will show "remaining: infinity" all the time. Man, that's depressing. But I have you, my dear reader, which is nice.</p>
      <p>ReadRemaining.js is like the GPS of text. It shows you where you are and how fast are you going inside the text. It's not like it will tell you "Enter roundabout", but who needs that for text anyway. It's more like the red line that runs below a Youtube video. Ain't frustrating when the grey line slows down and the red one is getting near and you know that the video will stop and you can't do anything about it? Luckily does not happen with ReadRemaining.js. That, and the fact that ReadRemaining.js is not full of tutorials on how to do nail art. You can say that ReadRemaining.js is way better than Youtube. Well... it is a better reading timer. Unless you record a video of, let's say, the clock in the Back to the Future car, counting up, and then every time you start reading an article, you play that video, and then you extrapolate how long it will take you to get to the end of the text with pen and paper. Then Youtube can be a better reading timer than ReadRemaining.js.</p>
      <p>No, no, it's better than that: it's like the display in a microwave. Yes, ReadRemaining.js is that useful. Cause you can look at the countdown in your microwave display and open the door when is just about to finish and avoid the annoying beep. You can even pretend is a bomb and you have to cut a cable, or something, to disarm it. Use ReadRemaining.js in the same way to abandon an article when you realize that it will take too long. And then walk away of the explosion looking badass. Shirtless, in slow motion, with a pair of sunglasses. Hell yeah, that's how cool ReadRemaining.js is.</p>
      <p>Wow, we've been scrolling a lot already. We are like scrolling pals by now. We are the Sam and Frodo of reading and scrolling. I'm Sam, of course. You are Frodo. Cause Sam is awesome. The ReadRemaining.js display will be like Gollum, you know, following us, appearing and dissapearing telling us information about our destination. Ain't that epic? We should high five. I'm raising my hand to the screen right now. Let's do that. Raise your hand to the screen. Come on... no one is watching you. And even if people are watching you, you should be proud. You should say outloud: I'm psychologically high-fiving a guy that I don't even know, and that makes me happy. Don't let anybody tell you what you can't do.</p>
      <p>I told you this was gonna be long. We've been through a lot already and we are almost finishing. It's been a pleasure reading with you. I hope you've enjoyed using ReadRemaining.js as much as we have when we were making it. You're free of use, share, review and contribute to the ReadRemaining.js project. I hope you read awesome things in the future and ReadRemaining.js will always be there for you, silently telling you your reading time remaining. Live long and prosper, my scroll-pal. Have a nice life.</p>
    </div>
  `).appendTo('body');
});

describe('ReadRemaining initialization', function () {
  it('should initialize the component on body', function (done) {
    $('body').readRemaining();
    var readRemaining = $('.readRemainingGauge');
    expect(readRemaining.length).toBeGreaterThan(0);
    done();
  });

  it('should be hidden when first initialized', function (done) {
    $('body').readRemaining();
    var readRemaining = $('.readRemainingGauge');
    expect(readRemaining.hasClass('hidden')).toBe(true);
    done();
  });

  it('should be visible if showGaugeOnStart is true', function (done) {
    $('body').readRemaining({ showGaugeOnStart: true });
    var readRemaining = $('.readRemainingGauge');
    expect(readRemaining.hasClass('hidden')).toBe(false);
    done();
  });

  it('should attach plugin to a custom element', function (done) {
    $('.plugin-wrapper').readRemaining();
    var pluginWrapper = $('.plugin-wrapper');
    expect(pluginWrapper.find('.readRemainingGauge').length).toBeGreaterThan(0);
    done();
  });

  it('should set initial remaining time', function (done) {
    $('.plugin-wrapper').readRemaining();
    var plugin = $('.plugin-wrapper').data('plugin_readRemaining');
    var remainingTime = plugin.getRemainingTime({ timeFormat : plugin.settings.timeFormat });
    expect(remainingTime).toBeDefined();
    done();
  });

  xit('should be able to call getRemainingTime with no arguments without it throwing an error', function (done) {
    $('.plugin-wrapper').readRemaining();
    var plugin = $('.plugin-wrapper').data('plugin_readRemaining');
    expect(plugin.getRemainingTime).not.toThrow();
    done();
  })
});

afterEach(function function_name() {
  $('.plugin-wrapper').remove();
  $('.readRemainingGauge').remove();

  // no destroy method in the plugin, so we remove it manually
  $('body').data('plugin_readRemaining', null)
  $('body').data('timeLeftMinutes', null)
  $('body').data('timeLeftSeconds', null)
});
