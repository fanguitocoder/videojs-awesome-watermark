/*! @name videojs-awesome-watermark @version 0.0.1 @license MIT */
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

	var version = "0.0.1";

	var cov_6jf7x2709 = function () {
	  var path = '/Users/jommybarban/WORK/VM/videojs-awesome-watermark/src/plugin.js',
	      hash = 'cc692cb1a72687d0b8708cd5f18739e8bdbd8bc0',
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
	          line: 18,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 27,
	          column: 24
	        },
	        end: {
	          line: 83,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 29,
	          column: 18
	        },
	        end: {
	          line: 29,
	          column: 29
	        }
	      },
	      '3': {
	        start: {
	          line: 30,
	          column: 14
	        },
	        end: {
	          line: 30,
	          column: 43
	        }
	      },
	      '4': {
	        start: {
	          line: 32,
	          column: 15
	        },
	        end: {
	          line: 32,
	          column: 45
	        }
	      },
	      '5': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 34,
	          column: 45
	        }
	      },
	      '6': {
	        start: {
	          line: 37,
	          column: 21
	        },
	        end: {
	          line: 37,
	          column: 67
	        }
	      },
	      '7': {
	        start: {
	          line: 38,
	          column: 2
	        },
	        end: {
	          line: 38,
	          column: 55
	        }
	      },
	      '8': {
	        start: {
	          line: 39,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 44
	        }
	      },
	      '9': {
	        start: {
	          line: 40,
	          column: 2
	        },
	        end: {
	          line: 40,
	          column: 38
	        }
	      },
	      '10': {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 60,
	          column: 3
	        }
	      },
	      '11': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 59
	        }
	      },
	      '12': {
	        start: {
	          line: 45,
	          column: 23
	        },
	        end: {
	          line: 45,
	          column: 69
	        }
	      },
	      '13': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 50,
	          column: 5
	        }
	      },
	      '14': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 49,
	          column: 51
	        }
	      },
	      '15': {
	        start: {
	          line: 51,
	          column: 4
	        },
	        end: {
	          line: 53,
	          column: 5
	        }
	      },
	      '16': {
	        start: {
	          line: 52,
	          column: 6
	        },
	        end: {
	          line: 52,
	          column: 49
	        }
	      },
	      '17': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 56,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 55,
	          column: 6
	        },
	        end: {
	          line: 55,
	          column: 53
	        }
	      },
	      '19': {
	        start: {
	          line: 57,
	          column: 4
	        },
	        end: {
	          line: 59,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 58,
	          column: 6
	        },
	        end: {
	          line: 58,
	          column: 55
	        }
	      },
	      '21': {
	        start: {
	          line: 61,
	          column: 2
	        },
	        end: {
	          line: 61,
	          column: 32
	        }
	      },
	      '22': {
	        start: {
	          line: 63,
	          column: 22
	        },
	        end: {
	          line: 63,
	          column: 57
	        }
	      },
	      '23': {
	        start: {
	          line: 66,
	          column: 2
	        },
	        end: {
	          line: 81,
	          column: 3
	        }
	      },
	      '24': {
	        start: {
	          line: 67,
	          column: 14
	        },
	        end: {
	          line: 67,
	          column: 41
	        }
	      },
	      '25': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 69,
	          column: 25
	        }
	      },
	      '26': {
	        start: {
	          line: 71,
	          column: 4
	        },
	        end: {
	          line: 75,
	          column: 6
	        }
	      },
	      '27': {
	        start: {
	          line: 72,
	          column: 6
	        },
	        end: {
	          line: 72,
	          column: 25
	        }
	      },
	      '28': {
	        start: {
	          line: 73,
	          column: 6
	        },
	        end: {
	          line: 73,
	          column: 21
	        }
	      },
	      '29': {
	        start: {
	          line: 74,
	          column: 6
	        },
	        end: {
	          line: 74,
	          column: 31
	        }
	      },
	      '30': {
	        start: {
	          line: 77,
	          column: 4
	        },
	        end: {
	          line: 77,
	          column: 31
	        }
	      },
	      '31': {
	        start: {
	          line: 78,
	          column: 4
	        },
	        end: {
	          line: 78,
	          column: 23
	        }
	      },
	      '32': {
	        start: {
	          line: 80,
	          column: 4
	        },
	        end: {
	          line: 80,
	          column: 33
	        }
	      },
	      '33': {
	        start: {
	          line: 82,
	          column: 2
	        },
	        end: {
	          line: 82,
	          column: 27
	        }
	      },
	      '34': {
	        start: {
	          line: 86,
	          column: 23
	        },
	        end: {
	          line: 86,
	          column: 63
	        }
	      },
	      '35': {
	        start: {
	          line: 103,
	          column: 22
	        },
	        end: {
	          line: 114,
	          column: 1
	        }
	      },
	      '36': {
	        start: {
	          line: 104,
	          column: 2
	        },
	        end: {
	          line: 104,
	          column: 51
	        }
	      },
	      '37': {
	        start: {
	          line: 107,
	          column: 2
	        },
	        end: {
	          line: 109,
	          column: 3
	        }
	      },
	      '38': {
	        start: {
	          line: 108,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 11
	        }
	      },
	      '39': {
	        start: {
	          line: 112,
	          column: 2
	        },
	        end: {
	          line: 112,
	          column: 34
	        }
	      },
	      '40': {
	        start: {
	          line: 128,
	          column: 25
	        },
	        end: {
	          line: 132,
	          column: 1
	        }
	      },
	      '41': {
	        start: {
	          line: 129,
	          column: 2
	        },
	        end: {
	          line: 131,
	          column: 5
	        }
	      },
	      '42': {
	        start: {
	          line: 130,
	          column: 4
	        },
	        end: {
	          line: 130,
	          column: 65
	        }
	      },
	      '43': {
	        start: {
	          line: 135,
	          column: 0
	        },
	        end: {
	          line: 135,
	          column: 53
	        }
	      },
	      '44': {
	        start: {
	          line: 138,
	          column: 0
	        },
	        end: {
	          line: 138,
	          column: 35
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 27,
	            column: 24
	          },
	          end: {
	            line: 27,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 27,
	            column: 45
	          },
	          end: {
	            line: 83,
	            column: 1
	          }
	        },
	        line: 27
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 71,
	            column: 16
	          },
	          end: {
	            line: 71,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 71,
	            column: 23
	          },
	          end: {
	            line: 75,
	            column: 5
	          }
	        },
	        line: 71
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 103,
	            column: 22
	          },
	          end: {
	            line: 103,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 103,
	            column: 43
	          },
	          end: {
	            line: 114,
	            column: 1
	          }
	        },
	        line: 103
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 128,
	            column: 25
	          },
	          end: {
	            line: 128,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 128,
	            column: 43
	          },
	          end: {
	            line: 132,
	            column: 1
	          }
	        },
	        line: 128
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 129,
	            column: 13
	          },
	          end: {
	            line: 129,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 129,
	            column: 19
	          },
	          end: {
	            line: 131,
	            column: 3
	          }
	        },
	        line: 129
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 37,
	            column: 21
	          },
	          end: {
	            line: 37,
	            column: 67
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 37,
	            column: 57
	          },
	          end: {
	            line: 37,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 37,
	            column: 63
	          },
	          end: {
	            line: 37,
	            column: 67
	          }
	        }],
	        line: 37
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 42,
	            column: 2
	          },
	          end: {
	            line: 60,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 42,
	            column: 2
	          },
	          end: {
	            line: 60,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 42,
	            column: 2
	          },
	          end: {
	            line: 60,
	            column: 3
	          }
	        }],
	        line: 42
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 45,
	            column: 23
	          },
	          end: {
	            line: 45,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 45,
	            column: 59
	          },
	          end: {
	            line: 45,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 45,
	            column: 65
	          },
	          end: {
	            line: 45,
	            column: 69
	          }
	        }],
	        line: 45
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 50,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 50,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 50,
	            column: 5
	          }
	        }],
	        line: 48
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 51,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 51,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 51,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }],
	        line: 51
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 56,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 56,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 56,
	            column: 5
	          }
	        }],
	        line: 54
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 57,
	            column: 4
	          },
	          end: {
	            line: 59,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 57,
	            column: 4
	          },
	          end: {
	            line: 59,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 57,
	            column: 4
	          },
	          end: {
	            line: 59,
	            column: 5
	          }
	        }],
	        line: 57
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 63,
	            column: 22
	          },
	          end: {
	            line: 63,
	            column: 57
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 63,
	            column: 47
	          },
	          end: {
	            line: 63,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 53
	          },
	          end: {
	            line: 63,
	            column: 57
	          }
	        }],
	        line: 63
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 66,
	            column: 2
	          },
	          end: {
	            line: 81,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 66,
	            column: 2
	          },
	          end: {
	            line: 81,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 2
	          },
	          end: {
	            line: 81,
	            column: 3
	          }
	        }],
	        line: 66
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 86,
	            column: 23
	          },
	          end: {
	            line: 86,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 86,
	            column: 23
	          },
	          end: {
	            line: 86,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 49
	          },
	          end: {
	            line: 86,
	            column: 63
	          }
	        }],
	        line: 86
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 107,
	            column: 2
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 107,
	            column: 2
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 107,
	            column: 2
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        }],
	        line: 107
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
	      '44': 0
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
	      '10': [0, 0]
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
	  fontFamily: 'Arial',
	  fontSize: '30',
	  fontSizeUnit: 'pixels',
	  left: null,
	  opacity: 0.8,
	  position: null,
	  positionUnit: 'px',
	  right: '20',
	  text: "Watermark",
	  top: '20',
	  url: null
	});
	cov_6jf7x2709.s[1]++;

	var setupWatermark = function setupWatermark(player, options) {
	  cov_6jf7x2709.f[0]++;
	  var videoEl = (cov_6jf7x2709.s[2]++, player.el());
	  var div = (cov_6jf7x2709.s[3]++, document.createElement('div'));
	  var text = (cov_6jf7x2709.s[4]++, document.createElement('span'));
	  cov_6jf7x2709.s[5]++;
	  div.classList.add('vjs-watermark-content');
	  var fontSizeUnit = (cov_6jf7x2709.s[6]++, options.fontSizeUnit == 'percent' ? (cov_6jf7x2709.b[0][0]++, '%') : (cov_6jf7x2709.b[0][1]++, 'px'));
	  cov_6jf7x2709.s[7]++;
	  div.style.fontSize = options.fontSize + fontSizeUnit;
	  cov_6jf7x2709.s[8]++;
	  div.style.fontFamily = options.fontFamily;
	  cov_6jf7x2709.s[9]++;
	  div.style.opacity = options.opacity;
	  cov_6jf7x2709.s[10]++;

	  if (options.position) {
	    cov_6jf7x2709.b[1][0]++;
	    cov_6jf7x2709.s[11]++;
	    div.classList.add("vjs-watermark-" + options.position);
	  } else {
	    cov_6jf7x2709.b[1][1]++;
	    var positionUnit = (cov_6jf7x2709.s[12]++, options.positionUnit == 'percent' ? (cov_6jf7x2709.b[2][0]++, '%') : (cov_6jf7x2709.b[2][1]++, 'px'));
	    cov_6jf7x2709.s[13]++;

	    if (options.left) {
	      cov_6jf7x2709.b[3][0]++;
	      cov_6jf7x2709.s[14]++;
	      div.style.left = options.left + positionUnit;
	    } else {
	      cov_6jf7x2709.b[3][1]++;
	    }

	    cov_6jf7x2709.s[15]++;

	    if (options.top) {
	      cov_6jf7x2709.b[4][0]++;
	      cov_6jf7x2709.s[16]++;
	      div.style.top = options.top + positionUnit;
	    } else {
	      cov_6jf7x2709.b[4][1]++;
	    }

	    cov_6jf7x2709.s[17]++;

	    if (options.right) {
	      cov_6jf7x2709.b[5][0]++;
	      cov_6jf7x2709.s[18]++;
	      div.style.right = options.right + positionUnit;
	    } else {
	      cov_6jf7x2709.b[5][1]++;
	    }

	    cov_6jf7x2709.s[19]++;

	    if (options.bottom) {
	      cov_6jf7x2709.b[6][0]++;
	      cov_6jf7x2709.s[20]++;
	      div.style.bottom = options.bottom + positionUnit;
	    } else {
	      cov_6jf7x2709.b[6][1]++;
	    }
	  }

	  cov_6jf7x2709.s[21]++;
	  text.innerText = options.text;
	  var contentItem = (cov_6jf7x2709.s[22]++, options.type === 'img' ? (cov_6jf7x2709.b[7][0]++, img) : (cov_6jf7x2709.b[7][1]++, text));
	  cov_6jf7x2709.s[23]++;

	  if (options.url) {
	    cov_6jf7x2709.b[8][0]++;
	    var a = (cov_6jf7x2709.s[24]++, document.createElement('a'));
	    cov_6jf7x2709.s[25]++;
	    a.href = options.url;
	    cov_6jf7x2709.s[26]++;

	    a.onclick = function (e) {
	      cov_6jf7x2709.f[1]++;
	      cov_6jf7x2709.s[27]++;
	      e.preventDefault();
	      cov_6jf7x2709.s[28]++;
	      player.pause();
	      cov_6jf7x2709.s[29]++;
	      window.open(options.url);
	    };

	    cov_6jf7x2709.s[30]++;
	    a.appendChild(contentItem);
	    cov_6jf7x2709.s[31]++;
	    div.appendChild(a);
	  } else {
	    cov_6jf7x2709.b[8][1]++;
	    cov_6jf7x2709.s[32]++;
	    div.appendChild(contentItem);
	  }

	  cov_6jf7x2709.s[33]++;
	  videoEl.appendChild(div);
	};

	var registerPlugin = (cov_6jf7x2709.s[34]++, (cov_6jf7x2709.b[9][0]++, videojs__default['default'].registerPlugin) || (cov_6jf7x2709.b[9][1]++, videojs__default['default'].plugin));
	cov_6jf7x2709.s[35]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_6jf7x2709.f[2]++;
	  cov_6jf7x2709.s[36]++;
	  player.addClass('vjs-videojs-awesome-watermark');
	  cov_6jf7x2709.s[37]++;

	  if (!options.text) {
	    cov_6jf7x2709.b[10][0]++;
	    cov_6jf7x2709.s[38]++;
	    return;
	  } else {
	    cov_6jf7x2709.b[10][1]++;
	  }

	  cov_6jf7x2709.s[39]++;
	  setupWatermark(player, options);
	};

	cov_6jf7x2709.s[40]++;

	var awesomeWatermark = function awesomeWatermark(options) {
	  var _this = this;

	  cov_6jf7x2709.f[3]++;
	  cov_6jf7x2709.s[41]++;
	  this.ready(function () {
	    cov_6jf7x2709.f[4]++;
	    cov_6jf7x2709.s[42]++;
	    onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
	  });
	};

	cov_6jf7x2709.s[43]++;
	registerPlugin('awesomeWatermark', awesomeWatermark);
	cov_6jf7x2709.s[44]++;
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
