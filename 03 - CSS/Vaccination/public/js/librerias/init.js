 /*Stop IE crying if there is not console support 
if(!(window.console && console.log)) {
	console = {
	log: function(){},
	debug: function(){},
	info: function(){},
	warn: function(){},
	error: function(){}
	};
}
*/

/*----------[MAPA ZONA A]------------*/
jQuery(function($){

    var r = Raphael('chaptersMap', 350, 250);
	r.safari();
	var _label = r.popup(50, 50, "").hide();
    attributes = {
            fill: '#898989',
            stroke: '#FFFFFF',
            'stroke-width': 2,
            'stroke-linejoin': 'round'
        },
    arr = new Array();
     
    for (var country in paths) {
        var obj = r.path(paths[country].path);
        arr[obj.id] = country;
		obj.attr(attributes);
        obj
        .hover(function(){
            this.animate({
                fill: '#fdc228'
            }, 300);
			bbox = this.getBBox();
			 _label.attr({text: paths[arr[this.id]].name}).update(bbox.x, bbox.y + bbox.height/2, bbox.width/2).toFront().show();
        }, function(){
            this.animate({
                fill: attributes.fill
            }, 300);
			_label.hide();
        })
        .click(function(){
            
			location.href = paths[arr[this.id]].url;
             
        })
		

    }

});

/*----------[MAPA ZONA B]------------*/
jQuery(function($){

    var r2 = Raphael('chaptersMap2', 350, 250);
	r2.safari();
	var _label2 = r2.popup(50, 50, "").hide();
    attributes2 = {
            fill: '#898989',
            stroke: '#FFFFFF',
            'stroke-width': 2,
            'stroke-linejoin': 'round'
        },
    arr2 = new Array();
     
    for (var country in paths2) {
        var obj = r2.path(paths2[country].path);
        arr2[obj.id] = country;
		obj.attr(attributes2);
        obj
        .hover(function(){
            this.animate({
                fill: '#fdc228'
            }, 300);
			bbox2 = this.getBBox();
			 _label2.attr({text: paths2[arr2[this.id]].name}).update(bbox2.x, bbox2.y + bbox2.height/2, bbox2.width/2).toFront().show();
        }, function(){
            this.animate({
                fill: attributes2.fill
            }, 300);
			_label2.hide();
        })
        .click(function(){
            
			location.href = paths2[arr2[this.id]].url;
             
        })
		

    }

});

/*----------[MAPA ZONA C]------------*/
jQuery(function($){

    var r3 = Raphael('chaptersMap3', 350, 250);
	r3.safari();
	var _label3 = r3.popup(50, 50, "").hide();
    attributes3 = {
            fill: '#898989',
            stroke: '#FFFFFF',
            'stroke-width': 2,
            'stroke-linejoin': 'round'
        },
    arr3 = new Array();
     
    for (var country3 in paths3) {
        var obj3 = r3.path(paths3[country3].path);
        arr3[obj3.id] = country3;
		obj3.attr(attributes3);
        obj3
        .hover(function(){
            this.animate({
                fill: '#fdc228'
            }, 300);
			bbox3 = this.getBBox();
			 _label3.attr({text: paths3[arr3[this.id]].name}).update(bbox3.x, bbox3.y + bbox3.height/2, bbox3.width/2).toFront().show();
        }, function(){
            this.animate({
                fill: attributes3.fill
            }, 300);
			_label3.hide();
        })
        .click(function(){
            
			location.href = paths3[arr3[this.id]].url;
             
        })
		
    }

});


/*
jQuery.expr[':'].raph=function
(objNode,intStackIndex,arrProperties,arrNodeStack){var c=objNode.getAttribute('class');return(c&&c.indexOf(arrProperties[3])!=-1);}*/