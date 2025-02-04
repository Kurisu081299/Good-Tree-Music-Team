const pdfSrc = "https://drive.google.com/file/d/106ov9dtMqM_YNL2BNbtHy4NDsRHgXhBL/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
