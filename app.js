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

const showCollection = function(collection) {
  let items = null;
  let label = null;

  if (collection === 'computers') {
    items = document.querySelectorAll('#computers-container .card');
    label = 'Computers (' + items.length + ')';
    idevicesContainer.classList.add('hidden');
    computersContainer.classList.remove('hidden');
  } else {
    items = document.querySelectorAll('#idevices-container .card');
    label = 'iDevices (' + items.length + ')';
    idevicesContainer.classList.remove('hidden');
    computersContainer.classList.add('hidden');
  }

  uiButtons.forEach(function(element) {
    const dataCollection = element.dataset.collection;
    if (dataCollection === collection) {
      element.classList.remove('text-gray-800');
      element.classList.add('text-purple-600');
    } else {
      element.classList.add('text-gray-800');
      element.classList.remove('text-purple-600');
    }
  });

  collectionLabel.innerHTML = label;

  const params = new URLSearchParams(location.search);
  params.set('collection', collection);
  window.history.replaceState({}, '', `${location.pathname}?${params}`);
  // TODO: replaceState is not updating the title
  document.title = `${label} - Leo's Collection`;

  // Mobile: close menu after click
  if (!menuContainer.classList.contains('hidden')) {
    menuContainer.classList.add('hidden');
  }
}

uiButtons.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const collection = element.dataset.collection;
    showCollection(collection);

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

  modeButtons.forEach(function(button) {
    const dataMode = button.dataset.mode;
    if (dataMode === mode) {
      button.classList.remove('text-gray-800');
      button.classList.add('text-purple-600');
    } else {
      button.classList.add('text-gray-800');
      button.classList.remove('text-purple-600');
    }
  });

  const params = new URLSearchParams(location.search);
  params.set('mode', mode);
  window.history.replaceState({}, '', `${location.pathname}?${params}`);
}

modeButtons.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const mode = element.dataset.mode;
    toggleMode(mode);
  });
});


const params = new URLSearchParams(location.search);

if (params.get('collection')) {
  showCollection(params.get('collection'));
}

if (params.get('mode')) {
  toggleMode(params.get('mode'));
}
