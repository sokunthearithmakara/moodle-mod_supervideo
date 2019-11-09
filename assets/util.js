window.onload = function() {
    var videoBoxWidth = 0;

    var videoBox = document.getElementById('supervideoworkaround');
    if (videoBox.offsetWidth) {
        videoBoxWidth = videoBox.offsetWidth;
    }
    if (videoBox.clientWidth) {
        videoBoxWidth = videoBox.clientWidth;
    }

    var videoed0 = document.getElementById('videoed0');
    if (videoed0) {
        var videoBoxHeight1 = videoBoxWidth * 3 / 4;

        videoed0.style.width = videoBoxWidth + "px";
        videoed0.style.height = videoBoxHeight1 + "px";
    }

    var videohd1 = document.getElementById('videohd1');
    if (videohd1) {
        var videoBoxHeight2 = videoBoxWidth * 9 / 16;

        videohd1.style.width = videoBoxWidth + "px";
        videohd1.style.height = videoBoxHeight2 + "px";
    }

    var videohd2 = document.getElementById('videohd2');
    if (videohd2) {
        var videoBoxHeight3 = videoBoxWidth * 9 / 16;

        videohd2.style.width = videoBoxWidth + "px";
        videohd2.style.height = videoBoxHeight3 + "px";
    }
};
