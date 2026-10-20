const { createContext } = require("react");

var canvas = document.getElementById("canvas1");
    context = canvas.getContext('2d');

    context.lineWidth= '2';
    context.strokeStyle= '#f22';
    context.moveTo(10, 20);
    context.lineTo(150, 200);
    context.moveTo(150, 100)
    context.lineTo(150, 200)
    context.lineTo(200, 300)
    context.stroke()

    // Un rectangle creux

    context.strokeRect(300, 200, 60, 60);
    

    // Un rectangle rempli
    context.fillStyle= 'rgb(206, 190, 22)';
    context.fillRect(200, 150, 300, 150);
    context.fillStyle()

    context.strokeRect(300, 200, 60, 60)




    context.beginPath();
    context.lineWidth='10';
    context.strokeStyle='#A55';
    context.arc(350, 400, 100, 0, Math.PI*2);
    context.stroke();

    //  Application

    // Tête

    context.beginPath();
    context.lineWidth='2';
    context.strokeStyle='rgb(0, 0, 0)';
    context.arc(350, 800, 210, 0, Math.PI*2);
    context.stroke();

    //  La bouche 

    context.beginPath();
    context.lineWidth='4'
    context.strokeStyle='rgb(0, 0, 0)';
    context.fillStyle='rgb(250, 250, 0)';
    context.arc(350, 800, 150, 0, Math.PI);
    context.stroke();
    context.fillStyle();

    //  L'oeil gauche

    context.beginPath();
    context.lineWidth='2';
    context.strokeStyle='rgb(0, 0, 0)';
    context.arc(280, 730, 60, 0, Math.PI, true);
    context.stroke();

    //  L'oeil droit

    context.beginPath();
    context.lineWidth='2';
    context.strokeStyle='rgb(0, 0, 0)';
    context.arc(420, 730, 60, 0, Math.PI, true);
    context.stroke();


