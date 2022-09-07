(function() {

    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);

    function modalHandler(evt) {
        const modalBtnOpen = evt.target.closest('.js-modal'); // Уточниити чи це назви класів в html документі
        if (modalBtnOpen) { // open btn click
            const modalSelector = modalBtnOpen.dataset.modal;
            showModal(document.querySelector(modalSelector));
        }

        const modalBtnClose = evt.target.closest('.modal-close');
        if (modalBtnClose) { // close btn click
            evt.preventDefault();
            hideModal(modalBtnClose.closest('.modal-window'));
        }
    }

    function showModal(modalElem) {
        modalElem.classList.add('show');
        backdrop.classList.remove('hidden');
    }

    function hideModal(modalElem) {
        modalElem.classList.remove('show');
        backdrop.classList.add('hidden');
    }
})();