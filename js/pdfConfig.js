const pdfSrc = "https://drive.google.com/file/d/1WpbUgcgEoRh75zfWPyXlSOTemtr0tOfU/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
