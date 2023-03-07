const btn = document.getElementById("mode");
var darkMode = localStorage.getItem("dark-mode");
btn.classList.add("s-light");
localStorage.setItem("dark-mode", "disabled");

const enableDarkMode = () => {
    btn.classList.remove("s-light");
    btn.classList.add("s-dark");
    localStorage.setItem("dark-mode", "enabled");
    var head = document.getElementsByTagName("HEAD")[0];
    var link = document.createElement("link");
    link.id = "dark-mode";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "dark.css";
    head.appendChild(link);
};

const disableDarkMode = () => {
    btn.classList.add("s-light");
    btn.classList.remove("s-dark");
    localStorage.setItem("dark-mode", "disabled");
    const rm = document.getElementById("dark-mode");
    if (rm) {
        rm.remove();
    }
};

if (darkMode === "enabled") {
    enableDarkMode();
}

btn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});