"use strict";

window.GDO = window.GDO || {};

window.GDO.effects = window.GDO.effects || {};

/**
 * Wrap animation in a more powerful promise.
 */
window.GDO.effects.Sequence = function($e, sequence) {
	var defer = $.Deferred();
	var options = sequence.gdoOptions||{};
	var yourThen = options['done'];
	var yourFail = options['fail'];
	options['done'] = () => { yourThen && yourThen(); return defer.resolve(); };
	options['fail'] = () => { yourFail && yourFail(); return defer.reject(); };
	sequence.gdoOptions = undefined;
	$e.animate(sequence, options);
	return defer.promise();
};

/**
 * White flashing
 **/
window.GDO.effects.flashWhite = function($e) {
	return GDO.effects.Sequence($e, {
			'color': '#000',
			'background-color': '#fff',
			'opacity': '0.0',
			'gdoOptions': { 
				duration: 100,
			}
		}).then(function() {
			GDO.effects.Sequence($e, {
				'opacity': '1.0',
				'gdoOptions': { 
					duration: 250,
				}
			}).then(function() {
				GDO.effects.Sequence($e, {
					'opacity': '0.9',
					'background-color': 'inherit',
					'gdoOptions': { 
						duration: 450,
					}
				})			
			})		
		});
};

window.GDO.effects.flashGold = function($e) {
	var beforeFG = $e.css('color');
	var beforeBG = $e.css('background-color');
	return GDO.effects.Sequence($e, {
			'color': '#ffd700',
			'background-color': '#eee',
			'gdoOptions': { 
				duration: 150,
			}
		}).then(function() {
			GDO.effects.Sequence($e, {
				'color': '#fff',
				'background-color': '#000',
				'gdoOptions': { 
					duration: 350,
				}
			}).then(function(){
				$e.css('color', beforeFG);
				$e.css('background-color', beforeBG);
			});			
		});
		
};

// -------------- //
// --- Easing --- //
// -------------- //

/**
 * Bouncy easing stolen from??!?!? :(
 */
$(function(){
	
	 $.extend($.easing,{
	 
		/**
		 * I seariously have no record on where that code is from.
		 */
		bounceOut: function (x, t, b, c, d){
			if((t/=d) < (1/2.75)){
				return c*(7.5625*t*t) + b;
			} else if(t < (2/2.75)){
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if(t < (2.5/2.75)){
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
			}
		},
		
		easeOut: function (x, t, b, c, d){
			return -c *(t/=d)*(t-2) + b;
		},
		
		elasticOut: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		}, // Who does not lax about this trailing comma is officially unsupported. Great protection from noobs.
		
	});

});
