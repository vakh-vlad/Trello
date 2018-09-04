(function () {
	var group = document.getElementsByClassName('group')[0];

	function dellCard(group, event) {
		console.log(event);
		var card = event.target.parentNode.parentNode;
		group.removeChild(card);
	}	

	window.addCardGroup = function(){
		var contentBlock = document.getElementsByClassName('content')[0];
		var defaultGroup = document.createElement('div');
		defaultGroup.className = 'group';

		defaultGroup.ondrop = window.cardDrop;
		defaultGroup.ondragover = window.onDragOver;

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

		var mainCardMenu = document.createElement('i');
		mainCardMenu.className = 'icon-main-card-menu';
		headerNewGroup.appendChild(mainCardMenu);


		var iconAddNewGroup = document.createElement('i');	
		defaultGroup.appendChild(iconAddNewGroup);

		//add div footer group with button addCard
		var footerNewGroup = document.createElement('div');
		footerNewGroup.className = 'footer';
		footerNewGroup.setAttribute('onclick', 'addCard( ' + defaultGroup.id +')');
		footerNewGroup.innerText = 'Add card...';
		defaultGroup.appendChild(footerNewGroup);		
	};

	window.cardDrop = function(event){
		console.log(event);
	};
	window.onDragOver = function(event){
		event.preventDefault();
	};

	window.addCard = function (groupID) {
		var group = document.getElementById(groupID);
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 2];

		defaultCard.draggable =true;
		defaultCard.ondragstart = function(event){
			console.log(event);
		};

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
		var dellCardMenu = document.createElement('i');
		dellCardMenu.className = 'icon-dell-card';		
		dellCardMenu.addEventListener('click', dellCard.bind(this, group));
		progressDell.appendChild(dellCardMenu);

		//add tittle card
		var cardTitle = document.createElement('p');		
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

		var iconAddMenu = document.createElement('i');
		iconAddMenu.className = 'icon-internal-card-menu';
		addMenu.appendChild(iconAddMenu);

		//add color menu
		var colorMenu = document.createElement('div');
		colorMenu.className = 'color-menu';		
		cardItems.appendChild(colorMenu);

		var btnColorMenu = document.createElement('i');
		btnColorMenu.className = 'btn-color-menu';	
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
		
		group.insertBefore(defaultCard, lastChild);
	};

	
}());
