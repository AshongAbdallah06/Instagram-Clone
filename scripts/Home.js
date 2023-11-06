let followButton = document.getElementById("follow-button");
let followButton1 = document.getElementById("follow-button1");
let followButton2 = document.getElementById("follow-button2");
let followButton3 = document.getElementById("follow-button3");
let followButton4 = document.getElementById("follow-button4");


followButton.addEventListener('click', () => {
    if (followButton.innerText === 'Follow') {
        followButton.innerText = 'Following'
    } else {
        followButton.innerText = 'Follow'
    }
});

followButton1.addEventListener('click', () => {
    if (followButton1.innerText === 'Follow') {
        followButton1.innerText = 'Following'
    } else {
        followButton1.innerText = 'Follow'
    }
});

followButton2.addEventListener('click', () => {
    if (followButton2.innerText === 'Follow') {
        followButton2.innerText = 'Following'
    } else {
        followButton2.innerText = 'Follow'
    }
});

followButton3.addEventListener('click', () => {
    if (followButton3.innerText === 'Follow') {
        followButton3.innerText = 'Following'
    } else {
        followButton3.innerText = 'Follow'
    }
});

followButton4.addEventListener('click', () => {
    if (followButton4.innerText === 'Follow') {
        followButton4.innerText = 'Following'
    } else {
        followButton4.innerText = 'Follow'
    }
});

let userComment = document.querySelector('.user-comment');
let translate = document.getElementById("see-translation");

translate.addEventListener('click', () => {
    if (translate.innerHTML === 'See translation') {
        translate.innerHTML = 'Translating...'

        setTimeout(() => {
            translate.innerHTML = `See original`

            userComment.innerHTML = `<span class="i">quaaranconnect_</span> The Special Du'a After Fajr Prayer`
        }, 1000)
        userComment.innerHTML = `
        <span class="i">quaaranconnect_</span> الدعاء الخاص بصلاة الفجر
        `;
    } else {
        translate.innerHTML = 'See translation'

        userComment.innerHTML = `<span class="i">quaaranconnect_</span> الدعاء الخاص بصلاة الفجر`
    }
});


let post = document.getElementById("post-input");
let postButton = document.querySelector('.post-on');
let thought = document.querySelector('.thought');

post.addEventListener('keydown', (event) => {
    postButton.innerHTML = 'Post'

    if (event.key === 'Enter') {
        thought.innerHTML = post.value

        post.value = '';
        postButton.innerHTML = '';
    }
})

postButton.addEventListener('click', () => {
    post.value = '';
    postButton.innerHTML = '';
    console.log(post.innerHTML)
});


let post1 = document.getElementById("post-input1");
let postButton1 = document.querySelector('.post-on1');

post1.addEventListener('keydown', (event) => {
    postButton1.innerHTML = 'Post'

    if (event.key === 'Enter') {
        post1.value = '';
        postButton1.innerHTML = '';
    }
})

postButton1.addEventListener('click', () => {
    post1.value = '';
    postButton1.innerHTML = '';
    console.log(post1.innerHTML)
});

let post2 = document.getElementById("post-input2");
let postButton2 = document.querySelector('.post-on2');

post2.addEventListener('keydown', (event) => {
    postButton2.innerHTML = 'Post'

    if (event.key === 'Enter') {
        post2.value = '';
        postButton2.innerHTML = '';
    }
})

postButton2.addEventListener('click', () => {
    post2.value = '';
    postButton2.innerHTML = '';
    console.log(post2.innerHTML)
});

let post3 = document.getElementById("post-input3");
let postButton3 = document.querySelector('.post-on3');

post3.addEventListener('keydown', (event) => {
    postButton3.innerHTML = 'Post'

    if (event.key === 'Enter') {
        post3.value = '';
        postButton3.innerHTML = '';
    }
})

postButton3.addEventListener('click', () => {
    post3.value = '';
    postButton3.innerHTML = '';
    console.log(post3.innerHTML)
});

let post4 = document.getElementById("post-input4");
let postButton4 = document.querySelector('.post-on4');

post4.addEventListener('keydown', (event) => {
    postButton4.innerHTML = 'Post'

    if (event.key === 'Enter') {
        post4.value = '';
        postButton4.innerHTML = '';
    }
})





