const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const toggleContainer = document.getElementsByClassName('toggle-container')[0];
var isSignInPage = true;
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    document.title = "SIGN UP | project-name";
    isSignInPage = false;
    handleResponsive()
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    document.title = "SIGN IN | project-name";
    isSignInPage = true;
    handleResponsive();
});

function handleResponsive() {
    var windowWidth = window.innerWidth;
    if (windowWidth < 572) {
        if (isSignInPage) {
            toggleContainer.style.left = '85%';
        } else {
            toggleContainer.style.left = '15%';
        }
    } else {
        toggleContainer.style.left = '50%';
    }
}
window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);
