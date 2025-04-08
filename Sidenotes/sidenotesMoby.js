
// when the document id ready generate all the sidenotes
$(document).ready(function() {
	var c = 0;	// color counter
	var num_colors = 4; 
	var boxcount = 0; // count of container divs for unique ids
	var offset = 0; // vertical offset
	var sn_c = 0; // sidenote counter for unique ids
	
	// go through each paragraph and look for sidenotes
	$("p").each(function(itIndex) {
		var has_sidenote = 0;
		var innerDiv ='';
		var myPara = this;
		lastHeight = $(myPara).height();
		
		//get each span with class sidenote in current paragraph and do stuff
		// 	$(myPara).children('span.sidenote').each(function(x){

		
		$(myPara).find('span.sidenote').each(function(x) {
			has_sidenote=1;
			
			innerDiv = innerDiv + "<div id='sn"+sn_c+"_content' class='sidenoteInner sidenote_color" + c + "'>" + $(this).attr('title') + "<\/div>";
			this.className = ' sidenote sidenote_link sidenote_color' +c;
			c = c + 1 < num_colors ? c+1: 0;
			$(this).attr('id','sn'+sn_c);
			
			// highlight notes on hover!
			
			$(this).hover(function() {
				var z = "#" + $(this).attr('id') + "_content";
				$(z).attr('rel',$(z).attr('class'));
				$(z).attr('class',$(z).attr('class') + "_hilite");
			}, function() {
				var z = "#" + $(this).attr('id') + "_content";
				$(z).attr('class',$(z).attr('rel'));
			});

			sn_c++;
		});
		
		// if i found a sidenote then make a div to put all those sidenotes in and display it 
		if (has_sidenote == 1) {
			var outerDiv = '<div class="sidenoteBox" id="boxer'+boxcount+ '">' + innerDiv + '<\/div>';
			$(this).before(outerDiv);
			// fix safari 2.0?
			if ($.browser.safari) {
				$("#boxer" + boxcount).css({'clear':'right', 'float':'right'});
			}
			
			
			if ( $("#boxer" + boxcount).position().top < offset ) {	
				var stuff_to_move = $("#boxer" + boxcount).html();
				var themove = boxcount - 1;
				$("#boxer" + themove).append(stuff_to_move);
				offset = offset + $("#boxer" + boxcount).height();
				$("#boxer" + boxcount).remove();			
			} else {		
				offset = $("#boxer" + boxcount).position().top + $("#boxer" + boxcount).height();
				boxcount++
			}
		}
	});
});

// toggle sidenotes on-off (with UGLY UGLY safari 2.0.4 fixes)
function toggle() {
	var tog = document.getElementById('toggle');
	var toggled = '';
	if ($.browser.safari && parseInt($.browser.version) < 420) {
		toggled = tog.innerHTML;
	} else {
		toggled = $("#toggle").html();
	}
	if (toggled == 'Hide Notes') {
		if ($.browser.safari && parseInt($.browser.version) < 420) {
			document.getElementById('toggle').innerHTML = 'Show Notes';
		} else {
			$("#toggle").html('Show Notes'); 
		}
		$(".sidenoteBox").hide();
		$("span.sidenote").each(function(i) {
			$(this).attr('rel', $(this).attr('class'));
			this.className = 'sidenote';
		});
	} else {
		if ($.browser.safari && parseInt($.browser.version) < 420) {
			document.getElementById('toggle').innerHTML = 'Hide Notes';
		} else {
			$("#toggle").html('Hide Notes'); 
		}
		$(".sidenoteBox").show();
		$("span.sidenote").each(function(i) {
			$(this).attr('class',  $(this).attr('rel'));
		});
	}
}