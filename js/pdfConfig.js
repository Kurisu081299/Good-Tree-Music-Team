const pdfSrc = "https://drive.google.com/file/d/1ULYF6Rm9gXgFvMynnD0DIK2MvnqMc8rr/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
