UAM.InputView = function(elt) {
    
	UAM.EventEmitter.call(this);
	this.buttonAdd = document.getElementById('add_button');
	this.textInput = document.getElementById('text_input');
	var view = this;
	this.buttonAdd.addEventListener('click', function() {
		if (this.textInput.value !== '') {
			view.emit('clickButton', this.textInput.value);
		}
	}.bind(view), false);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

UAM.InputView.prototype.clean = function() {
    document.getElementById('text_input').value='';
    
};



UAM.ListView = function(elt) {
    
	UAM.EventEmitter.call(this);
	this.list = document.getElementById('dynamic_list');
    
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addNewElement = function(elementText) {
	var listElement = document.createElement('li');
	listElement.textContent = elementText;
    var view = this;
	listElement.addEventListener('click', function(){
        var nodeList = Array.prototype.slice.call( document.getElementById('dynamic_list').children );
        var id = nodeList.indexOf(listElement);
		view.emit('clickList', id);
	});
	this.list.appendChild(listElement);
    
    
};

UAM.ListView.prototype.updateList = function(id, active) {
	if (active === true) {
        this.list.childNodes[id].style.backgroundColor = '#D7E6E5';
	}
	else {
		this.list.childNodes[id].style.backgroundColor = '#D7CBB5';
	}
    
};

UAM.FooterView = function(elt) {
    
	UAM.EventEmitter.call(this);
	this.footer = document.getElementById('active_footer');
    
};

UAM.FooterView.prototype.update = function(activeElements) {
	if (activeElements.length == 0) {
		this.footer.textContent = 'No active elements';
	}
	else {
		this.footer.textContent = 'Active elements: ';
		for (var i=0; i<activeElements.length; i++) {
			this.footer.textContent = this.footer.textContent + ' ' + activeElements[i];
		}
	}	
};


	



