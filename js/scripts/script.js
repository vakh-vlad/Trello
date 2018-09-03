(function () {
	var group = document.getElementsByClassName('group')[0];

	function dellCard(group, event) {
		// console.log(event);
		var card = event.target.parentNode.parentNode;
		group.removeChild(card);
	}	

	window.addCardGroup = function(){
		var contentBlock = document.getElementsByClassName('content')[0];
		var defaultGroup = document.createElement('div');
		defaultGroup.className = 'group';
		defaultGroup.id = contentBlock.children.length;
		contentBlock.appendChild(defaultGroup);

		//add div header of group
		var headerNewGroup = document.createElement('div');
		headerNewGroup.className = 'header';
		defaultGroup.appendChild(headerNewGroup);

		//add title with mein menu card
		var groupTitle = document.createElement('p');
		groupTitle.className = 'group-title';
		groupTitle.innerText = 'Title 1';
		headerNewGroup.appendChild(groupTitle);

		var mainCardMenu = document.createElement('a');
		mainCardMenu.className = 'icon-main-card-menu';
		mainCardMenu.setAttribute('href', '');
		headerNewGroup.appendChild(mainCardMenu);

		//add div footer group with button addCard
		var footerNewGroup = document.createElement('div');
		footerNewGroup.className = 'footer';
		footerNewGroup.setAttribute('onclick', 'addCard(\'defaultGroup.id\')');
		footerNewGroup.innerText = 'Add card...';
		defaultGroup.appendChild(footerNewGroup);		
	};

	window.addCard = function (groupID) {
		group = document.getElementById(groupID);
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 1];

		//add div progress with dell card 
		var progressDell = document.createElement('div');
		progressDell.className = 'progress-dell';
		defaultCard.appendChild(progressDell);

		//add progress
		var progress = document.createElement('progress');
		progress.setAttribute('value', '25');
		progress.setAttribute('max', '100');
		progressDell.appendChild(progress);

		//add dell menu card
		var dellCardMenu = document.createElement('a');
		dellCardMenu.className = 'icon-dell-card';
		dellCardMenu.setAttribute('href', '');
		// dellCardMenu.setAttribute('onclick', 'dellCard()');
		progressDell.appendChild(dellCardMenu);

		//add tittle card
		var cardTitle = document.createElement('p');
		// var nambTitle = group.children.length -1
		cardTitle.className = 'card-title';
		cardTitle.innerText = 'Title'+ (group.children.length -2);
		defaultCard.appendChild(cardTitle);

		//add section card-items
		var cardItems = document.createElement('section');
		cardItems.className = 'card-items';		
		defaultCard.appendChild(cardItems);
		
		//add add menu with icon
		var addMenu = document.createElement('div');
		addMenu.className = 'add-menu';		
		cardItems.appendChild(addMenu);

		var iconAddMenu = document.createElement('a');
		iconAddMenu.className = 'icon-internal-card-menu';
		iconAddMenu.setAttribute('href', '');
		addMenu.appendChild(iconAddMenu);

		//add color menu
		var colorMenu = document.createElement('div');
		colorMenu.className = 'color-menu';		
		cardItems.appendChild(colorMenu);

		var btnColorMenu = document.createElement('a');
		btnColorMenu.className = 'btn-color-menu';
		btnColorMenu.setAttribute('href', '');
		colorMenu.appendChild(btnColorMenu);
		
		//add icon clock
		var clock = document.createElement('a');
		clock.className = 'icon-clock';
		clock.setAttribute('href', '');
		cardItems.appendChild(clock);

		var time = document.createElement('time');
		time.setAttribute('datatime', '31-08');
		time.innerText = 'Aug 31';
		clock.appendChild(time);

		//add avatar
		var avatar = document.createElement('img');
		avatar.setAttribute('src', './images/smile_fase.jpg');
		avatar.setAttribute('alt','');
		cardItems.appendChild(avatar);

		var removeIcon = defaultCard.children[0].children[1];
		removeIcon.addEventListener('click', dellCard.bind(this, group));
		
		group.insertBefore(defaultCard, lastChild);
	};

	
}());
