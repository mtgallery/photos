(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,2600,1334,40],[0,2438,1372,78],[0,2518,1334,80],[0,2318,1372,118],[0,0,1334,750],[0,1504,773,614],[1015,1563,72,15],[775,1563,99,43],[876,1563,137,17],[1119,1537,165,44],[0,2120,1334,196],[0,752,1334,750],[1119,1504,316,31],[775,1504,342,57]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1sDropShadow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg2sDropShadow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.version = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.versionsOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.year = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.yearsOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.垂れ幕 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.幕 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.文章 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.文章sOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.幕_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 幕
	this.instance = new lib.幕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.幕_1, new cjs.Rectangle(0,0,1334,750), null);


(lib.垂れ幕_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 垂れ幕
	this.instance = new lib.垂れ幕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.垂れ幕_1, new cjs.Rectangle(0,0,1334,196), null);


(lib.文章sOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.文章sOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.文章sOuterGlow_1, new cjs.Rectangle(0,0,342,57), null);


(lib.文章_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.文章();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.文章_1, new cjs.Rectangle(0,0,316,31), null);


(lib.bg2sDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg2sDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2sDropShadow_1, new cjs.Rectangle(0,0,1372,118), null);


(lib.bg1sDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg1sDropShadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1sDropShadow_1, new cjs.Rectangle(0,0,1372,78), null);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.title();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(0,0,773,614), null);


(lib.bg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg3
	this.instance = new lib.bg3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(0,0,1334,750), null);


(lib.yearsOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.yearsOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yearsOuterGlow_1, new cjs.Rectangle(0,0,165,44), null);


(lib.year_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.year();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.year_1, new cjs.Rectangle(0,0,137,17), null);


(lib.versionsOuterGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.versionsOuterGlow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.versionsOuterGlow_1, new cjs.Rectangle(0,0,99,43), null);


(lib.version_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.version();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.version_1, new cjs.Rectangle(0,0,72,15), null);


(lib.文章_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		goto(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// 文章
	this.instance_1 = new lib.文章_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171,28.5,1,1,0,0,0,158,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1));

	// 文章's Outer Glow
	this.instance_2 = new lib.文章sOuterGlow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171,28.5,1,1,0,0,0,171,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342,57);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg2
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(19,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg2's Drop Shadow
	this.instance_1 = new lib.bg2sDropShadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,59,1,1,0,0,0,686,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,1372,118), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg1's Drop Shadow
	this.instance_1 = new lib.bg1sDropShadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686,39,1,1,0,0,0,686,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,1372,78), null);


(lib.year_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// year
	this.instance_1 = new lib.year_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,21.5,1,1,0,0,0,68.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// year's Outer Glow
	this.instance_2 = new lib.yearsOuterGlow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.5,22,1,1,0,0,0,82.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.year_2, new cjs.Rectangle(0,0,165,44), null);


(lib.version_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// version
	this.instance_1 = new lib.version_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,21.5,1,1,0,0,0,36,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// version's Outer Glow
	this.instance_2 = new lib.versionsOuterGlow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.5,21.5,1,1,0,0,0,49.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.version_2, new cjs.Rectangle(0,0,99,43), null);


(lib.year_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// year
	this.instance = new lib.year_2();
	this.instance.parent = this;
	this.instance.setTransform(82.5,22,1,1,0,0,0,82.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.year_3, new cjs.Rectangle(0,0,165,44), null);


(lib.version_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// version
	this.instance = new lib.version_2();
	this.instance.parent = this;
	this.instance.setTransform(49.5,21.5,1,1,0,0,0,49.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.version_3, new cjs.Rectangle(0,0,99,43), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文章
	this.instance = new lib.文章_2();
	this.instance.parent = this;
	this.instance.setTransform(342.5,332.3,0.5,0.5,0,0,0,171,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// version.png
	this.instance_1 = new lib.version_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.1,364.1,0.505,0.512,0,0,0,49.6,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// year.png
	this.instance_2 = new lib.year_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(552.4,363.5,0.503,0.5,0,0,0,82.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// 垂れ幕
	this.instance_3 = new lib.垂れ幕_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(343,49,0.5,0.5,0,0,0,667,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

	// title
	this.instance_4 = new lib.title_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(342.8,153.5,0.5,0.5,0,0,0,386.5,307);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

	// 幕
	this.instance_5 = new lib.幕_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(343,187.5,0.5,0.5,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

	// bg1
	this.instance_6 = new lib.bg1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(343,362.5,0.5,0.5,0,0,0,686,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48));

	// bg2
	this.instance_7 = new lib.bg2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(343,333.5,0.5,0.5,0,0,0,686,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48));

	// bg3
	this.instance_8 = new lib.bg3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(343,187.5,0.5,0.5,0,0,0,667,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,686,382);


// stage content:
(lib.start667375 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// startScreen2.psd
	this.instance = new lib.start();
	this.instance.parent = this;
	this.instance.setTransform(333.5,191,1,1,0,0,0,343,191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324,187.5,686,382);
// library properties:
lib.properties = {
	width: 667,
	height: 375,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;