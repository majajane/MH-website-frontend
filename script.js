const navbar = document.querySelector('.header .flex .navbar');
const profile = document.querySelector('.header .icons .profile');
const userBtn = document.getElementById('user-btn');
const menuBtn = document.getElementById('menu-btn');

// Toggle navbar on menu button click
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    profile.classList.remove('active'); // hide profile if open
};

// shows profile dropdown on user-btn click
userBtn.onclick = (e) => {
    e.stopPropagation(); // prevent immediate closing
    profile.classList.toggle('active');
    navbar.classList.remove('active'); // hide navbar if open
};

// close both on scroll
window.onscroll = () => {
    profile.classList.remove('active');
    navbar.classList.remove('active');
};

// close profile dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!profile.contains(e.target) && e.target !== userBtn) {
        profile.classList.remove('active');
    }
});
