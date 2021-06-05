if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("styleColor").href = "../src/css/load/dark_mode.css";
    var ColorModeGlob = "dark";
} else {
    document.getElementById("styleColor").href = "../src/css/load/white_mode.css";
    var ColorModeGlob = "light";
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    if (newColorScheme == 'dark') {
        document.getElementById("styleColor").href = "../src/css/load/dark_mode.css";
        var ColorModeGlob = "dark";
    } else {
        document.getElementById("styleColor").href = "../src/css/load/white_mode.css";
        var ColorModeGlob = "light";
    }
})