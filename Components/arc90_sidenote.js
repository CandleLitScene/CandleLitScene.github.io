/*

Unobtrusive Sidenotes v1.2 (with Toggle)
(c) Arc90, Inc.

http://www.arc90.com
http://lab.arc90.com

Licensed under : Creative Commons Attribution 2.5 http://creativecommons.org/licenses/by/2.5/

*/

/* Globals */
var arc90_isIE = document.all? true: false;
var arc90_sideCLRs = 4; // total colours declared in the CSS for sidenote usage

function arc90_sidenote() {
	O = document.getElementsByTagName('SPAN');
	for (var i = 0, l = O.length, c = 0; i < l; i++) {
		var o = O[i];
		if (o != null && o.className && o.className.indexOf('sidenote') >= 0) {
			try {
				var s = arc90_newNode('div', '', 'arc90_sidenoteTXT arc90_sidenoteCLR' +c);
				var a = arc90_newNode('div', '', 'arc90_inline');
				a.innerHTML = arc90_gtlt(o.title);
				s.appendChild(a);
				o.parentNode.parentNode.insertBefore(s, o.parentNode);

				o.className = 'arc90_sidenoteLNK arc90_sidenoteCLR' +c;
				c = c + 1 < arc90_sideCLRs? c+1: 0;
			} catch (err) {
				o = null;
			}
		}
	}
}

function arc90_gtlt(s) {
	s = s.replace(/&gt;/g, '>');
	s = s.replace(/&lt;/g, '<');
	return s;
}

/* Events */
function arc90_isString(o) { return (typeof(o) == "string"); }

function arc90_addEvent(e, meth, func, cap) {
	if (arc90_isString(e))	e = document.getElementById(e);

	if (e.addEventListener){
		e.addEventListener(meth, func, cap);
    	return true;
	}	else if (e.attachEvent)
		return e.attachEvent("on"+ meth, func);
	return false;
}

// /* Nodes */
// function arc90_newNode(t, i, s, x, c) {
// 	var node = document.createElement(t);
// 	if (x != null && x != '') {
// 		var n = document.createTextNode(x);
// 		node.appendChild(n);
// 	}
// 	if (i != null && i != '')
// 		node.id = i;
// 	if (s != null && s != '')
// 		node.className = s;
// 	if (c != null && c != '')
// 		node.appendChild(c);
// 	return node;
// }

/* Add Events */
arc90_addEvent(window, 'load', arc90_sidenote);

/* Toggle */
function arc90_UNsidenote() {
	O = document.getElementsByTagName('SPAN');
	for (var i = 0, l = O.length, c = 0; i < l; i++) {
		var o = O[i];
		if (o != null && o.className && o.className.indexOf('sidenote') >= 0) {
			try {
				o.className = o.className+'XXX';
			} catch (err) {
				o = null;
			}
		}
	}
	O = document.getElementsByTagName('DIV');
	for (var i = 0, l = O.length, c = 0; i < l; i++) {
		var o = O[i];
		if (o != null && o.className && o.className.indexOf('sidenote') >= 0) {
			try {
				o.style.display = 'none';
			} catch (err) {
				o = null;
			}
		}
	}
}

function arc90_REsidenote() {
	O = document.getElementsByTagName('SPAN');
	for (var i = 0, l = O.length, c = 0; i < l; i++) {
		var o = O[i];
		if (o != null && o.className && o.className.indexOf('sidenote') >= 0) {
			try {
				o.className = o.className.replace(/XXX/g, '');
			} catch (err) {
				o = null;
			}
		}
	}
	O = document.getElementsByTagName('DIV');
	for (var i = 0, l = O.length, c = 0; i < l; i++) {
		var o = O[i];
		if (o != null && o.className && o.className.indexOf('sidenote') >= 0) {
			try {
				o.style.display = 'block';
			} catch (err) {
				o = null;
			}
		}
	}
}

function arc90_toggleSN(e) {
	var lnk = (document.all && event? event.srcElement: e.target);
	if (arc90_snToggle) {
		arc90_UNsidenote();
		arc90_snToggle = false;
		lnk.className = '';
		lnk.innerHTML = '+&nbsp;Show&nbsp;Sidenotes';
	} else {
		arc90_REsidenote();
		arc90_snToggle = true;
		lnk.className = 'hide';
		lnk.innerHTML = '-&nbsp;Hide&nbsp;Sidenotes';
	}
}

var arc90_snToggle = true;
arc90_addEvent(window, 'load', function() { eval("if (document.getElementById('toggle') != null) arc90_addEvent(document.getElementById('toggle'), 'click', arc90_toggleSN);") });




// // when the document id ready generate all the sidenotes
// $(document).ready(function() {
// 	var c = 0;	// color counter
// 	var num_colors = 4; 
// 	var boxcount = 0; // count of container divs for unique ids
// 	var offset = 0; // vertical offset
// 	var sn_c = 0; // sidenote counter for unique ids
	
// 	// go through each paragraph and look for sidenotes
// 	$("p").each(function(itIndex) {
// 		var has_sidenote = 0;
// 		var innerDiv ='';
// 		var myPara = this;
// 		lastHeight = $(myPara).height();
		
// 		//get each span with class sidenote in current paragraph and do stuff
// 		// 	$(myPara).children('span.sidenote').each(function(x){

		
// 		$(myPara).find('span.sidenote').each(function(x) {
// 			has_sidenote=1;
			
// 			innerDiv = innerDiv + "<div id='sn"+sn_c+"_content' class='sidenoteInner sidenote_color" + c + "'>" + $(this).attr('title') + "<\/div>";
// 			this.className = ' sidenote sidenote_link sidenote_color' +c;
// 			c = c + 1 < num_colors ? c+1: 0;
// 			$(this).attr('id','sn'+sn_c);
			
// 			// highlight notes on hover!
			
// 			$(this).hover(function() {
// 				var z = "#" + $(this).attr('id') + "_content";
// 				$(z).attr('rel',$(z).attr('class'));
// 				$(z).attr('class',$(z).attr('class') + "_hilite");
// 			}, function() {
// 				var z = "#" + $(this).attr('id') + "_content";
// 				$(z).attr('class',$(z).attr('rel'));
// 			});

// 			sn_c++;
// 		});
		
// 		// if i found a sidenote then make a div to put all those sidenotes in and display it 
// 		if (has_sidenote == 1) {
// 			var outerDiv = '<div class="sidenoteBox" id="boxer'+boxcount+ '">' + innerDiv + '<\/div>';
// 			$(this).before(outerDiv);
// 			// fix safari 2.0?
// 			if ($.browser.safari) {
// 				$("#boxer" + boxcount).css({'clear':'right', 'float':'right'});
// 			}
			
			
// 			if ( $("#boxer" + boxcount).position().top < offset ) {	
// 				var stuff_to_move = $("#boxer" + boxcount).html();
// 				var themove = boxcount - 1;
// 				$("#boxer" + themove).append(stuff_to_move);
// 				offset = offset + $("#boxer" + boxcount).height();
// 				$("#boxer" + boxcount).remove();			
// 			} else {		
// 				offset = $("#boxer" + boxcount).position().top + $("#boxer" + boxcount).height();
// 				boxcount++
// 			}
// 		}
// 	});
// });

// // toggle sidenotes on-off (with UGLY UGLY safari 2.0.4 fixes)
// function toggle() {
// 	var tog = document.getElementById('toggle');
// 	var toggled = '';
// 	if ($.browser.safari && parseInt($.browser.version) < 420) {
// 		toggled = tog.innerHTML;
// 	} else {
// 		toggled = $("#toggle").html();
// 	}
// 	if (toggled == 'Hide Notes') {
// 		if ($.browser.safari && parseInt($.browser.version) < 420) {
// 			document.getElementById('toggle').innerHTML = 'Show Notes';
// 		} else {
// 			$("#toggle").html('Show Notes'); 
// 		}
// 		$(".sidenoteBox").hide();
// 		$("span.sidenote").each(function(i) {
// 			$(this).attr('rel', $(this).attr('class'));
// 			this.className = 'sidenote';
// 		});
// 	} else {
// 		if ($.browser.safari && parseInt($.browser.version) < 420) {
// 			document.getElementById('toggle').innerHTML = 'Hide Notes';
// 		} else {
// 			$("#toggle").html('Hide Notes'); 
// 		}
// 		$(".sidenoteBox").show();
// 		$("span.sidenote").each(function(i) {
// 			$(this).attr('class',  $(this).attr('rel'));
// 		});
// 	}
// }
