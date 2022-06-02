/*! @name videojs-awesome-watermark @version 0.0.2 @license MIT */
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

	var version = "0.0.2";

	var cov_6jf7x2709 = function () {
	  var path = '/Users/jommybarban/WORK/VM/videojs-awesome-watermark/src/plugin.js',
	      hash = 'ebc82fdefc29f96c72102db5a0b4f880d8168071',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/jommybarban/WORK/VM/videojs-awesome-watermark/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 17
	        },
	        end: {
	          line: 21,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 30,
	          column: 24
	        },
	        end: {
	          line: 96,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 32,
	          column: 18
	        },
	        end: {
	          line: 32,
	          column: 29
	        }
	      },
	      '3': {
	        start: {
	          line: 33,
	          column: 14
	        },
	        end: {
	          line: 33,
	          column: 43
	        }
	      },
	      '4': {
	        start: {
	          line: 35,
	          column: 15
	        },
	        end: {
	          line: 35,
	          column: 45
	        }
	      },
	      '5': {
	        start: {
	          line: 36,
	          column: 15
	        },
	        end: {
	          line: 36,
	          column: 44
	        }
	      },
	      '6': {
	        start: {
	          line: 38,
	          column: 2
	        },
	        end: {
	          line: 38,
	          column: 45
	        }
	      },
	      '7': {
	        start: {
	          line: 41,
	          column: 2
	        },
	        end: {
	          line: 48,
	          column: 3
	        }
	      },
	      '8': {
	        start: {
	          line: 42,
	          column: 23
	        },
	        end: {
	          line: 42,
	          column: 69
	        }
	      },
	      '9': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 57
	        }
	      },
	      '10': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 44,
	          column: 46
	        }
	      },
	      '11': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 40
	        }
	      },
	      '12': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 28
	        }
	      },
	      '13': {
	        start: {
	          line: 51,
	          column: 2
	        },
	        end: {
	          line: 51,
	          column: 38
	        }
	      },
	      '14': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 3
	        }
	      },
	      '15': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 59
	        }
	      },
	      '16': {
	        start: {
	          line: 56,
	          column: 23
	        },
	        end: {
	          line: 56,
	          column: 69
	        }
	      },
	      '17': {
	        start: {
	          line: 59,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 60,
	          column: 6
	        },
	        end: {
	          line: 60,
	          column: 51
	        }
	      },
	      '19': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 64,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 63,
	          column: 6
	        },
	        end: {
	          line: 63,
	          column: 49
	        }
	      },
	      '21': {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 67,
	          column: 5
	        }
	      },
	      '22': {
	        start: {
	          line: 66,
	          column: 6
	        },
	        end: {
	          line: 66,
	          column: 53
	        }
	      },
	      '23': {
	        start: {
	          line: 68,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 5
	        }
	      },
	      '24': {
	        start: {
	          line: 69,
	          column: 6
	        },
	        end: {
	          line: 69,
	          column: 55
	        }
	      },
	      '25': {
	        start: {
	          line: 72,
	          column: 2
	        },
	        end: {
	          line: 72,
	          column: 32
	        }
	      },
	      '26': {
	        start: {
	          line: 74,
	          column: 22
	        },
	        end: {
	          line: 74,
	          column: 57
	        }
	      },
	      '27': {
	        start: {
	          line: 77,
	          column: 2
	        },
	        end: {
	          line: 94,
	          column: 3
	        }
	      },
	      '28': {
	        start: {
	          line: 78,
	          column: 14
	        },
	        end: {
	          line: 78,
	          column: 41
	        }
	      },
	      '29': {
	        start: {
	          line: 80,
	          column: 4
	        },
	        end: {
	          line: 80,
	          column: 25
	        }
	      },
	      '30': {
	        start: {
	          line: 81,
	          column: 4
	        },
	        end: {
	          line: 81,
	          column: 38
	        }
	      },
	      '31': {
	        start: {
	          line: 82,
	          column: 4
	        },
	        end: {
	          line: 82,
	          column: 36
	        }
	      },
	      '32': {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 88,
	          column: 6
	        }
	      },
	      '33': {
	        start: {
	          line: 85,
	          column: 6
	        },
	        end: {
	          line: 85,
	          column: 25
	        }
	      },
	      '34': {
	        start: {
	          line: 86,
	          column: 6
	        },
	        end: {
	          line: 86,
	          column: 21
	        }
	      },
	      '35': {
	        start: {
	          line: 87,
	          column: 6
	        },
	        end: {
	          line: 87,
	          column: 31
	        }
	      },
	      '36': {
	        start: {
	          line: 90,
	          column: 4
	        },
	        end: {
	          line: 90,
	          column: 31
	        }
	      },
	      '37': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 23
	        }
	      },
	      '38': {
	        start: {
	          line: 93,
	          column: 4
	        },
	        end: {
	          line: 93,
	          column: 33
	        }
	      },
	      '39': {
	        start: {
	          line: 95,
	          column: 2
	        },
	        end: {
	          line: 95,
	          column: 27
	        }
	      },
	      '40': {
	        start: {
	          line: 99,
	          column: 23
	        },
	        end: {
	          line: 99,
	          column: 63
	        }
	      },
	      '41': {
	        start: {
	          line: 116,
	          column: 22
	        },
	        end: {
	          line: 127,
	          column: 1
	        }
	      },
	      '42': {
	        start: {
	          line: 117,
	          column: 2
	        },
	        end: {
	          line: 117,
	          column: 51
	        }
	      },
	      '43': {
	        start: {
	          line: 120,
	          column: 2
	        },
	        end: {
	          line: 122,
	          column: 3
	        }
	      },
	      '44': {
	        start: {
	          line: 121,
	          column: 4
	        },
	        end: {
	          line: 121,
	          column: 11
	        }
	      },
	      '45': {
	        start: {
	          line: 125,
	          column: 2
	        },
	        end: {
	          line: 125,
	          column: 34
	        }
	      },
	      '46': {
	        start: {
	          line: 141,
	          column: 25
	        },
	        end: {
	          line: 145,
	          column: 1
	        }
	      },
	      '47': {
	        start: {
	          line: 142,
	          column: 2
	        },
	        end: {
	          line: 144,
	          column: 5
	        }
	      },
	      '48': {
	        start: {
	          line: 143,
	          column: 4
	        },
	        end: {
	          line: 143,
	          column: 65
	        }
	      },
	      '49': {
	        start: {
	          line: 148,
	          column: 0
	        },
	        end: {
	          line: 148,
	          column: 53
	        }
	      },
	      '50': {
	        start: {
	          line: 151,
	          column: 0
	        },
	        end: {
	          line: 151,
	          column: 35
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 30,
	            column: 24
	          },
	          end: {
	            line: 30,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 45
	          },
	          end: {
	            line: 96,
	            column: 1
	          }
	        },
	        line: 30
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 84,
	            column: 16
	          },
	          end: {
	            line: 84,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 84,
	            column: 23
	          },
	          end: {
	            line: 88,
	            column: 5
	          }
	        },
	        line: 84
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 116,
	            column: 22
	          },
	          end: {
	            line: 116,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 116,
	            column: 43
	          },
	          end: {
	            line: 127,
	            column: 1
	          }
	        },
	        line: 116
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 141,
	            column: 25
	          },
	          end: {
	            line: 141,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 141,
	            column: 43
	          },
	          end: {
	            line: 145,
	            column: 1
	          }
	        },
	        line: 141
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 142,
	            column: 13
	          },
	          end: {
	            line: 142,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 142,
	            column: 19
	          },
	          end: {
	            line: 144,
	            column: 3
	          }
	        },
	        line: 142
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 41,
	            column: 2
	          },
	          end: {
	            line: 48,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 41,
	            column: 2
	          },
	          end: {
	            line: 48,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 41,
	            column: 2
	          },
	          end: {
	            line: 48,
	            column: 3
	          }
	        }],
	        line: 41
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 42,
	            column: 23
	          },
	          end: {
	            line: 42,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 42,
	            column: 59
	          },
	          end: {
	            line: 42,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 42,
	            column: 65
	          },
	          end: {
	            line: 42,
	            column: 69
	          }
	        }],
	        line: 42
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        }],
	        line: 53
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 56,
	            column: 23
	          },
	          end: {
	            line: 56,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 56,
	            column: 59
	          },
	          end: {
	            line: 56,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 56,
	            column: 65
	          },
	          end: {
	            line: 56,
	            column: 69
	          }
	        }],
	        line: 56
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 59,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 59,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 59,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        }],
	        line: 59
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        }],
	        line: 62
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 65,
	            column: 4
	          },
	          end: {
	            line: 67,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 65,
	            column: 4
	          },
	          end: {
	            line: 67,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 65,
	            column: 4
	          },
	          end: {
	            line: 67,
	            column: 5
	          }
	        }],
	        line: 65
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 68,
	            column: 4
	          },
	          end: {
	            line: 70,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 68,
	            column: 4
	          },
	          end: {
	            line: 70,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 68,
	            column: 4
	          },
	          end: {
	            line: 70,
	            column: 5
	          }
	        }],
	        line: 68
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 74,
	            column: 22
	          },
	          end: {
	            line: 74,
	            column: 57
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 74,
	            column: 47
	          },
	          end: {
	            line: 74,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 74,
	            column: 53
	          },
	          end: {
	            line: 74,
	            column: 57
	          }
	        }],
	        line: 74
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 77,
	            column: 2
	          },
	          end: {
	            line: 94,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 77,
	            column: 2
	          },
	          end: {
	            line: 94,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 77,
	            column: 2
	          },
	          end: {
	            line: 94,
	            column: 3
	          }
	        }],
	        line: 77
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 99,
	            column: 23
	          },
	          end: {
	            line: 99,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 99,
	            column: 23
	          },
	          end: {
	            line: 99,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 99,
	            column: 49
	          },
	          end: {
	            line: 99,
	            column: 63
	          }
	        }],
	        line: 99
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 120,
	            column: 2
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 120,
	            column: 2
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 120,
	            column: 2
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        }],
	        line: 120
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var defaults = (cov_6jf7x2709.s[0]++, {
	  bottom: null,
	  fontColor: 'white',
	  fontFamily: 'Arial',
	  fontSize: '30',
	  fontSizeUnit: 'pixels',
	  image: 'https://picsum.photos/200',
	  left: null,
	  opacity: 0.4,
	  position: null,
	  positionUnit: 'px',
	  right: '20',
	  text: "Watermark",
	  type: 'text',
	  top: '20',
	  url: 'https://google.com'
	});
	cov_6jf7x2709.s[1]++;

	var setupWatermark = function setupWatermark(player, options) {
	  cov_6jf7x2709.f[0]++;
	  var videoEl = (cov_6jf7x2709.s[2]++, player.el());
	  var div = (cov_6jf7x2709.s[3]++, document.createElement('div'));
	  var text = (cov_6jf7x2709.s[4]++, document.createElement('span'));
	  var img = (cov_6jf7x2709.s[5]++, document.createElement('img'));
	  cov_6jf7x2709.s[6]++;
	  div.classList.add('vjs-watermark-content');
	  cov_6jf7x2709.s[7]++;

	  if (options.type == 'text') {
	    cov_6jf7x2709.b[0][0]++;
	    var fontSizeUnit = (cov_6jf7x2709.s[8]++, options.fontSizeUnit == 'percent' ? (cov_6jf7x2709.b[1][0]++, '%') : (cov_6jf7x2709.b[1][1]++, 'px'));
	    cov_6jf7x2709.s[9]++;
	    div.style.fontSize = options.fontSize + fontSizeUnit;
	    cov_6jf7x2709.s[10]++;
	    div.style.fontFamily = options.fontFamily;
	    cov_6jf7x2709.s[11]++;
	    div.style.color = options.fontColor;
	  } else {
	    cov_6jf7x2709.b[0][1]++;
	    cov_6jf7x2709.s[12]++;
	    img.src = options.image;
	  }

	  cov_6jf7x2709.s[13]++;
	  div.style.opacity = options.opacity;
	  cov_6jf7x2709.s[14]++;

	  if (options.position) {
	    cov_6jf7x2709.b[2][0]++;
	    cov_6jf7x2709.s[15]++;
	    div.classList.add("vjs-watermark-" + options.position);
	  } else {
	    cov_6jf7x2709.b[2][1]++;
	    var positionUnit = (cov_6jf7x2709.s[16]++, options.positionUnit == 'percent' ? (cov_6jf7x2709.b[3][0]++, '%') : (cov_6jf7x2709.b[3][1]++, 'px'));
	    cov_6jf7x2709.s[17]++;

	    if (options.left) {
	      cov_6jf7x2709.b[4][0]++;
	      cov_6jf7x2709.s[18]++;
	      div.style.left = options.left + positionUnit;
	    } else {
	      cov_6jf7x2709.b[4][1]++;
	    }

	    cov_6jf7x2709.s[19]++;

	    if (options.top) {
	      cov_6jf7x2709.b[5][0]++;
	      cov_6jf7x2709.s[20]++;
	      div.style.top = options.top + positionUnit;
	    } else {
	      cov_6jf7x2709.b[5][1]++;
	    }

	    cov_6jf7x2709.s[21]++;

	    if (options.right) {
	      cov_6jf7x2709.b[6][0]++;
	      cov_6jf7x2709.s[22]++;
	      div.style.right = options.right + positionUnit;
	    } else {
	      cov_6jf7x2709.b[6][1]++;
	    }

	    cov_6jf7x2709.s[23]++;

	    if (options.bottom) {
	      cov_6jf7x2709.b[7][0]++;
	      cov_6jf7x2709.s[24]++;
	      div.style.bottom = options.bottom + positionUnit;
	    } else {
	      cov_6jf7x2709.b[7][1]++;
	    }
	  }

	  cov_6jf7x2709.s[25]++;
	  text.innerText = options.text;
	  var contentItem = (cov_6jf7x2709.s[26]++, options.type === 'img' ? (cov_6jf7x2709.b[8][0]++, img) : (cov_6jf7x2709.b[8][1]++, text));
	  cov_6jf7x2709.s[27]++;

	  if (options.url) {
	    cov_6jf7x2709.b[9][0]++;
	    var a = (cov_6jf7x2709.s[28]++, document.createElement('a'));
	    cov_6jf7x2709.s[29]++;
	    a.href = options.url;
	    cov_6jf7x2709.s[30]++;
	    a.style.color = options.fontColor;
	    cov_6jf7x2709.s[31]++;
	    a.style.textDecoration = 'none';
	    cov_6jf7x2709.s[32]++;

	    a.onclick = function (e) {
	      cov_6jf7x2709.f[1]++;
	      cov_6jf7x2709.s[33]++;
	      e.preventDefault();
	      cov_6jf7x2709.s[34]++;
	      player.pause();
	      cov_6jf7x2709.s[35]++;
	      window.open(options.url);
	    };

	    cov_6jf7x2709.s[36]++;
	    a.appendChild(contentItem);
	    cov_6jf7x2709.s[37]++;
	    div.appendChild(a);
	  } else {
	    cov_6jf7x2709.b[9][1]++;
	    cov_6jf7x2709.s[38]++;
	    div.appendChild(contentItem);
	  }

	  cov_6jf7x2709.s[39]++;
	  videoEl.appendChild(div);
	};

	var registerPlugin = (cov_6jf7x2709.s[40]++, (cov_6jf7x2709.b[10][0]++, videojs__default['default'].registerPlugin) || (cov_6jf7x2709.b[10][1]++, videojs__default['default'].plugin));
	cov_6jf7x2709.s[41]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_6jf7x2709.f[2]++;
	  cov_6jf7x2709.s[42]++;
	  player.addClass('vjs-videojs-awesome-watermark');
	  cov_6jf7x2709.s[43]++;

	  if (!options.text) {
	    cov_6jf7x2709.b[11][0]++;
	    cov_6jf7x2709.s[44]++;
	    return;
	  } else {
	    cov_6jf7x2709.b[11][1]++;
	  }

	  cov_6jf7x2709.s[45]++;
	  setupWatermark(player, options);
	};

	cov_6jf7x2709.s[46]++;

	var awesomeWatermark = function awesomeWatermark(options) {
	  var _this = this;

	  cov_6jf7x2709.f[3]++;
	  cov_6jf7x2709.s[47]++;
	  this.ready(function () {
	    cov_6jf7x2709.f[4]++;
	    cov_6jf7x2709.s[48]++;
	    onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
	  });
	};

	cov_6jf7x2709.s[49]++;
	registerPlugin('awesomeWatermark', awesomeWatermark);
	cov_6jf7x2709.s[50]++;
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
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.awesomeWatermark, 'function', 'videojs-awesome-watermark plugin was registered');
	  this.player.awesomeWatermark(); // Tick the clock forward enough to trigger the player to be "ready".

	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-videojs-awesome-watermark'), 'the plugin adds a class to the player');
	});

}(QUnit, sinon, videojs));
