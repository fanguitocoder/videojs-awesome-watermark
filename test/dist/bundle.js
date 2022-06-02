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
	      hash = 'ec3038de33a2f6e98474062d690ff8c0f9574dfb',
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
	          line: 24,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 33,
	          column: 24
	        },
	        end: {
	          line: 109,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 35,
	          column: 18
	        },
	        end: {
	          line: 35,
	          column: 29
	        }
	      },
	      '3': {
	        start: {
	          line: 36,
	          column: 14
	        },
	        end: {
	          line: 36,
	          column: 43
	        }
	      },
	      '4': {
	        start: {
	          line: 38,
	          column: 15
	        },
	        end: {
	          line: 38,
	          column: 45
	        }
	      },
	      '5': {
	        start: {
	          line: 39,
	          column: 15
	        },
	        end: {
	          line: 39,
	          column: 44
	        }
	      },
	      '6': {
	        start: {
	          line: 41,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 45
	        }
	      },
	      '7': {
	        start: {
	          line: 44,
	          column: 2
	        },
	        end: {
	          line: 52,
	          column: 3
	        }
	      },
	      '8': {
	        start: {
	          line: 45,
	          column: 23
	        },
	        end: {
	          line: 45,
	          column: 69
	        }
	      },
	      '9': {
	        start: {
	          line: 46,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 57
	        }
	      },
	      '10': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 46
	        }
	      },
	      '11': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 40
	        }
	      },
	      '12': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 50,
	          column: 28
	        }
	      },
	      '13': {
	        start: {
	          line: 51,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 40
	        }
	      },
	      '14': {
	        start: {
	          line: 54,
	          column: 2
	        },
	        end: {
	          line: 72,
	          column: 3
	        }
	      },
	      '15': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 59
	        }
	      },
	      '16': {
	        start: {
	          line: 57,
	          column: 23
	        },
	        end: {
	          line: 57,
	          column: 69
	        }
	      },
	      '17': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 62,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 61,
	          column: 6
	        },
	        end: {
	          line: 61,
	          column: 51
	        }
	      },
	      '19': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 64,
	          column: 6
	        },
	        end: {
	          line: 64,
	          column: 49
	        }
	      },
	      '21': {
	        start: {
	          line: 66,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 5
	        }
	      },
	      '22': {
	        start: {
	          line: 67,
	          column: 6
	        },
	        end: {
	          line: 67,
	          column: 53
	        }
	      },
	      '23': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 71,
	          column: 5
	        }
	      },
	      '24': {
	        start: {
	          line: 70,
	          column: 6
	        },
	        end: {
	          line: 70,
	          column: 55
	        }
	      },
	      '25': {
	        start: {
	          line: 73,
	          column: 2
	        },
	        end: {
	          line: 73,
	          column: 32
	        }
	      },
	      '26': {
	        start: {
	          line: 75,
	          column: 22
	        },
	        end: {
	          line: 75,
	          column: 57
	        }
	      },
	      '27': {
	        start: {
	          line: 78,
	          column: 2
	        },
	        end: {
	          line: 95,
	          column: 3
	        }
	      },
	      '28': {
	        start: {
	          line: 79,
	          column: 14
	        },
	        end: {
	          line: 79,
	          column: 41
	        }
	      },
	      '29': {
	        start: {
	          line: 81,
	          column: 4
	        },
	        end: {
	          line: 81,
	          column: 25
	        }
	      },
	      '30': {
	        start: {
	          line: 82,
	          column: 4
	        },
	        end: {
	          line: 82,
	          column: 38
	        }
	      },
	      '31': {
	        start: {
	          line: 83,
	          column: 4
	        },
	        end: {
	          line: 83,
	          column: 36
	        }
	      },
	      '32': {
	        start: {
	          line: 85,
	          column: 4
	        },
	        end: {
	          line: 89,
	          column: 6
	        }
	      },
	      '33': {
	        start: {
	          line: 86,
	          column: 6
	        },
	        end: {
	          line: 86,
	          column: 25
	        }
	      },
	      '34': {
	        start: {
	          line: 87,
	          column: 6
	        },
	        end: {
	          line: 87,
	          column: 21
	        }
	      },
	      '35': {
	        start: {
	          line: 88,
	          column: 6
	        },
	        end: {
	          line: 88,
	          column: 31
	        }
	      },
	      '36': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 31
	        }
	      },
	      '37': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 92,
	          column: 23
	        }
	      },
	      '38': {
	        start: {
	          line: 94,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 33
	        }
	      },
	      '39': {
	        start: {
	          line: 98,
	          column: 2
	        },
	        end: {
	          line: 98,
	          column: 46
	        }
	      },
	      '40': {
	        start: {
	          line: 100,
	          column: 2
	        },
	        end: {
	          line: 100,
	          column: 27
	        }
	      },
	      '41': {
	        start: {
	          line: 102,
	          column: 2
	        },
	        end: {
	          line: 108,
	          column: 3
	        }
	      },
	      '42': {
	        start: {
	          line: 103,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 82
	        }
	      },
	      '43': {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 104,
	          column: 37
	        }
	      },
	      '44': {
	        start: {
	          line: 105,
	          column: 4
	        },
	        end: {
	          line: 105,
	          column: 57
	        }
	      },
	      '45': {
	        start: {
	          line: 106,
	          column: 4
	        },
	        end: {
	          line: 106,
	          column: 47
	        }
	      },
	      '46': {
	        start: {
	          line: 107,
	          column: 4
	        },
	        end: {
	          line: 107,
	          column: 51
	        }
	      },
	      '47': {
	        start: {
	          line: 112,
	          column: 23
	        },
	        end: {
	          line: 112,
	          column: 63
	        }
	      },
	      '48': {
	        start: {
	          line: 129,
	          column: 22
	        },
	        end: {
	          line: 140,
	          column: 1
	        }
	      },
	      '49': {
	        start: {
	          line: 130,
	          column: 2
	        },
	        end: {
	          line: 130,
	          column: 51
	        }
	      },
	      '50': {
	        start: {
	          line: 133,
	          column: 2
	        },
	        end: {
	          line: 135,
	          column: 3
	        }
	      },
	      '51': {
	        start: {
	          line: 134,
	          column: 4
	        },
	        end: {
	          line: 134,
	          column: 11
	        }
	      },
	      '52': {
	        start: {
	          line: 138,
	          column: 2
	        },
	        end: {
	          line: 138,
	          column: 34
	        }
	      },
	      '53': {
	        start: {
	          line: 154,
	          column: 25
	        },
	        end: {
	          line: 158,
	          column: 1
	        }
	      },
	      '54': {
	        start: {
	          line: 155,
	          column: 2
	        },
	        end: {
	          line: 157,
	          column: 5
	        }
	      },
	      '55': {
	        start: {
	          line: 156,
	          column: 4
	        },
	        end: {
	          line: 156,
	          column: 65
	        }
	      },
	      '56': {
	        start: {
	          line: 161,
	          column: 0
	        },
	        end: {
	          line: 161,
	          column: 53
	        }
	      },
	      '57': {
	        start: {
	          line: 164,
	          column: 0
	        },
	        end: {
	          line: 164,
	          column: 35
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 33,
	            column: 24
	          },
	          end: {
	            line: 33,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 33,
	            column: 45
	          },
	          end: {
	            line: 109,
	            column: 1
	          }
	        },
	        line: 33
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 85,
	            column: 16
	          },
	          end: {
	            line: 85,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 85,
	            column: 23
	          },
	          end: {
	            line: 89,
	            column: 5
	          }
	        },
	        line: 85
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 129,
	            column: 22
	          },
	          end: {
	            line: 129,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 129,
	            column: 43
	          },
	          end: {
	            line: 140,
	            column: 1
	          }
	        },
	        line: 129
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 154,
	            column: 25
	          },
	          end: {
	            line: 154,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 154,
	            column: 43
	          },
	          end: {
	            line: 158,
	            column: 1
	          }
	        },
	        line: 154
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 155,
	            column: 13
	          },
	          end: {
	            line: 155,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 155,
	            column: 19
	          },
	          end: {
	            line: 157,
	            column: 3
	          }
	        },
	        line: 155
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 44,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 2
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        }],
	        line: 44
	      },
	      '1': {
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
	      '2': {
	        loc: {
	          start: {
	            line: 54,
	            column: 2
	          },
	          end: {
	            line: 72,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 54,
	            column: 2
	          },
	          end: {
	            line: 72,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 2
	          },
	          end: {
	            line: 72,
	            column: 3
	          }
	        }],
	        line: 54
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 57,
	            column: 23
	          },
	          end: {
	            line: 57,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 57,
	            column: 59
	          },
	          end: {
	            line: 57,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 57,
	            column: 65
	          },
	          end: {
	            line: 57,
	            column: 69
	          }
	        }],
	        line: 57
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 62,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 62,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 62,
	            column: 5
	          }
	        }],
	        line: 60
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 65,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 65,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 65,
	            column: 5
	          }
	        }],
	        line: 63
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }],
	        line: 66
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        }],
	        line: 69
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 75,
	            column: 22
	          },
	          end: {
	            line: 75,
	            column: 57
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 75,
	            column: 47
	          },
	          end: {
	            line: 75,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 75,
	            column: 53
	          },
	          end: {
	            line: 75,
	            column: 57
	          }
	        }],
	        line: 75
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 78,
	            column: 2
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 78,
	            column: 2
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 2
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        }],
	        line: 78
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 102,
	            column: 2
	          },
	          end: {
	            line: 108,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 102,
	            column: 2
	          },
	          end: {
	            line: 108,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 102,
	            column: 2
	          },
	          end: {
	            line: 108,
	            column: 3
	          }
	        }],
	        line: 102
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 112,
	            column: 23
	          },
	          end: {
	            line: 112,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 112,
	            column: 23
	          },
	          end: {
	            line: 112,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 112,
	            column: 49
	          },
	          end: {
	            line: 112,
	            column: 63
	          }
	        }],
	        line: 112
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 133,
	            column: 2
	          },
	          end: {
	            line: 135,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 133,
	            column: 2
	          },
	          end: {
	            line: 135,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 133,
	            column: 2
	          },
	          end: {
	            line: 135,
	            column: 3
	          }
	        }],
	        line: 133
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
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0
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
	      '11': [0, 0],
	      '12': [0, 0]
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
	  imageWith: '100px',
	  intermittent: false,
	  interval: 5,
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
	    cov_6jf7x2709.s[13]++;
	    img.style.width = options.imageWith;
	  }

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
	  contentItem.style.opacity = options.opacity;
	  cov_6jf7x2709.s[40]++;
	  videoEl.appendChild(div);
	  cov_6jf7x2709.s[41]++;

	  if (options.intermittent) {
	    cov_6jf7x2709.b[10][0]++;
	    cov_6jf7x2709.s[42]++;
	    div.style.animation = "animation: fade " + options.interval + "ms infinite 100ms;";
	    cov_6jf7x2709.s[43]++;
	    div.style.animationName = 'fade';
	    cov_6jf7x2709.s[44]++;
	    div.style.animationDuration = options.interval + "s";
	    cov_6jf7x2709.s[45]++;
	    div.style.animationDirection = 'alternate';
	    cov_6jf7x2709.s[46]++;
	    div.style.animationIterationCount = 'infinite';
	  } else {
	    cov_6jf7x2709.b[10][1]++;
	  }
	};

	var registerPlugin = (cov_6jf7x2709.s[47]++, (cov_6jf7x2709.b[11][0]++, videojs__default['default'].registerPlugin) || (cov_6jf7x2709.b[11][1]++, videojs__default['default'].plugin));
	cov_6jf7x2709.s[48]++;

	var onPlayerReady = function onPlayerReady(player, options) {
	  cov_6jf7x2709.f[2]++;
	  cov_6jf7x2709.s[49]++;
	  player.addClass('vjs-videojs-awesome-watermark');
	  cov_6jf7x2709.s[50]++;

	  if (!options.text) {
	    cov_6jf7x2709.b[12][0]++;
	    cov_6jf7x2709.s[51]++;
	    return;
	  } else {
	    cov_6jf7x2709.b[12][1]++;
	  }

	  cov_6jf7x2709.s[52]++;
	  setupWatermark(player, options);
	};

	cov_6jf7x2709.s[53]++;

	var awesomeWatermark = function awesomeWatermark(options) {
	  var _this = this;

	  cov_6jf7x2709.f[3]++;
	  cov_6jf7x2709.s[54]++;
	  this.ready(function () {
	    cov_6jf7x2709.f[4]++;
	    cov_6jf7x2709.s[55]++;
	    onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
	  });
	};

	cov_6jf7x2709.s[56]++;
	registerPlugin('awesomeWatermark', awesomeWatermark);
	cov_6jf7x2709.s[57]++;
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
