(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		var ev = {lst: listener, cnt: context};
		this.listeners[eventName].push(ev);
		var listeners = this.listeners;
		return function() {
			var index = listeners[eventName].indexOf(ev);
			if (index > -1) {
				listeners[eventName].splice(index, 1);
			}
		};	
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		if (this.listeners[eventName]) {
			this.listeners[eventName].forEach(function(ev) {
				ev.lst.apply(ev.cnt, args);
			});
		}
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
