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


const computersButton = document.getElementById('computers-button');
const computersContainer = document.getElementById('computers-container');
const idevicesButton = document.getElementById('idevices-button');
const idevicesContainer = document.getElementById('idevices-container');
const collectionLabel = document.getElementById('collection-label');

computersButton.addEventListener('click', function(event) {
  computersContainer.classList.remove('hidden');
  idevicesContainer.classList.add('hidden');

  collectionLabel.innerHTML = 'Computers';
});

idevicesButton.addEventListener('click', function(event) {
  idevicesContainer.classList.remove('hidden');
  computersContainer.classList.add('hidden');

  collectionLabel.innerHTML = 'iDevices';
});
