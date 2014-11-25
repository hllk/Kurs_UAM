UAM.Store = function () {

	UAM.EventEmitter.call(this);
	this.data  = [];
	this.activeElements = [];
    
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

//adding elements to the list
UAM.Store.prototype.add = function (data) {
	this.data.push(data);
	this.activeElements.push(false);
	this.emit("listAddElement", data);
};

//updating active elements of the list
UAM.Store.prototype.update = function (id, data) {
	var active = false;
	if (this.activeElements[id] == false) {
		this.activeElements[id] = true;
		active = true;
	}
	else {
		this.activeElements[id] = false;
	}
	
	var elts = [];
	for (var i=0; i<this.data.length; i++) {
		if (this.activeElements[i] == true) {
			elts.push(this.data[i]);
		}
	}
	this.emit('footerUpdate', elts);
	this.emit('listUpdate', id, active);
    
};
