(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1848,1334,40],[0,1686,1372,78],[0,1766,1334,80],[0,1566,1372,118],[0,752,773,614],[1475,1563,72,15],[1374,1563,99,43],[1374,1608,137,17],[1654,1563,165,44],[0,0,1334,750],[0,1368,1334,196],[1336,0,344,750],[1336,752,315,750],[1336,1766,316,31],[1336,1504,342,57]]}
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



(lib.title = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.version = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.versionsOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.year = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.yearsOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ベクトルスマートオブジェクトaiアセット = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.垂れ幕 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.幕1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.幕2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.文章 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.文章sOuterGlow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
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


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.title();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(0,0,773,614), null);


(lib.垂れ幕_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 垂れ幕
	this.instance = new lib.垂れ幕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.垂れ幕_1, new cjs.Rectangle(0,0,1334,196), null);


(lib.幕1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 幕1
	this.instance = new lib.幕1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.幕1_1, new cjs.Rectangle(0,0,344,750), null);


(lib.幕2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 幕2
	this.instance = new lib.幕2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.幕2_1, new cjs.Rectangle(0,0,315,750), null);


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


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_1();
	this.instance.parent = this;
	this.instance.setTransform(386.5,307,1,1,0,0,0,386.5,307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_2, new cjs.Rectangle(0,0,773,614), null);


(lib.maku1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 垂れ幕
	this.instance = new lib.垂れ幕_1();
	this.instance.parent = this;
	this.instance.setTransform(667,98,1,1,0,0,0,667,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.maku1, new cjs.Rectangle(0,0,1334,196), null);


(lib.maku_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 幕1
	this.instance = new lib.幕1_1();
	this.instance.parent = this;
	this.instance.setTransform(172,375,1,1,0,0,0,172,375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.maku_right, new cjs.Rectangle(0,0,344,750), null);


(lib.maku_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 幕2
	this.instance = new lib.幕2_1();
	this.instance.parent = this;
	this.instance.setTransform(157.5,375,1,1,0,0,0,157.5,375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.maku_left, new cjs.Rectangle(0,0,315,750), null);


(lib.文章_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文章
	this.instance_1 = new lib.文章_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171,28.5,1,1,0,0,0,158,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 文章's Outer Glow
	this.instance_2 = new lib.文章sOuterGlow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171,28.5,1,1,0,0,0,171,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.文章_2, new cjs.Rectangle(0,0,342,57), null);


(lib.letter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文章
	this.instance = new lib.文章_2();
	this.instance.parent = this;
	this.instance.setTransform(171,28.5,1,1,0,0,0,171,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342,57);


(lib.bg2コピー = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.bg2コピー, new cjs.Rectangle(0,0,1372,118), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg2
	this.instance = new lib.bg2コピー();
	this.instance.parent = this;
	this.instance.setTransform(686,59,1,1,0,0,0,686,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,1372,118), null);


(lib.bg1コピー = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.bg1コピー, new cjs.Rectangle(0,0,1372,78), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1
	this.instance = new lib.bg1コピー();
	this.instance.parent = this;
	this.instance.setTransform(686,39,1,1,0,0,0,686,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,1372,78), null);


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


(lib.start_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// version.png
	this.instance = new lib.version_3();
	this.instance.parent = this;
	this.instance.setTransform(222.5,729.1,1,1,0,0,0,49.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// year.png
	this.instance_1 = new lib.year_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1134,727.6,1,1,0,0,0,82.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// letter.png
	this.instance_2 = new lib.letter();
	this.instance_2.parent = this;
	this.instance_2.setTransform(514,636);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// maku1
	this.instance_3 = new lib.maku1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(686,98,1,1,0,0,0,667,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

	// title.png
	this.instance_4 = new lib.title_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(685.5,307,1,1,0,0,0,386.5,307);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

	// maku_left.png
	this.instance_5 = new lib.maku_left();
	this.instance_5.parent = this;
	this.instance_5.setTransform(176.5,375,1,1,0,0,0,157.5,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

	// maku_right.png
	this.instance_6 = new lib.maku_right();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1181,375,1,1,0,0,0,172,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48));

	// bg1
	this.instance_7 = new lib.bg1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(686,725,1,1,0,0,0,686,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48));

	// bg2
	this.instance_8 = new lib.bg2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(686,667,1,1,0,0,0,686,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48));

	// bg3
	this.instance_9 = new lib.ベクトルスマートオブジェクトaiアセット();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1372,764);


// stage content:
(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// startScreen.psd
	this.instance = new lib.start_1();
	this.instance.parent = this;
	this.instance.setTransform(333.5,191,0.5,0.5,0,0,0,686,382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324,187.5,686,382);
// library properties:
lib.properties = {
	width: 667,
	height: 375,
	fps: 24,
	color: "#424242",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;