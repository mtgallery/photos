$(function(){
    var $setArea = $('#loadarea'),
    $setMore = $('#loadmore'),
    loadNum = 3,
    maxNum = 31;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><a href=""' + ' target="_blank"><div class="photo" style="background-image:url(images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg)" /></a>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><a href=""' + ' target="_blank"><div class="photo" style="background-image:url(images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg)" /></a>');
                $setMore.remove();
            });
        }
    });
    // $(window).load(function(){
    //     $setMore.click();
    // });
});
