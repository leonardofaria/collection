const body = document.body;
const modal = document.querySelector('.modal');

const openModal = document.querySelectorAll('.modal-open');
const closeModal = document.querySelectorAll('.modal-close');
const overlay = document.querySelector('.modal-overlay');

const toggleModal = function() {
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function(event) {
    event.preventDefault();
    toggleModal();
  });
};

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener('click', toggleModal);
}

overlay.addEventListener('click', toggleModal);

document.onkeydown = function(evt) {
  evt = evt || window.event;
  let isEscape = false;

  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal();
  }
};


const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');

menuButton.addEventListener('click', function(event) {
  menuContainer.classList.toggle('hidden');
});


const computersButton = document.querySelectorAll('.computers-button');
const computersContainer = document.getElementById('computers-container');
const idevicesButton = document.querySelectorAll('.idevices-button');
const idevicesContainer = document.getElementById('idevices-container');
const collectionLabel = document.getElementById('collection-label');
const uiButtons = document.querySelectorAll('.computers-button, .idevices-button');

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
    collectionLabel.innerHTML = 'Computers';
    toggleContainers();
  });
});

idevicesButton.forEach(function(element) {
  element.addEventListener('click', function(event) {
    collectionLabel.innerHTML = 'iDevices';
    toggleContainers();
  });
});

new WOW().init();
