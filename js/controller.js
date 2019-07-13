$(function () {
var container        =   $('#container');
var rocket           =   $('#rocket');
var other1           =   $('other1');

var containerLeft    =   parseInt(container.css('left'));
var containerWidth   =   parseInt(container.width());
var containerHeight  =   parseInt(container.height());
var rocketWidth      =   parseInt(rocket.width());
var rocketHeight     =   parseInt(rocket.height());

//Moving
var moveLeft         =  false;
var moveRight        =  false;
var moveUp           =  false;
var moveDown         =  false;


var gameOver         =  false;
// Start of moving

$(document).on('onkeydown',function (e) {
    if (gameOver===false) {
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



});


