let create = document.querySelector('.create');
create.addEventListener('click', () => {
    let createPopup = document.querySelector('.create-popup');

    createPopup.innerHTML = `
        <div class="overlay-container">
            <div class="create-container">
                <div class="create-new-post">Create new post</div>
                <div class="drag-here">
                    <img src="../icons/create-film.PNG">

                    <div class="drag">
                        Drag photos and videos here
                    </div>
            
                    <button class="select-button">
                        Select from computer
                    </button>
                </div>

                <img src="../icons/xmark-solid.svg" class="close-sign">
            </div>
        </div>`

        let closeIcon = document.querySelector('.close-sign');
        closeIcon.addEventListener('click', () => {
          createPopup.innerHTML = '';
        });
})

