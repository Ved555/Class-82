var mouseEvent = "empty";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2D");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}
canvas.addEventListener("mousedown", mymousedown);

function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;

        ctx.lineWidth = width_of_line;

        console.log("Last Position of X and y coordinates are ");
        console.log(" x = " + last_position_of_x + " y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);


        console.log("current position of x and y coordinates are  ");
        console.log(" x= "+ current_position_of_mouse_x + " y =" +current_position_of_mouse_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e){
    mouseEvent = "mouseleave";
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
