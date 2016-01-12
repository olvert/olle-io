aboutVisible = false;

toggleAbout = function () {
    ab = $('.about')[0];
    aboutVisible ? $(ab).removeClass('visible') : $(ab).addClass('visible');
    aboutVisible = !aboutVisible;
}