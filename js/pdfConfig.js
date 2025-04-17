const pdfSrc = "https://drive.google.com/file/d/1UzvmoYSBcloOLIZz3c5sAaoF8mePb5J0/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
