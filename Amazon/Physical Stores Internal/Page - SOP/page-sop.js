/// <reference path="../../JS/TCSCO_Core.js" />
var pagecount = 0;
var offset = 1144;
var currentPage = 0;

LOB.OnReady.add(function () {
    Gleam.pageCount.init();
    pagecount = LOB.pages.length - 1;
    var windowHeight = ($(window).height() / 2) + ($('#LOBNavigation').height() / 2);
    $('#LOBNavigation').animate({ "top": "-" + windowHeight }, "normal");
    $('.Callout').wrapInner('<span>');
    $('.Image').wrapInner('<span>');
});

var Gleam = {
    pages: [],
    currentPage: null,
    next: function () {
        if (currentPage < pagecount - 1) {
            Gleam.currentPage.className = 'page';
            for (var xx = 0; xx < LOB.pages.length; xx++) {

                LOB.pages[xx].style.marginLeft = (LOB.pages[xx].offset - offset) + 'px';
                LOB.pages[xx].offset = (LOB.pages[xx].offset - offset);
            }
            currentPage++;
            Gleam.currentPage = Gleam.pages[currentPage];
            Gleam.currentPage.className = 'page sel';
        }

    },
    back: function () {

        if (currentPage > 0) {
            Gleam.currentPage.className = 'page';
            for (var xx = 0; xx < LOB.pages.length; xx++) {
                LOB.pages[xx].style.marginLeft = (LOB.pages[xx].offset + offset) + 'px';
                LOB.pages[xx].offset = (LOB.pages[xx].offset + offset);

            }
            currentPage--;
            Gleam.currentPage = Gleam.pages[currentPage];
            Gleam.currentPage.className = 'page sel';
        }
    },
    pageCount: {
        init: function (el) {
            LOB.pagination(Gleam);


        }
    }

};