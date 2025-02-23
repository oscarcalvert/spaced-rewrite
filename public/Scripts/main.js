window.onload = () => {

    let bg = document.getElementById("color-mode-bg")
    let colorLink = document.getElementById("color-link")
    let setColor = localStorage.getItem("colorMode")
    if (setColor) {
        colorLink.setAttribute("href", "./Styles/" + setColor + ".css")
        bg.setAttribute("class", "")
        bg.classList.add(setColor)

    }

    document.getElementById("color-mode-switch").addEventListener("click", () => {
        if (bg.classList.contains("lightMode")) {
            bg.classList.remove("lightMode")
            bg.classList.add("darkMode")
            colorLink.setAttribute("href", "./Styles/darkMode.css")
            localStorage.setItem("colorMode", "darkMode")
        } else {
            bg.classList.add("lightMode")
            bg.classList.remove("darkMode")
            colorLink.setAttribute("href", "./Styles/lightMode.css")
            localStorage.setItem("colorMode", "lightMode")
        }
    })
}



