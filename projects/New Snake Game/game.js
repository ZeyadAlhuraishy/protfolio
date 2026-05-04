/* STEPS:
// A shortcut of vs code is: windows + key(.) or key(;) will make emojey like the star and the cup

   1- Draw the Board.
   2- Draw the Square(rectangle).
   3- Create and Draw the Snake.
   4- Create and Draw the Food.
   5- Control the Snake.
   6- FIX 1st snake movement issue( opposite directions ).
   7- FIX 2nd snake movement issue( fast turn). معناه اذا لفيت بسرعه بيرجع لنفس المشكله الي بيغينا نحلها في الخطوة 6
   8- Eat Food.
   9- Show the Score.
   10- Collision detection( Hit Wall ).
   11- Collision detection( Hit Self ).
   12- Show the Game Over screen.
   13- Save high score to Local Storage.
   14- Play Again the game.
*/

// select elements // for step 9
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.high-score') // for step 12
const gameOverEl = document.querySelector('.game-over')// for step 12
const playAgainBtn = document.querySelector('.play-again')

//select cvs  // for step 1
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');

// add a border to cvs
cvs.style.border = '1px solid #fff';


// cvs dimensions
const width = cvs.width, height = cvs.height;

// game vars
const FPS = 1000/10;
let gameLoop;
const squareSize = 20;
// game colors
let boardColor = '#000000' ,
 /* After step 3 */ headColor = '#fff',
                     bodyColor = '#999';


let gameStarted = false

// directions
let currentDirection = '';
let directionsQueue = []; // for step 7
const directions = {
    RIGHT : 'ArrowRight',
    LEFT : 'ArrowLeft',
    UP : 'ArrowUp',
    DOWN : 'ArrowDown',
}

// draw board
function drawBoard(){
    ctx.fillStyle = boardColor;
    ctx.fillRect(0, 0, width, height);
}

// draw square step 2
function drawSquare(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x * squareSize , y * squareSize , squareSize , squareSize);
    // match color of strock to boardColor
    ctx.strokeStyle = boardColor;
    ctx.strokeRect(x * squareSize , y * squareSize , squareSize , squareSize)
}

// Snake ..... and its Array
let snake = [
    { x: 2 , y: 0 }, // Head
    { x: 1 , y: 0 }, // Body
    { x: 0 , y: 0 }, // Tail
];
function drawSnake(){
    snake.forEach((square, /* After step 3 */ index) => {
        /* After step 3 */ const color = index === 0 ? headColor : bodyColor;
        drawSquare(square.x, square.y, color);
    });
}

// step 5
function moveSnake(){
    if (!gameStarted) return;

    // get head position
    const head = {...snake[0]}; // This is A Reference

    // consume the Directions
    if(directionsQueue.length){
        currentDirection = directionsQueue.shift() // this for step 7
    }
    

    // change head position
    switch(currentDirection){
        case directions.RIGHT:
            head.x += 1;
            break;

            case directions.LEFT:
                head.x -= 1;
                break;
                
            case directions.UP:
                head.y -= 1;
                break;
                
            case directions.DOWN:
                head.y += 1;
                break;
    }


    if (hasEatenFood()){ // the condition for step 8
        food = createFood();
    }
    else{
    // remove tail... if we didn't remove tail, the tail will be grow infinite
    snake.pop()    
    }

    // unshift new head
    snake.unshift(head)

}

function hasEatenFood(){ // for step 8
    const head = snake[0];
    return head.x === food.x && head.y === food.y;
}
// keyup event Lisenter
// Control snake step 5
document.addEventListener('keyup' , setDirection);
function setDirection(event){
    const newDirection = event.key;
    const oldDirection = currentDirection;

    // step 6 ....Fix problem oppisite direction
  if ( (newDirection === directions.LEFT && oldDirection !== directions.RIGHT)
      || (newDirection === directions.RIGHT && oldDirection !== directions.LEFT)
      || (newDirection === directions.UP && oldDirection !== directions.DOWN)
      || (newDirection === directions.DOWN && oldDirection !== directions.UP) ){
        // before finish step 5 ...and ..... inside the condition of step 6
        if(!gameStarted){
        gameStarted = true;
        gameLoop = setInterval(frame, FPS); // problem of step 7 is from FPS.... so we will change currentDirection
    }
    //currentDirection = newDirection; //Delet it because Fix the issue of step 7
    directionsQueue.push(newDirection); // for step 7

  }
}

// After step 4

 // number of vertical / horizantol squares
 const horizantolSq = width / squareSize; // 400 / 20 => 20
 const verticalSq = height / squareSize; // 400 / 20 => 20

// Food...step 4
let food = createFood(); // { x : 5, y : 6 }
function createFood(){
    let food = {
        x: Math.floor(Math.random() * horizantolSq), // x and y to make food position
        y: Math.floor(Math.random() * verticalSq), // with Math make food random position
    };

    // A condition and loop for food doesn't become on snake.
    while (snake.some((square) => square.x === food.x && square.y === food.y)){

        food = {
            x: Math.floor(Math.random() * horizantolSq), // x and y to make food position
            y: Math.floor(Math.random() * verticalSq), // with Math make food random position
        };
    }


    return food;
}
function drawFood(){
    drawSquare(food.x, food.y, '#F95700')
}


// score // for step 9
const initialSnakeLength = snake.length; // always be equal 3 عشان لا يحسب الثلاث المربعات الي موجوده من الاساس على انها نقاط مكسوبه
let score = 0; // make score global valuable for step 12
let highScore = localStorage.getItem('high-score') || 0; // for step 13... if we delet 0, we will get null in the beginning game
function renderScore(){ 
     score = snake.length - initialSnakeLength; // نبين انه طول الثعبان ناقص من النقاط، وهذا فقط مع بداية اللعبه راح تكون وظيفتها
    scoreEl.innerHTML = `⭐ ${score}`;
    highScoreEl.innerHTML = `🏆 ${highScore}`; // for step 12
}


// hit wall .. step 10
function hitWall(){
    const head = snake[0];

    return( // to make sure that game will stop if snake hit the wall
        head.x < 0 || head.x >= horizantolSq || head.y < 0 || head.y >= verticalSq
    );
}

// hit self ... step 11
function hitSelf(){
    const snakeBody = [...snake];
    const head = snakeBody.shift();

    return snakeBody.some((square) => square.x === head.x && square.y === head.y) // to make sure that when snake touch his body, the game will stop.
}


// game over ... for step 12
function gameOver(){
    // select score and high score element
    const scoreEl = document.querySelector('.game-over-score .current');
    const highScoreEl = document.querySelector('.game-over-score .high');

    // calucate the high score
    highScore = Math.max(score, highScore);
    localStorage.setItem('high-score' , highScore ); // for step 13... set it to get it in the global let highScore in score

    // update the score and high score elements
    scoreEl.innerHTML = `⭐ ${score}`;
    highScoreEl.innerHTML = `🏆 ${highScore}`;

    // show game over element
    gameOverEl.classList.remove('hide');
}

// Loop.....call functions inside it and it will show it in web page.
function frame(){
    drawBoard();
   /* drawSquare(10, 2, '#FFFFFF');
    drawSquare(10, 3, '#FFFFFF');
  */
    drawFood(); // for turn on the functions
    moveSnake();// for turn on the functions
    drawSnake();// for turn on the functions
    renderScore();// turn on with step 9

    if (hitWall() || hitSelf()){ // for step 10
        clearInterval(gameLoop);
        gameOver(); // for step 12
    }  

}
frame();

// for step 14

// Restart the game
playAgainBtn.addEventListener('click' , restartGame);
function restartGame(){
   
    // reset snake length and position
    snake = [
        { x: 2 , y: 0 }, // Head
        { x: 1 , y: 0 }, // Body
        { x: 0 , y: 0 }, // Tail
    ];

    // reset directions
    currentDirection = '';
    directionsQueue = [];

    // hide the game over screen
    gameOverEl.classList.add('hide');

    // reset the gameStarted state to false
    gameStarted = false;

    // re-draw everything
    frame();
}