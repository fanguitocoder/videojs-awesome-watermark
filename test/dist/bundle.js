/*! @name videojs-awesome-watermark @version 0.0.8 @license MIT */
(function (QUnit, sinon, videojs) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var QUnit__default = /*#__PURE__*/_interopDefaultLegacy(QUnit);
	var sinon__default = /*#__PURE__*/_interopDefaultLegacy(sinon);
	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var minDoc = getCjsExportFromNamespace(_nodeResolve_empty$1);

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : {};
	var doccy;

	if (typeof document !== 'undefined') {
	  doccy = document;
	} else {
	  doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	  if (!doccy) {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	  }
	}

	var document_1 = doccy;

	var version = "0.0.9";

	var defaults = {
	  bottom: null,
	  fontColor: 'white',
	  fontFamily: 'Arial',
	  fontSize: '30',
	  fontSizeUnit: 'pixels',
	  image: 'https://picsum.photos/200',
	  imageWith: '100px',
	  intermittent: false,
	  hiddenTime: 5,
	  left: null,
	  opacity: 0.4,
	  position: null,
	  positionUnit: 'px',
	  right: '20',
	  text: "Watermark",
	  type: 'text',
	  top: '20',
	  url: null,
	  visibleTime: 5
	};
	/**
	 * Sets up the div, img or text and optional a tags for the plugin.
	 *
	 * @function setupWatermark
	 * @param    {Player} player
	 * @param    {Object} [options={}]
	 */

	var setupWatermark = function setupWatermark(player, options) {
	  // Add a div and img or text tag
	  var videoEl = player.el();
	  var div = document.createElement('div');
	  var text = document.createElement('span');
	  var img = document.createElement('img');
	  div.classList.add('vjs-watermark-content'); // set text font size

	  if (options.type == 'text') {
	    var fontSizeUnit = options.fontSizeUnit == 'percent' ? '%' : 'px';

	    if (fontSizeUnit == 'px') {
	      text.style.fontSize = options.fontSize + fontSizeUnit;
	    } else {
	      // otherwise, we will need to calculate the size based on the player's height
	      // and watch for size changes to update it
	      var updateWatermarkFontSize = function updateWatermarkFontSize() {
	        var height = document.querySelector('.video-js').clientHeight;
	        var trueSize = height / 100 * parseFloat(options.fontSize);
	        text.style.fontSize = trueSize + 'px';
	      };

	      window.addEventListener('resize', updateWatermarkFontSize);
	      player.on('resize', updateWatermarkFontSize); // update once

	      setTimeout(updateWatermarkFontSize, 1000);
	    }

	    text.setAttribute('style', 'fontFamily: ' + options.fontFamily + ' !important');
	    text.setAttribute('style', 'color: ' + options.fontColor + ' !important');
	  } else {
	    img.src = options.image;
	    img.style.width = options.imageWith;
	  }

	  if (options.position) {
	    div.classList.add("vjs-watermark-" + options.position);
	  } else {
	    var positionUnit = options.positionUnit == 'percent' ? '%' : 'px'; // set the position

	    if (options.left) {
	      div.style.left = options.left + positionUnit;
	    }

	    if (options.top) {
	      div.style.top = options.top + positionUnit;
	    }

	    if (options.right) {
	      div.style.right = options.right + positionUnit;
	    }

	    if (options.bottom) {
	      div.style.bottom = options.bottom + positionUnit;
	    }
	  }

	  text.innerText = options.text;
	  var contentItem = options.type === 'img' ? img : text; // if a url is provided make the image link to that URL.

	  if (options.url) {
	    var a = document.createElement('a');
	    a.href = options.url;
	    a.style.color = options.fontColor;
	    a.style.textDecoration = 'none'; // if the user clicks the link pause and open a new window

	    a.onclick = function (e) {
	      e.preventDefault();
	      player.pause();
	      window.open(options.url);
	    };

	    a.appendChild(contentItem);
	    div.appendChild(a);
	  } else {
	    div.appendChild(contentItem);
	  } // set opacity


	  contentItem.style.opacity = options.opacity; // add it to the player

	  setTimeout(function () {
	    videoEl.appendChild(div);
	  }, 1000);

	  if (options.intermittent) {
	    // temporary javascript solution
	    var fadeIn = function fadeIn() {
	      div.style.display = 'block';
	      setTimeout(fadeOut, parseInt(options.visibleTime) * 1000);
	    };

	    var fadeOut = function fadeOut() {
	      div.style.display = 'none';
	      setTimeout(fadeIn, parseInt(options.hiddenTime) * 1000);
	    };

	    fadeIn(); // div.style.animation = `animation: blinker ${options.visibleTime}ms step-start infinite 100ms;`;
	    // div.style.animationName = 'blinker';
	    // div.style.animationDuration = `${options.visibleTime}s`;
	    // div.style.animationIterationCount = 'infinite';
	  }
	};
	/**
	 * Function to invoke when the player is ready.
	 *
	 * This is a great place for your plugin to initialize itself. When this
	 * function is called, the player will have its DOM and child components
	 * in place.
	 *
	 * @function onPlayerReady
	 * @param    {Player} player
	 *           A Video.js player object.
	 *
	 * @param    {Object} [options={}]
	 *           A plain object containing options for the plugin.
	 */


	var onPlayerReady = function onPlayerReady(player, options) {
	  player.addClass('vjs-videojs-awesome-watermark'); // if there is no image set just exit

	  if (!options.text) {
	    return;
	  } // initialize the watermark


	  setupWatermark(player, options);
	};
	/**
	 * A video.js plugin.
	 *
	 * In the plugin function, the value of `this` is a video.js `Player`
	 * instance. You cannot rely on the player being in a "ready" state here,
	 * depending on how the plugin is invoked. This may or may not be important
	 * to you; if not, remove the wait for "ready"!
	 *
	 * @function awesomeWatermark
	 * @param    {Object} [options={}]
	 *           An object of options left to the plugin author to define.
	 */


	var awesomeWatermark = function awesomeWatermark(options) {
	  var _this = this;

	  this.ready(function () {
	    onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
	  });
	};

	var registerPlugin = videojs__default['default'].registerPlugin || videojs__default['default'].plugin; // Register the plugin with video.js.

	registerPlugin('awesomeWatermark', awesomeWatermark); // Include the version number.

	awesomeWatermark.VERSION = version;

	var Player = videojs__default['default'].getComponent('Player');
	QUnit__default['default'].test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon__default['default'], 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs__default['default'], 'function', 'videojs exists');
	  assert.strictEqual(typeof awesomeWatermark, 'function', 'plugin is a function');
	});
	QUnit__default['default'].module('videojs-awesome-watermark', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon__default['default'].useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs__default['default'](this.video);
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit__default['default'].test('registers itself with video.js', function (assert) {
	  assert.expect(3);
	  assert.strictEqual(typeof Player.prototype.awesomeWatermark, 'function', 'videojs-awesome-watermark plugin was registered');
	  this.player.awesomeWatermark(); // Tick the clock forward enough to trigger the player to be "ready".

	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-videojs-awesome-watermark'), 'the plugin adds a class to the player');
	  assert.ok(document_1.querySelector('.vjs-watermark-content') != null, 'the plugin adds the watermark element');
	});

}(QUnit, sinon, videojs));
