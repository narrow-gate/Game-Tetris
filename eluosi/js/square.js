/*var Square=function(){
    this.data=[
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0]];
        this.origin={
            x:0,
            y:0
};
this.dir=0;//定义一个方向，相当于旋转的一个索引
//rotates是一个3*4*4的数组，3是索引
this.rotates=[
    [
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0]],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]],
            [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]],
            [
                [0,0,0,0],
                [2,2,2,2],
                [0,0,0,0],
                [0,0,0,0]]
];
//采用方法
this.canRotate=function(isValid){
var d=this.dir+1;
if(d==4){
    d=0;
}
    var test=[
        [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]];
    for(var i=0;i<this.data.length;i++){
        for(var j=0;j<this.data[0].length;j++){
           test[i][j]=this.rotates[d][i][j];
        }
    }
    return isValid(this.origin,test);
}
this.rotate=function(){
    this.dir=this.dir+1;
    if(this.dir==4){
        this.dir=0;
    }
    for(var i=0;i<this.data.length;i++){
        for(var j=0;j<this.data[0].length;j++){
            this.data[i][j]=this.rotates[this.dir][i][j];
        }
    }
} 


this.canDown= function(isValid){
    var test={};
    test.x=this.origin.x+1;
    test.y=this.origin.y;
    return isValid(test,this.data);
}
this.down=function(){
    this.origin.x=this.origin.x+1;
}
this.canLeft=function(isValid){
    var  test={};
    test.x=this.origin.x;
    test.y=this.origin.y-1;
    return isValid(test,this.data);
}
this.left=function(){
    this.origin.y=this.origin.y-1;
}
this.canRight=function(isValid){
    var  test={};
    test.x=this.origin.x;
    test.y=this.origin.y+1;
    return isValid(test,this.data);
}
this.right=function(){
    this.origin.y=this.origin.y+1;
}
}

 * 
var Square=function(){
    this.data=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]];
        this.origin={
            x:0,
            y:0
};
this.dir=0;
this.canRotate=function(isValid){
    var d=(this.dir+1)%4;
    if(d==4){
        d=0;
    }
        var test=[
            [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]];
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.data[0].length;j++){
               test[i][j]=this.rotates[d][i][j];
            }
        }
        return isValid(this.origin,test);
    }
    this.rotate=function(num){
        if(!num)
        num=1;
        this.dir=(this.dir+1)%4;
       
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.data[0].length;j++){
                this.data[i][j]=this.rotates[this.dir][i][j];
            }
        }
    } 
    this.canDown= function(isValid){
        var test={};
        test.x=this.origin.x+1;
        test.y=this.origin.y;
        return isValid(test,this.data);
    }
    this.down=function(){
        this.origin.x=this.origin.x+1;
    }
    this.canLeft=function(isValid){
        var  test={};
        test.x=this.origin.x;
        test.y=this.origin.y-1;
        return isValid(test,this.data);
    }
    this.left=function(){
        this.origin.y=this.origin.y-1;
    }
    this.canRight=function(isValid){
        var  test={};
        test.x=this.origin.x;
        test.y=this.origin.y+1;
        return isValid(test,this.data);
    }
    this.right=function(){
        this.origin.y=this.origin.y+1;
    }
    }
 */

var Square = function() {
    // 方块的数据
    this.data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    // 原点
    this.origin = {
        x: 0,
        y: 0
    }

 // 方向
    this.dir = 0;
}
// 旋转
Square.prototype.canRotate = function(isValid) {
    var d = (this.dir + 1) % 4;
     if(d==4){
        d=0;
    }
    var test = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            test[i][j] = this.rotates[d][i][j];
        }
    }
    return isValid(this.origin, test);
}

Square.prototype.rotate = function(num) {
    if (!num) num = 1;
    this.dir = (this.dir + num) % 4;
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            this.data[i][j] = this.rotates[this.dir][i][j];
        }
    }
}
// 下移
Square.prototype.canDown = function(isValid) {
    var test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data);
}
Square.prototype.down = function() {
    this.origin.x = this.origin.x + 1;
}
// 左移
Square.prototype.canLeft = function(isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
}
Square.prototype.left = function() {
    this.origin.y = this.origin.y - 1;
}

// 右移
Square.prototype.canRight = function(isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
}
Square.prototype.right = function() {
    this.origin.y = this.origin.y + 1;
}