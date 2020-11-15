let galleryLi=$('.gallery-con>ul>li');
let galleryLiSize=galleryLi.length;
let arrBg2=[];


for(var i=0;i<galleryLi.length;i++){
    arrBg2.push("url(../../img/gallery_"+i+".jpg) no-repeat")
    galleryLi.eq(i).css({
        'background':arrBg2[i],
        'background-size':'100% 100%',
        'background-position':'center'
    })
}

let idx=-1;

function fadeGalleryFunc(){
    idx++;
    
    itemsLi.eq(idx).addClass('on').siblings().removeClass('on');
    
    galleryLi.eq(idx).fadeIn().siblings().fadeOut();
    
    if(idx>=galleryLiSize-1) idx=-1;
}

let setIn= setInterval(fadeGalleryFunc,3000);

let itemsLi=$('.items>ul>li');

itemsLi.hover(
    function(){
        clearInterval(setIn)
    },
    function(){
        setIn=setInterval(fadeGalleryFunc,3000);
    }
);

itemsLi.on('click',function(){
    
    let idx2=$(this).index();
    
    $(this).addClass('on').siblings().removeClass('on');
    
    idx=idx2;
    galleryLi.eq(idx).fadeIn().siblings().fadeOut(); 
    
    if(idx>=galleryLiSize-1) idx=-1;
})