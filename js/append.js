let spanLeft = $('span.arrow.arrowleft');
let spanRight = $('span.arrow.arrowright');
let productLi = $('.product>ul>li');
let arrBg = [];

for (var i=0;i<productLi.length;i++){
    arrBg.push("url(../../img/section_3_" + i + ".png) no-repeat")
    productLi.eq(i).css({
        'background': arrBg[i],
        'background-size':'100% 100%',
        'background-position':'center'
    })
}

spanLeft.on('click', appendFunc);

function appendFunc(e) {

    let productLiFirst = $('.product>ul>li').eq(0);
    $('.product>ul').append(productLiFirst)
}

spanRight.on('click', prependFunc);

function prependFunc(e) {

    console.log(e.currentTarget)
    let idx = $('.product>ul>li').length - 1;

    let productLiLast = $('.product>ul>li').eq(idx);

    $('.product>ul').prepend(productLiLast)
}



