var number = 2;
		var obj = {
			number : 4,
			fn1 : (function(){
				this.number *= 2;
				number = number * 2;
				var number = 3;
				return function (){
					this.number *= 2;
					number *=3;
					alert(number);
				}
			})();
		};
		var fn1 = obj.fn1;
		alert(number);   
		fn1();         
		obj.fn1();      
		alert(window.number);
		alert(obj.number);  
