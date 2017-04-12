$(function(){
    var $setArea = $('#loadarea'),
    $setMore = $('#loadmore'),
    loadNum = 3,
    maxNum = 10;

    $setMore.click(function(){
        var childLengh = $setArea.children('article').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<article class="list"' + '><a href="https://www.behance.net/tmizumot0430"' + ' target="_blank"><div class="photo" style="background-image:url(images/works/img' + ((childLengh)+((i)+1)) + '.png" alt="" /></a>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<article class="list"' + '><a href="https://www.behance.net/tmizumot0430"' + ' target="_blank"><div class="photo" style="background-image:url(images/works/img' + ((childLengh)+((i)+1)) + '.png" alt="" /></a>');
                $setMore.remove();
            });
        }
    });
    $(window).load(function(){
        $setMore.click();
    });
});
