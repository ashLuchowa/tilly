function changePage() {
    const menuButtons = document.querySelectorAll('.container-row button');

    menuButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            document.location.href = (`${event.target.value}.html`);
        });
    });
}

changePage();