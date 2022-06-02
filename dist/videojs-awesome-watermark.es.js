/*! @name videojs-awesome-watermark @version 0.0.1 @license MIT */
import videojs from 'video.js';

var version = "0.0.1";

var defaults = {
  bottom: null,
  fontFamily: 'Arial',
  fontSize: '30',
  fontSizeUnit: 'pixels',
  image: 'https://picsum.photos/200',
  left: null,
  opacity: 0.8,
  position: null,
  positionUnit: 'px',
  right: '20',
  text: "Watermark",
  type: 'text',
  top: '20',
  url: null
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
    div.style.fontSize = options.fontSize + fontSizeUnit;
    div.style.fontFamily = options.fontFamily;
  } else {
    img.src = options.image;
  } // set opacity


  div.style.opacity = options.opacity;

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
    a.href = options.url; // if the user clicks the link pause and open a new window

    a.onclick = function (e) {
      e.preventDefault();
      player.pause();
      window.open(options.url);
    };

    a.appendChild(contentItem);
    div.appendChild(a);
  } else {
    div.appendChild(contentItem);
  }

  videoEl.appendChild(div);
}; // Cross-compatibility for Video.js 5 and 6.


var registerPlugin = videojs.registerPlugin || videojs.plugin; // const dom = videojs.dom || videojs;

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
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
}; // Register the plugin with video.js.


registerPlugin('awesomeWatermark', awesomeWatermark); // Include the version number.

awesomeWatermark.VERSION = version;

export default awesomeWatermark;