$(document).ready(
	function(){
		'use strict';
		paper.install(window)

		//Draw a green circle in first canvas
		paper.setup(document.getElementById('maincanvas'));
		var tool = new Tool();
		tool.onMouseDown = function(event){
			var c = Shape.Circle(event.point, 20);
			c.fillColor = 'green'
		}

		paper.view.draw();
		console.log("main.js has been loaded");

	}
);
