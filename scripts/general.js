// let homeBoldened = document.querySelector('.home');
// let exploreBoldened = document.querySelector('.explore');
// let messagesBoldened = document.querySelector('.messages');
// let reelsBoldened = document.querySelector('reels');

// exploreBoldened.addEventListener('click', () => {
//     exploreBoldened.classList.add('Bold');

//     homeBoldened.classList.remove('home');
//     homeBoldened.classList.add('Unbold')
// })










function resizedIcons() {
        /*INSATGRAM*/
        let instagram = document.querySelector('.instagram');
        instagram.classList.add('instagram-icon');
        instagram.setAttribute('src', '../icons/instagram.svg');
    
    
        /*HOME*/
        let Home = document.querySelector('.home');
        Home.classList.add('Home');
    
        let homeName = document.querySelector('.js-home-name');
        homeName.innerHTML = ''
    
        let homeIcon = document.querySelector('.home-icon');
        homeIcon.classList.add('Home-Icon');
        homeIcon.setAttribute('src', '../icons/home.svg')
    
    
        /*SEARCH*/
        let Search = document.querySelector('.search')
        Search.classList.add('Search');
    
        let searchName = document.querySelector('.js-search-name');
        searchName.innerHTML = ''
        
        let searchIcon = document.querySelector('.search-icon');
        searchIcon.classList.add('Search-Icon');
        searchIcon.setAttribute('src', '../icons//magnifying-glass-solid.svg');
    
    
        /*EXPLORE*/
        let Explore = document.querySelector('.explore')
        Explore.classList.add('Explore');
    
        let exploreName = document.querySelector('.js-explore-name');
        exploreName.innerHTML = ''
        
        let exploreIcon = document.querySelector('.explore-icon');
        exploreIcon.classList.add('Explore-Icon');
        exploreIcon.setAttribute('src', '../icons//compass-regular.svg');
    
    
        /*REELS*/
        let Reels = document.querySelector('.reels')
        Reels.classList.add('Reels');
    
        let reelsName = document.querySelector('.js-reels-name');
        reelsName.innerHTML = ''
        
        let reelsIcon = document.querySelector('.reels-icon');
        reelsIcon.classList.add('Reels-Icon');
        reelsIcon.setAttribute('src', '../icons//Reels.PNG');
    
    
        /*MESSAGES*/
        let Messages = document.querySelector('.messages')
        Messages.classList.add('Messages');
    
        let messagesName = document.querySelector('.js-messages-name');
        messagesName.innerHTML = ''
    
        let messagesTooltip = document.querySelector('.messages-tooltip');
        messagesTooltip.classList.add('Messages-Tooltip');
        
        let messagesIcon = document.querySelector('.messages-icon');
        messagesIcon.classList.add('Messages-Icon');
        messagesIcon.setAttribute('src', '../icons//paper-plane-regular.svg');
    
    
        /*NOTIFICATIONS*/
        let Notifications = document.querySelector('.notifications')
        Notifications.classList.add('Notifications');
    
        let notificationsName = document.querySelector('.js-notifications-name');
        notificationsName.innerHTML = ''
    
        let notificationsTooltip = document.querySelector('.notifications-tooltip');
        notificationsTooltip.classList.add('Notifications-Tooltip');
        
        let notificationsIcon = document.querySelector('.notifications-icon');
        notificationsIcon.classList.add('Notifications-Icon');
        notificationsIcon.setAttribute('src', '../icons//heart-regular.svg');
    
    
        /*CREATE*/
        let Create = document.querySelector('.create')
        Create.classList.add('Create');
    
        let createName = document.querySelector('.js-create-name');
        createName.innerHTML = ''
        
        let createIcon = document.querySelector('.create-icon');
        createIcon.classList.add('Create-Icon');
        createIcon.setAttribute('src', '../icons//square-plus-regular.svg');
    
    
        /*PROFILE*/
        let Profile = document.querySelector('.profile')
        Profile.classList.add('Profile');
    
        let profileName = document.querySelector('.js-profile-name');
        profileName.innerHTML = ''
        
        let profileIcon = document.querySelector('.js-profile-icon');
        profileIcon.classList.add('Profile-Icon');
        profileIcon.setAttribute('src', '../icons//user-circle-solid.svg');
    
    
        /*MORE*/
        let More = document.querySelector('.more')
        More.classList.add('More');
    
        let moreName = document.querySelector('.js-more-name');
        moreName.innerHTML = ''
        
        let moreIcon = document.querySelector('.more-options-icon');
        moreIcon.classList.add('More-Options-Icon');
        moreIcon.setAttribute('src', '../icons//bars-solid.svg');
}











let searchPopup = document.querySelector('.search-popup');
let notificationsPopup = document.querySelector('.notifications-popup')



let search = document.querySelector('.search');
search.addEventListener('click', () => {
    let leftSection = document.querySelector('.left-section');
    leftSection.classList.add('Left-Section');


    resizedIcons();

    notificationsPopup.innerHTML = ' ';
    
    searchPopup.classList.add('Search-Popup');
    searchPopup.innerHTML = `
        <div class="search-content">
            <div class="header">Search</div>
            <input type="text" class="search-bar" placeholder="Search">
            <!--<img src="../icons/circle-xmark-solid.svg" class="close-icon js-close-icon">-->

            <div class="bottom-border"></div>

            <div class="recent">Recent</div>
            <div class="clear">Clear all</div>

            <div class="container">
                <div class="searched">
                    <img src="../images/leo.jpg" class="searched-profile-pic">
                    <div class="searched-user-container">
                        <div class="searched-user">leomessi</div>
                        <div class="full-name">Leo Messi <span>&#183;</span> Following</div>    
                        <img src="../icons/xmark-solid.svg" class="close">
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="searched">
                    <img src="../images/download.jfif" class="searched-profile-pic">
                    <div class="searched-user-container">
                        <div class="searched-user">neymarjr</div>
                        <div class="full-name">Neymar Jr <span>&#183;</span> Following</div>    
                        <img src="../icons/xmark-solid.svg" class="close">
                    </div>
                </div>
            </div>
        </div>`
})



let notifications = document.querySelector('.notifications');
notifications.addEventListener('click', () => {
let leftSection = document.querySelector('.left-section');
leftSection.classList.add('Left-Section');



    resizedIcons();


    searchPopup.innerHTML = ' ';

    notificationsPopup.classList.add('Notifications-Popup');
    notificationsPopup.innerHTML = `
        <div class="notifications-content">
            <div class="header">Notifications</div>
            <div class="sub-header">New</div>
            <div class="notifications-container">
                <button class="user-story">
                    <img src="../images/Story 1.jpeg" class="preview">
                </button>
                <div class="container-content">
                    <div class="user1"><span class="excoba">_.excoba_dangote</span> is on</div>
                    <div class="others">Instagram. <span class="excoba">ben.jiro_</span> and 6</div>
                    <div class="who-follow">others also follow them. <span class="days">4d</span></div>
                </div>
                <button class="follow">Follow</button>

                <button class="user-story">
                    <img src="../images/Story 1.jpeg" class="preview">
                </button>

                <div class="container-content1">
                    <div class="user1">
                        Follow <span class="excoba">
                            richoffei2022, viollinos 
                            <img src="../icons/face-smile-regular.svg" class="emoji">lawd</span>
                    </div>

                    <div class="others">and others you know to see their photos</div>
                    <div class="who-follow">and videos. <span class="days">6d</span></div>
                </div>
                <div class="notifications-border"></div>

                <div class="this-month">This Month</div>
                <div class="user-story1">
                    <img src="../images/Story 1.jpeg" class="preview1">
                </div>
                <div class="container-content">
                    <div class="user1">Abass Nabilla future, from</div>
                    <div class="others">your contacts is on</div>
                    <div class="others">Instagram as</div>
                    <div class="who-follow">abassnabillafuture. <span class="days">1w</span></div>
                </div>
                <button class="follow">Follow</button>

                <div class="user-story2">
                    <img src="../images/Story 1.jpeg" class="preview2">
                </div>
                <div class="container-content">
                    <div class="user1"><span class="excoba">bismark_nyarko549</span> is on</div>
                    <div class="others">Instagram. <span class="excoba">mr_atitso</span> and 4</div>
                    <div class="who-follow">others also follow them. <span class="days">1w</span></div>
                </div>
                <button class="follow">Follow</button>

                <div class="user-story3">
                    <img src="../images/Story 1.jpeg" class="preview3">
                    <img src="../images/Flag_of_Ghana.png" class="second-preview">
                </div>
                <div class="container-content">
                    <div class="user1"><span class="excoba">danielh.asare, ben.jiro_</span> and </div>
                    <div class="others1"><span class="excoba">soy_ivonne_777</span> liked your story.</div>
                    <div class="who-follow"><span class="days">1w</span></div>
                </div> 
                <img src="../images/Story 4.jpeg" class="post-preview">
                
                <div class="user-story4 l">
                    <img src="../images/Flag_of_Ghana.png" class="preview4">
                </div>
                <div class="container-content">
                    <div class="user1 mightyfilmclub"><span class="excoba">mightyfilmclub.nz</span> started </div>
                    <div class="others1">following you. <span class="days">2w</span></div>
                    <!-- <div class="who-follow">others also follow them. </div> -->
                </div> 
                <button class="follow1">Follow</button>

                <div class="user-story5">
                    <img src="../images/Story 1.jpeg" class="preview5">
                </div>
                <div class="container-content">
                    <div class="user5"><span class="excoba">wilanzy</span> is on Instagram.</div>
                    <div class="others"><span class="excoba">kwabenaobeng445</span> and 3</div>
                    <div class="who-follow">others also follow them. <span class="days">2w</span></div>
                </div>
                <button class="follow2">Follow</button>
            </div>
    </div>`;
})





















