/*eslint-env jquery*/
/*exported navFunction*/

var homeSection = $("#firstSection").html();

let selectedParagraph = $("#firstSection p:first-child");

let loremArray = selectedParagraph[0].innerText.split(" ", 10);

function appendOL(toAppend) {
    $("#theOL").append(`<li>${toAppend}</li>`);
}

appendOL("First Item");

$.each(loremArray, function(index, value) {
    appendOL(value);
});

function navFunction(controler) {
    if (controler == "Home") {
        $("#firstSection").html(homeSection);
        $.each(loremArray, function(index, value) {
            appendOL(value);
        });
    }else if (controler == "Forms") {
        $.ajax({
            url: "formsPage.html",
            success: function(data) {
                $("#firstSection").html(data);
            }
        });
    }
}

$("#landingAboutUs").click(function() {
    $("#landingInfoModal")
        .css("display", "block")
        .removeClass("animated zoomOutLeft")
        .addClass("animated zoomInLeft");

    setTimeout(function() {
        $("#landingInfoModal").removeClass("animated zoomInLeft").addClass("animated zoomOutLeft");
    }, 7000);

    setTimeout(function() {
        $("#landingInfoModal").css("display", "none");
    }, 7500);
});

$("#landingLearnMore").click(function() {
    $("#landingLearnMoreModal")
        .css("display", "block")
        .removeClass("animated zoomOutLeft")
        .addClass("animated zoomInLeft");

    $.ajax({
        url: "landingEmailMe.html",
        success: function(data) {
            $("#landingLearnMoreModal").html(data);
        }
    });
});

$("#landingDonate").click(function() {
    $("#landingDonateModal")
        .css("display", "block")
        .removeClass("animated zoomOutLeft")
        .addClass("animated zoomInLeft");

    setTimeout(function() {
        $("#landingDonateModal").removeClass("animated zoomInLeft").addClass("animated zoomOutLeft");
    }, 2000);

    setTimeout(function() {
        $("#landingDonateModal").css("display", "none");
    }, 2500);
});