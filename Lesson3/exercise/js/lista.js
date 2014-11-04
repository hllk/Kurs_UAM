window.onload=function(){
	
	var addButton = document.getElementById('add_button');
	
	addButton.addEventListener('click', function(){
		var lista = document.getElementById('dynamic_list');
		var tekst = document.getElementById('text_input');
		
		if (tekst.value !== '') {
			var listElement = document.createElement('li');
			
			listElement.textContent = tekst.value;
			lista.appendChild(listElement);
			tekst.value='';
		}
		});
}