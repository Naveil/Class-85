canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var rover_width = 80;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;
var backgroundimage = "mars.jpg";
var roverimage = "rover.png";

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadbackground;
    background_img_tag.src = backgroundimage;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadroverimage;
    rover_img_tag.src = roverimage;
}

function uploadbackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadroverimage(){
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    if(key_pressed == "37"){
        left();

    }
    if(key_pressed == "38"){
        up();
    }
    if(key_pressed == "39"){
        right();
    }
    if(key_pressed == "40"){
        down();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadbackground();
        uploadroverimage();
    
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        uploadbackground();
        uploadroverimage();

    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadbackground();
        uploadroverimage();

    }
}

function down(){
    if(rover_y <= 600){
        rover_y = rover_y +10;
        uploadbackground();
        uploadroverimage();
        
    }
}