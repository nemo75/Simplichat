'use strict'

var app = {};

app.slider = {
    init :function(){
        this.start();
    },
    start :function(){
        this.slider();
        var self = this;
        setInterval(function(){
            self.slider();
        }, 90);
    },
    preload :function(chemise){
        if( typeof chemise !== 'undefined') {
            document.getElementById("preloader").style.background = "url(../"+chemise+") no-repeat -9999px -9999px";
        }
    },
    slider :function (){
        curPos++;
        if(curPos > bgImgsLen-1){
            curPos = 0;
        };
        this.preload(bgImgs[curPos+1]);
        this.update(bgImgs[curPos]);
    },
    update :function(img){
        $('.coverAccueil').css("background-image", "url(../" +img+ ')');
    }
};

$(document).ready(function(){
    app.slider.init();
});