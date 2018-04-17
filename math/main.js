window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    
    
    

    for (let i = 0; i < 20; i++) {  
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
        

        
    }


}