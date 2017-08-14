console.log('printing');

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d'); //we are selecting
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/*var pic = new Image();
pic.src="logo/c2.svg";

var heading = new Image();
heading.src = "css/img/heading.svg"; */

/*var owl  = new Image();
owl.src = "css/img/owl.png";

//pic.addEventListener("load", function(){c.drawImage(pic, 30,30),false }); //how to add an image to a canvas

//heading.addEventListener("load", function(){ c.drawImage(heading, 350, 300),false}); 

owl.addEventListener("load", function(){ c.drawImage(owl, 28, 200),false});

/*var txt = "Carol Gonzalez \n Front-End/UI Developer";
var x = 500;
var y = 350;
var lineheight = 30;
var lines = txt.split('\n');
for(var i = 0; i < lines.length; i++){	
	c.filltText(lines[i], x, y + (i * lineheight));
}

c.font = "400 1.5em 'Futura', 'Trajan Pro' ";
c.textAlign = "center";
.fillStyle = "rgba(255, 10, 10 , 1)";
*/

/*function wrapText(context, text, x, y, maxWidth, lineHeight, letter-spacing) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = c.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            c.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        c.fillText(line, x, y);
      }
      
      var maxWidth = 550;
      var lineHeight = 55;
      var letter-spacing = 5;
      var x = 300;
      var y = 350;
      var text = 'Carol Gonzalez. 			They have their exits and their entrances; And one man in his time plays many parts.';

      c.font = " 400 1.2em 'Futura', 'Trajan Pro' ";
      c.fillStyle = '#ff3333';

      wrapText(c, text, x, y, maxWidth, lineHeight, letter-spacing); */
  