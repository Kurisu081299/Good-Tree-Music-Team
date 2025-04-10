const pdfSrc = "https://drive.google.com/file/d/1URLSmLS7236DK1FJei5iewlpb5u-AWqT/preview";

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("pdfViewer");
    if (iframe) {
        iframe.src = pdfSrc;
    }
});
