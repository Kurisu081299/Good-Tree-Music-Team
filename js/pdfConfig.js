const pdfSrc = "https://drive.google.com/file/d/1lxonPyTRMfiz9_siRc4_3l1b08OdyfZY/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
