$(function() {    
				var swidth=$(window).width()*0.54;
				var sheight=$(window).height()*0.52;
				$('.page').height(swidth);
				$('.page').width(sheight);
				$('div.pinch-zoom').each(function() {      
					new RTP.PinchZoom($(this), {});    
				});  
			})