const navDialogEl = document.querySelector('.dialog');
const dialogOverlay = document.querySelector('.dialog-overlay');

const myDialog = new Dialog(navDialogEl, dialogOverlay);
myDialog.addEventListeners('.open-dialog', '.close-dialog');


const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');

menuButton.addEventListener('click', function(event) {
  menuContainer.classList.toggle('hidden');
});


const computersButton = document.querySelectorAll('.computers-button');
const computersContainer = document.getElementById('computers-container');
const computersCards = document.getElementById('computers-cards');
const computersGrid = document.getElementById('computers-grid');
const idevicesButton = document.querySelectorAll('.idevices-button');
const idevicesContainer = document.getElementById('idevices-container');
const idevicesCards = document.getElementById('idevices-cards');
const idevicesGrid = document.getElementById('idevices-grid');
const collectionLabel = document.getElementById('collection-label');
const uiButtons = document.querySelectorAll('.computers-button, .idevices-button');
const modeButtons = document.querySelectorAll('.mode-button');

const toggleContainers = function() {
  idevicesContainer.classList.toggle('hidden');
  computersContainer.classList.toggle('hidden');

  uiButtons.forEach(function(element) {
    element.classList.toggle('text-gray-800');
    element.classList.toggle('text-purple-600');
  });

  if (!menuContainer.classList.contains('hidden')) {
    menuContainer.classList.add('hidden');
  }
}

computersButton.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const items = document.querySelectorAll('#computers-container .card');
    const label = 'Computers (' + items.length + ')';
    collectionLabel.innerHTML = label;
    document.title = label + ' - Leo\'s Collection';
    toggleContainers();
    event.preventDefault();
  });
});

idevicesButton.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const items = document.querySelectorAll('#idevices-container .card');
    const label = 'iDevices (' + items.length + ')'
    collectionLabel.innerHTML = label;
    document.title = label + ' - Leo\'s Collection';
    toggleContainers();
    event.preventDefault();
  });
});

const toggleMode = function(mode) {
  if (mode === 'grid') {
    computersCards.classList.add('hidden');
    idevicesCards.classList.add('hidden');
    computersGrid.classList.remove('hidden');
    idevicesGrid.classList.remove('hidden');
  } else {
    computersCards.classList.remove('hidden');
    idevicesCards.classList.remove('hidden');
    computersGrid.classList.add('hidden');
    idevicesGrid.classList.add('hidden');
  }
}

modeButtons.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const mode = element.dataset.mode;
    toggleMode(mode);

    modeButtons.forEach(function(button) {
      button.classList.toggle('text-gray-800');
      button.classList.toggle('text-purple-600');
    });
  });
});
