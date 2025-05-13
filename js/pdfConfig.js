const pdfSrc = "https://drive.google.com/file/d/1071889bhQwTQ9MvDd12oij0JFVn_ZkAi/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
