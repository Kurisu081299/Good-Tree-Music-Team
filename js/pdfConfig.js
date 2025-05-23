const pdfSrc = "https://drive.google.com/file/d/1wmGyHqJyEpg7Oqo8LNfkBmOjfSJ__n85/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
