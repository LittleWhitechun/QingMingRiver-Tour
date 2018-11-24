			function move(){
				//
				var X = $('#qmimg').offset().top;
				var Y = $('#qmimg').offset().left;
				console.log(X+" "+Y);
				if(X>-1600){
					$('#qmimg').offset( {top:X-30,left:0});
				}
				
			}
			function funcTest(){
				var X = $('#qmimg').offset().top;
				var Y = $('#qmimg').offset().left;
				window.setInterval("move()",50);
			}
//			window.onload = funcTest;