export default () => {
    window.addEventListener('load', (event) => {
        let item = document.getElementById("nav-trigger");
        let menu = document.getElementById("mobile-nav");
        if (item && menu) {
            item.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            })
        }
    });
}