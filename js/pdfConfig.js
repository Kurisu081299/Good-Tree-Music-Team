const pdfSrc = "https://drive.google.com/file/d/138Zzu5iegt6kc_trOGaW1cDLGc-5-cya/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
