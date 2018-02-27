/*
 *  事件防抖：当持续触发事件时，停止触发该事件一定时间后，才执行该事件
 *  func function 需要执行事件的函数
 *  [,delay] string  停止触发该事件后执行该事件的延迟时间
 *  [,isImmediate] boolean 是否在首次触发事件时执行一次该事件，只有当设置为true时，func才会返回其值。
 */
function debounce(func, delay, isImmediate){
	var timer;//定时器句柄
	var isFirst = true;//是否首次渲染标志
	return function(){
		var self = this;
		var args = arguments;
		if(isImmediate && isFirst){//立即执行并且是首次执行
			isFirst = false;
			return func.apply(self, args);//修正this，及其参数
		}
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			isFirst = true;
			func.apply(self, args);//修正this，及其参数
		},delay || 1000);
	}
}


/*
 *  事件节流：当持续触发事件时，每间隔一段时间执行该事件
 *  func function 需要执行事件的函数
 *  interval string  间隔时间
 */
function throttle(func, interval){
	var timer;//定时器句柄
	var previous = 0;//上一次触发事件的时间
	return function(){
		var self = this;
		var args = arguments;
		var now = + new Date();
		if(now - previous > interval){//2次触发事件的时间大于间隔时间，则执行该事件
			previous = now;
			return func.apply(self,args);//修正this，及其参数
		}
	}
}


/*
 * es5数组去重
 * array array 需要去重的数组
 */
 function unique(array){
	var isPushedNaN = false; 
 	return array.filter(function(item,index){
		if(!(item === item) && !isPushedNaN){//修正NaN不能被添加进数组
			return isPushedNaN = true;
		}
 		else return index === array.lastIndexOf(item);

 	})
 }
