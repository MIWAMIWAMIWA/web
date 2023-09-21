const OPEN_CLASSNAME = "open";

const navigation = document.getElementById("navigation-links")

function toggleMenu() {
    if (navigation.classList.contains(OPEN_CLASSNAME)) {
        navigation.classList.remove(OPEN_CLASSNAME);
    } else {
        navigation.classList.add(OPEN_CLASSNAME);
    }
}