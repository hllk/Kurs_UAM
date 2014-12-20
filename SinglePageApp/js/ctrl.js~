UAM.InputCtrl = function(view, store) {
	view.on('clickButton', function(elementText) {
		store.add(elementText);
		store.save();
		view.clean();
    });
};


UAM.ListCtrl = function(view, store) {
    
	view.on('clickList', function(id, data) {
		store.update(id, data);
	});
    
    
	store.on('listAddElement', function(data) {
		view.addNewElement(data);
	});
    
    
	store.on('listUpdate', function(id, active) {
		view.updateList(id, active);
	});
    
};


UAM.FooterCtrl = function(view, store) {
    
	store.on('footerUpdate', function(active, elts) {
		view.update(active, elts);
	}); 
};