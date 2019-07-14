$(function () {
    var animationID;
    var container        =   $('#container');
    var rocket           =   $('#rocket');
    var other1           =   $('#other1');
    var other2           =   $('#other2');
    var other3           =   $('#other3');
    var root             =   $('#root');

    var restartdiv       =   $('#restartdiv');
    var restartbtn       =   $('#restart');
    var score            =   $('#score');

    var containerLeft    =   parseInt(container.css('left'));
    var containerWidth   =   parseInt(container.width());
    var containerHeight  =   parseInt(container.height());
    var rocketWidth      =   parseInt(rocket.width());
    var rocketHeight     =   parseInt(rocket.height());


    var gameOver         =  false;
    var scoreCounter     =  1;
    var speed            =  2;
    var rootSpeed        =  5;

//Moving
    var moveLeft         =  false;
    var moveRight        =  false;
    var moveUp           =  false;
    var moveDown         =  false;






// Start of moving

$(document).on('keydown',function (e) {
    if (gameOver === false) {
        var key=e.keyCode;
        if (key === 37 && moveLeft===false){
            moveLeft=requestAnimationFrame(left);
        }else if (key === 39 && moveRight===false) {
            moveRight = requestAnimationFrame(right);
        }else if (key === 38 && moveUp===false) {
            moveUp = requestAnimationFrame(up);
        }else if (key === 40 && moveDown===false) {
            moveDown = requestAnimationFrame(down);
        }
    }
});

    $(document).on('onkeyup',function (e) {
        if (gameOver===false) {
            var key=e.keyCode;
            if (key === 37){
                cancelAnimationFrame(moveLeft);
                moveLeft===false;
            }else if (key === 39 ) {
                cancelAnimationFrame(moveRight);
                moveRight===false;
            }else if (key === 38 ) {
                cancelAnimationFrame(moveUp);
                moveUp===false;
            }else if (key === 40 ) {
                cancelAnimationFrame(moveDown);
                moveDown===false;
            }
        }
    });

    function left() {
    if (gameOver===false && parseInt(rocket.css('left'))>0){
    rocket.css('left',parseInt(rocket.css('left'))-5);
    moveLeft =requestAnimationFrame(left);
        }
    }
    function right() {
        if (gameOver===false && parseInt(rocket.css('left'))<containerWidth-rocketWidth){
            rocket.css('left',parseInt(rocket.css('left'))+5);
            moveRight =requestAnimationFrame(right);
        }
    }
    function up() {
        if (gameOver===false && parseInt(rocket.css('top'))>0){
            rocket.css('top',parseInt(rocket.css('top'))-3);
            moveUp =requestAnimationFrame(up);
        }
    }
    function down() {
        if (gameOver===false && parseInt(rocket.css('top'))<containerHeight-rocketHeight){
            rocket.css('top',parseInt(rocket.css('top'))+3);
            moveUp =requestAnimationFrame(down);
        }
    }

    animationID =requestAnimationFrame(repeat);
    function repeat() {
        if (collision(rocket,other1) || collision(rocket,other2)|| collision(rocket,other3));
        stopGame();
        return;
    }

    scoreCounter++;
    if (scoreCounter % 20 == 0){
        score.text(parseInt(score.text())+1);
    }if (scoreCounter % 500 == 0){
        speed++;
        rootSpeed++;
    }

    otherDown(other1);
    otherDown(other2);
    otherDown(other3);
    rootDown(root);

    function rocketDown(rocket) {
    var rocketCurrentTop    =   parseInt(rocket.css('top'));
    if (rocketCurrentTop    >   containerHeight){
        rocketCurrentTop    =   -200;
        var rocketLeft      =   parseInt(Math.random() * (containerWidth-rocketWidth));
        rocket.css('left',rocketLeft);
        }
    rocket.css('top',rocketCurrentTop   +   speed);
    }

    restartbtn.click(function () {
        location.reload();
    });

    function stopGame() {
        gameOver=true;
        cancelAnimationFrame(animationID);
        cancelAnimationFrame(moveLeft);
        cancelAnimationFrame(moveRight);
        cancelAnimationFrame(moveUp);
        cancelAnimationFrame(moveDown);
        restartdiv.slideDown();
        restartbtn.focus();

    }

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

});


