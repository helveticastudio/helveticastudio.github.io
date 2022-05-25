var host = window.location.hostname

if (host == "helveticastudio.github.io") {
    var pagina = window.location.pathname.substring(1);
} else {
    var pagina = window.location.search.substring(1);
}

if (pagina) {
    pagina = pagina
} else {
    pagina = "principal"
}
spa.$('body', {
    data: { pagina: pagina }
});