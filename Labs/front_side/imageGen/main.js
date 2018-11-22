

function setPixel(x,y,color){
    color.setCtxToColor();
    ctx.fillRect(x, y, 1, 1);
}

function getPixel(x,y){
    var imgd = ctx.getImageData(x, y, 1, 1).data;
    return new Color(imgd[0],imgd[1],imgd[2],imgd[3]);
}

function drawImage(src,callback){
    var img1 = new Image();
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0);
        callback(img1.width,img1.height);
    };
    img1.src = src;
}


var ctx;

window.onload=function(){
    var c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    drawImage('lavande.jpg',function(imgWidth,imgHeight){
        rain(imgWidth,imgHeight,2000,5,30,0.9);
    });
}

function rain(width,height,nbIteration,minLength,maxLength,alphaModifier){
    for(var i=0;i<nbIteration;i++){
        var currX=Math.floor(Math.random()*width);
        var currY=Math.floor(Math.random()*height);
        var color=getPixel(currX,currY);
        var currLength=minLength+Math.random()*(maxLength-minLength);
        currY++;
        for(var j=1;j<currLength && currY<height;j++){
            color.alpha=color.alpha*alphaModifier;
            setPixel(currX,currY++,color);
        }
    }
}

function intensify(width,height,){
    for(var i=0;i<height;i++){
        for(var j=0;j<width;j++){
            var color=getPixel(j,i);
            color.red+=(color.red-125)/2;
            color.blue+=(color.blue-125)/2;
            color.green+=(color.green-125)/2;
            setPixel(j,i,color);
        }
    }
}
