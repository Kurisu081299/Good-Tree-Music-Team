const pdfSrc = "https://drive.google.com/file/d/1-bgsoKSL4mSXYojx5OxPDG16B-Dc5SuX/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
