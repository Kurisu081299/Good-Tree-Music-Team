const pdfSrc = "https://drive.google.com/file/d/1km1PdcYW9kUo2gt5OyZJWCauq83v5QjC/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
