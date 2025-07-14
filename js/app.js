// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
});

function selectdoublevideos(methodPill, scenePill, baseline, video0, video1) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");

    // video_active0 = document.getElementById("compVideo0");
    video0.src = `assets/videos/${baseline}/${scene}.mp4`;

    // video_active1 = document.getElementById("compVideo1");
    video1.src = `assets/videos/${"ours"}/${scene}.mp4`;

    video0.load();    
    video1.load();    
}

function selectvideos(methodPill, scenePill, video) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");

    video.src = `assets/videos/ours/more/${scene}.mp4`;

    video.load();    
}