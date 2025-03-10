const pdfSrc = "https://drive.google.com/file/d/1oDuBUerTBi6aYQCTBdI7SjnRK49be_4r/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
