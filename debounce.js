function debounce(func, delay){
	var timer;
    
	return function(){
		var self = this;
		var args = arguments;
			
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){func.apply(self, args)},delay);
	}
}
