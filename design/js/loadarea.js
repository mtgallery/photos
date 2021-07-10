$(function(){
    var $setArea = $('#loadarea01'),
    $setMore = $('#loadmore01'),
    loadNum = 5,
    maxNum = 9;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/sns_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/sns_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/sns_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/sns_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
                $setMore.remove();
            });
        }
    });
});

$(function(){
    var $setArea = $('#loadarea02'),
    $setMore = $('#loadmore02'),
    loadNum = 5,
    maxNum = 9;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr01"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/link_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/link_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr01"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/link_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/link_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
                $setMore.remove();
            });
        }
    });
});


$(function(){
    var $setArea = $('#loadarea03'),
    $setMore = $('#loadmore03'),
    loadNum = 5,
    maxNum = 13;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr02"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/bnr_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/bnr_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr02"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/bnr_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/bnr_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
                $setMore.remove();
            });
        }
    });
});



$(function(){
    var $setArea = $('#loadarea04'),
    $setMore = $('#loadmore04'),
    loadNum = 5,
    maxNum = 14;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr03"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/app_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/app_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07 bnr03"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/design/images/app_img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/design/images/app_img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
                $setMore.remove();
            });
        }
    });
});
