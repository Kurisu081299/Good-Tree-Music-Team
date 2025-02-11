const pdfSrc = "https://drive.google.com/file/d/1s9vZ7JmXBX87EaP9Qwqnna2PIkGvoWpn/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});