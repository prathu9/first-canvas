const canvasContainer = document.querySelector('.container');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

console.log(ctx);

const player = {
    w: 50,
    h: 60,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};

const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const detectWalls = () => {
    //left wall
    if(player.x < 0){
       player.x = 0;
    }

    //right wall
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w;
    }

    //top wall
    if(player.y < 0){
        player.y = 0;
    }
    
    //bottom wall
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h;
    }

}

const newPos = () => {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

const drawPlayer = () => {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

const update = () => {
    clear();
    drawPlayer();
    newPos();

    requestAnimationFrame(update);
}

update();

const moveUp = () => {
    player.dy = - player.speed;
}

const moveDown = () => {
    player.dy = player.speed;
}

const moveLeft = () => {
    player.dx = - player.speed;
}

const moveRight = () => {
    player.dx =  player.speed;
}

const keyDown = (e) => {
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }
    else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }
    else if(e.key === 'ArrowUp' || e.key === 'Up'){
        moveUp();
    }
    else if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveDown();
    }
}

const keyUp = (e) => {
    if(e.key === 'ArrowRight' || e.key === 'Right'
       || e.key === 'ArrowLeft' || e.key === 'Left'
       || e.key === 'ArrowUp' || e.key === 'Up'
       || e.key === 'ArrowDown' || e.key === 'Down'){

        player.dx = 0;
        player.dy = 0;

       }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


// //Ball that will move in a container

// //Ball initial parameters
// const ball = {
//     x: 175,
//     y: 375,
//     size: 30,
//     dx: 1,
//     dy: 1
// }

// //Movement area of ball
// const ballContainer = {
//     left: 20,
//     right: 330,
//     top: 270,
//     bottom: 480
// }


// //Drawing a ball
// const drawCircle = () => {
//     ctx.beginPath();
//     ctx. arc(ball.x, ball.y, ball.size, 0, Math.PI*2);
//     ctx.fillStyle = "#ff0066";
//     ctx.fill();
// }

// //Container for bouncing ball
// const drawBallContainer = (borderColor) => {
//     //Container for bouncing ball
//     ctx.beginPath();
//     ctx.strokeStyle = `${borderColor}`;
//     ctx.lineWidth = 4;
//     ctx.strokeRect(20, 270, 310, 210);
//     ctx.stroke();
// }

// //Animation for ball
// const update = () => {
//     ctx.clearRect(ballContainer.left+2, ballContainer.top+2, ballContainer.right-24, ballContainer.bottom-274);
//     drawCircle();

//     //Move circle
//     ball.x += ball.dx;
//     ball.y += ball.dy;

//     //Detect left and right wall, 4 is added after considering border width of container
//     if(ball.x + ball.size + 3 >= ballContainer.right  
//         || ball.x - ball.size - 3 <= ballContainer.left){
//         ball.dx *= -1;
//         drawBallContainer("#99ccff");
//     }

//     //Detect top and bottom wall, 3 is added after considering border width of container
//     if(ball.y + ball.size + 3  >= ballContainer.bottom 
//         || ball.y - ball.size - 3 <= ballContainer.top){
//         ball.dy *= -1;
//         drawBallContainer("#ffcccc");
//     }


//     requestAnimationFrame(update);
// }

// const draw = () => {ctx.fillStyle = "red";
//     ctx.fillRect(20, 20, 150, 200);
//     ctx.fillStyle = "purple";
//     ctx.fillRect(180, 20, 150, 100);

//     ctx.strokeStyle = "lightgreen";
//     ctx.lineWidth = 5;
//     ctx.strokeRect(180, 130, 150, 90);

//     ctx.clearRect(95, 70, 170, 105);

//     ctx.fillStyle = "white";
//     ctx.font = "30px Arial";
//     ctx.fillText("Hello world", 105,130);

//     ctx.lineWidth = 2;
//     ctx.font = "30px Times New Roman";
//     ctx.strokeText("Learning Canvas", 20, 250);

//     //path
//     ctx.beginPath();
//     ctx.moveTo(350, 20);
//     ctx.lineTo(550, 20);
//     ctx.lineTo(450, 220);
//     ctx.lineTo(350, 20);
//     ctx.fillStyle = "#66ccff";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(480, 20);
//     ctx.lineTo(580, 221);
//     ctx.lineTo(380, 221);
//     ctx.closePath();
//     ctx.strokeStyle = "#ff3300";
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.rect(430, 120, 200, 120);
//     ctx.strokeStyle = "#ff6600";
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.rect(450, 142, 160, 80);
//     ctx.fillStyle = "#ff6600";
//     ctx.fill();

//     //Arc (circle)
//     ctx.beginPath();
//     //face
//     ctx.arc(530, 180, 35, 0, Math.PI*2);

//     //mouth
//     ctx.moveTo(555, 180);
//     ctx.arc(530, 180, 25, 0, Math.PI);

//     ctx.fillStyle = "#ffff00";
//     ctx.fill();
//     ctx.strokeStyle = "#000";
//     ctx.stroke();

//     ctx.beginPath();
//     //left eye
//     ctx.moveTo(520, 170);
//     ctx.arc(515, 170, 5, 0, Math.PI*2);

//     //right eye
//     ctx.moveTo(550, 170);
//     ctx.arc(545, 170, 5, 0, Math.PI*2);
//     ctx.fillStyle = "#000";
//     ctx.fill();
//     ctx.stroke();

   
//     drawBallContainer("#ffcccc");

//     update();
// }
// draw();






// const resizeCanvas = ()=>{
//     var cs = getComputedStyle(canvasContainer);
//     var width = parseInt(cs.getPropertyValue('width'), 10);
//     var height = parseInt(cs.getPropertyValue('height'), 10);
//     console.log(width, height);
//     canvas.width = width;
//     canvas.height = height;
// }

// window.onload = resizeCanvas;


// window.addEventListener('resize', resizeCanvas);


