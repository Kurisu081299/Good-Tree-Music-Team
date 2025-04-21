const pdfSrc = "https://drive.google.com/file/d/1YObDfgPpnH7qOkp32dPDVKTjEGhHz43U/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
