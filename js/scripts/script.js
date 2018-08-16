(function () {
  const group = document.getElementsByClassName('group')[0];

  window.addCard = function () {
    const defaultCard = document.createElement('div');
    defaultCard.className = 'card';

    const lastChild = group.children[group.children.length - 1];
    group.insertBefore(defaultCard, lastChild);

    // var defaultProgressBar = document.createElement('div');
    // defaultProgressBar.className = 'myBar'
    // group.insertBefore(defaultProgressBar,lastChild);
  };


}());
