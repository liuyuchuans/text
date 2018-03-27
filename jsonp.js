			//var oT=document.getElementById("t1");
			function jsonp(json) { //封装一个函数,方便以后使用,   参数传入一个json对象
				if(!json.url) { //考虑默认的情况
					alert('请输入地址');
					return;
				}
				json.data = json.data || {}; //考虑默认情况；
				json.cbName = json.cbName || "";

				var fnName = 'show' + Math.random(); //为了不 使每个函数名一样，给函数名添加一个随机数，避免重名
				fnName = fnName.replace('.', ""); //随机数会有小数点，函数名不能有小数点，所以replace()替换掉

				window[fnName] = function(json1) { //因为动态添加的script标签，每次调用都会创建一堆的script标签，页面加载的时候先清除一下	
					json.success && json.success(json1); //判断用户有没有转入success方法，有就执行，
					head.removeChild(script);
				}
				json.data[json.cbName] = fnName;
				var arr = []; //创建一个空数据，把用户转入的值放进去
				for(var name in json.data) {
					arr.push(name + "=" + json.data[name]);
					console.log(arr);
				};
				var script = document.createElement("script");
				//网址的格式是地址+?+&(中间是数据)；
				script.src = json.url + "?" + arr.json("&");
				var head = document.getElementsByTagName("head")[0];
				head.appendChild(script);

			}
