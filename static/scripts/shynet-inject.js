(function () {
    if (typeof window === 'undefined') return;
    if (window.location.origin === 'http://localhost:3000') return;

    var script = document.createElement("script");
    script.src = "https://shynet-mpb4.onrender.com/ingress/77ed9a77-a856-4d64-87a3-a1bc634cfcad/script.js";
    script.defer = true;
    document.body.appendChild(script);

    var noscript = document.createElement("noscript");
    noscript.innerHTML =
        '<img src="https://shynet-mpb4.onrender.com/ingress/77ed9a77-a856-4d64-87a3-a1bc634cfcad/pixel.gif" alt="" referrerpolicy="no-referrer">';
    document.body.appendChild(noscript);
})();
