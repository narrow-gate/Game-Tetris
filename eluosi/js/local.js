var Local = function() {
    // 游戏对象
    var game;
    var INTERVAL = 300;    // 时间间隔
    var timer = null;    // 定时器
    var timeCount = 0;  // 游戏总时间计数器
    var time = 0;//时间
    var bindKeyEvent = function() {   // 绑定键盘事件
        document.onkeydown = function(e) {
            if (e.keyCode == 38) { // up
                game.rotate();
            } else if (e.keyCode == 39) { //right
                game.right();
            } else if (e.keyCode == 40) { //down
                game.down();
            } else if (e.keyCode == 37) { //left
                game.left();
            } else if (e.keyCode == 32) { //space
                game.fall();
            }
        }
    }
   var move = function() {    // 移动
        timeFunc();
        if (!game.down()) {
            game.fixed();
            var line = game.checkClear();
            if (line) {
                game.addScore(line);
            }
            var gameOver = game.checkGameOver();
            if (gameOver) {
                stop();
            } else {
                game.performNext(generateType(), generateDir());
            }
        }
    }
   var timeFunc = function() { // 计时函数
        timeCount = timeCount + 1;
        if (timeCount === 2) {
            timeCount = 0;
            time = time + 1;
            game.setTime(time);
        }
    }

    // 随机生成一个方块种类
         var generateType=function(){
        return  Math.ceil(Math.random()*7)-1;
    }
   
//随机生成一个方块旋转次数
var generateDir=function(){
    return  Math.ceil(Math.random()*4)-1;
}
    var start = function() {    // 开始
        var doms = {
            gameDiv: document.getElementById("game"),
            nextDiv: document.getElementById("next"),
            scoreDiv: document.getElementById("score"),
            resultDiv: document.getElementById("gameOver")
        }
        game = new Game();
        game.init(doms, generateType(), generateDir());
        bindKeyEvent();
        game.performNext(generateType(), generateDir());
        timer = setInterval(move, INTERVAL);
    }
    var stop = function() {    // 结束
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }
    this.start = start;    // 导出API
}