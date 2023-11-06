let post = document.querySelector('.post');
let saved = document.querySelector('.saved');
let tagged = document.querySelector('.tagged');

post.addEventListener('click', () => {
    post.classList.remove('Post');

    saved.classList.remove('Saved');
    tagged.classList.remove('Tagged')
})

saved.addEventListener('click', () => {
    saved.classList.add('Saved');

    post.classList.add('Post');
    tagged.classList.remove('Tagged')
})

tagged.addEventListener('click', () => {
    tagged.classList.add('Tagged');

    let taggedContainer = document.querySelector('.tagged-container');
    taggedContainer.classList.add('Tagged-Container');

    post.classList.add('Post')
    saved.classList.remove('Saved');
})