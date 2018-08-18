(function () {
	var group = document.getElementsByClassName('group')[0];

	window.addCard = function () {
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 1];

		//add div progress with dell card 
		var progress_dell = document.createElement('div');
		progress_dell.className = 'progress-dell';
		defaultCard.appendChild(progress_dell);

		//add progress
		var progress = document.createElement('progress');
		progress.setAttribute('value', '25');
		progress.setAttribute('max', '100');
		progress_dell.appendChild(progress);

		//add dell menu card
		var dell_menu_card = document.createElement('a');
		dell_menu_card.className = 'icon-dell-card';
		dell_menu_card.setAttribute('href', '');
		dell_menu_card.setAttribute('onclick', 'dellCard()');
		progress_dell.appendChild(dell_menu_card);

		

		group.insertBefore(defaultCard, lastChild);

		// var defaultProgressBar = document.createElement('div');
		// defaultProgressBar.className = 'myBar'
		// group.insertBefore(defaultProgressBar,lastChild);
		window.dellCard = function(){
			group.removeChild(defaultCard);
		}
	
	};
	
}());
