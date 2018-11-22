function capValue(min,max,value){
    return min>value?min:value>max?max:value;
}

function capColor(value){
    return capValue(0,255,value);
}

function Color(red,green,blue,alpha){
    this.red=capColor(red);
    this.green=capColor(green);
    this.blue=capColor(blue);
    this.alpha=capColor(alpha);
}

Color.prototype.setCtxToColor=function(){
    ctx.fillStyle = 'rgba(' + [this.red,this.green,this.blue,this.alpha].join() + ')';
}