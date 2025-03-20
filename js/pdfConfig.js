const pdfSrc = "https://drive.google.com/file/d/1VaPofj2C37VVPM03OvTAnYHm10e_5qiF/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
