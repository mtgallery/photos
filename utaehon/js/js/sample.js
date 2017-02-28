$(function() {
    SampleClass.init();
});

var SampleClass = {
    init: function() {
        Flipsnap("#sampleFlipsnap", {
            distance: 163,
            transitionDuration: 1000
            // maxPoint: 3
        });
    },
};



// $(function($) {
//   var $flipsnap = $('.gallery-flipsnap');
//   var $this, items;
//   $flipsnap.each(function() {
//     $this = $(this);
//     items = $this.find('>ul>li').length;
//     $this.find('>ul').css({width: 75 * items + '%'});
//     $this.find('>ul>li').css({width: 100 / items + '%'});
//     Flipsnap($this.find('>ul').get(0));
//   });
// });
