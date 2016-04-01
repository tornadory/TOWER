// TOWER 3D - Author: Andrew V Butt Sr. Pryme8@gmail.com 2016
TOWER = function(){
	this.CORE = {
		engine : null,
		scene : null,
		scenes : [],
		objects : [],	
		};
	this.DOM = {};
	this._init();	
}

TOWER.prototype._init = function(){
	this.DOM.Master = $('tower');
	this.DOM.canvas = $(TOWER.ELEMENTS.canvas);
	this.DOM.Master.append(this.DOM.canvas);
	
	var canvas = document.getElementById('renderCanvas');
	this.CORE.engine = new BABYLON.Engine(canvas, true);
	var parent = this;
	
var createScene = function() {
    var scene = new BABYLON.Scene(parent.CORE.engine);
    var camera = new BABYLON.FreeCamera('3d_Camera', new BABYLON.Vector3(0, 5,-10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
	scene.activeCamera = camera;
    var defaultLight = new BABYLON.HemisphericLight('defaultLight', new BABYLON.Vector3(-0.5,1,0.2), scene);
    return scene;
}

var scene = createScene();

parent.CORE.engine.runRenderLoop(function() {
    scene.render();
});

$(window).bind('resize', function() {
    parent.CORE.engine.resize();
});
	
this._start();
	
}

TOWER.prototype._start = function(){
	this.DOM.logoBig = $(TOWER.ELEMENTS.logoBig);
	this.DOM.Master.append(this.DOM.logoBig);
	this.DOM.logoBig.fadeIn(1400, function(){
	});
	this.DOM.mainMenu = $(TOWER.ELEMENTS.mainMenu);
	this.DOM.Master.append(this.DOM.mainMenu);
	this.DOM.toolBar = $(TOWER.ELEMENTS.toolBar);
	this.DOM.Master.append(this.DOM.toolBar);
	
	this.DOM.logoBig.animate({
    left: "40px",
	top: "40px",
	width: "64px",
	height: "64px",
  	}, 3200, function() {
    // Animation complete.
  	});

}

TOWER.ELEMENTS = {
	canvas : '<canvas id="renderCanvas"></canvas>',
	logoBig : '<logo class="big" />',
	mainMenu : 
	'<main>'+
		'<span class="menu-top-item">Project'+
			'<span class="menu-sub">'+
				'<span class="menu-item">New Project</span>'+
				'<span class="menu-item">Open Project</span>'+
				'<hr/>'+
				'<span class="menu-item">New Scene</span>'+
				'<span class="menu-item">Open Scene</span>'+
				'<span class="menu-item">New Object</span>'+
				'<span class="menu-item">Open Object</span>'+
			'</span>'+
			'<span class="menu-top-item">Edit'+
			'<span class="menu-sub">'+
				'<span class="menu-item">Project Properties</span>'+
				'<span class="menu-item">Scene Properties</span>'+
				'<span class="menu-item">Object Properties</span>'+
			'</span>'+
			'<span class="menu-top-item">Assets'+
			'<span class="menu-sub">'+
				'<span class="menu-item">Browse</span>'+
				'<span class="menu-item">Import</span>'+
			'</span>'+
			'<span class="menu-top-item">Help'+
			'<span class="menu-sub">'+
				'<span class="menu-item">Documentation</span>'+
				'<span class="menu-item">About</span>'+
			'</span>'+
			
			
			'<span class="menu-top-item">About</span>'+
		'</span>'+
	'</main>',
	toolBar : '<tools></tools>',
};

