"use strict";var homeSection=$("#firstSection").html(),selectedParagraph=$("#firstSection p:first-child"),loremArray=selectedParagraph[0].innerText.split(" ",10);function appendOL(e){$("#theOL").append("<li>".concat(e,"</li>"))}function navFunction(e){"Home"==e?($("#firstSection").html(homeSection),$.each(loremArray,function(e,t){appendOL(t)})):"Forms"==e&&$.ajax({url:"formsPage.html",success:function(e){$("#firstSection").html(e)}})}appendOL("First Item"),$.each(loremArray,function(e,t){appendOL(t)});