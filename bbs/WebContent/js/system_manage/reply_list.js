$(document).ready(function(){
		$('.subSection_tr').hover(function(){
			$(this).children('td').addClass('subSection_tr_hover');
		},function(){
			$(this).children('td').removeClass('subSection_tr_hover');
		});
		
		//$('.subSection_tr').mouseout(function(){
		//	$(this).children('td').removeClass('subSection_tr_hover');
		//});
		
		jumpToPage = function(id,tid,sid,allPages){
			var patrn = /^[0-9]+$/;
			var value = $(id).val();
			if(patrn.exec(value)&& value<=allPages){
				window.location.href="system/topic-viewReply.action?currentPage="+value+"&topicVO.id="+tid+"&subSectionVO.id="+sid;
			}
		}
		
		prepareReply = function(tid,sid){
			window.location.href="system/topic-prepareReply.action?topicVO.id="+tid+"&subSectionVO.id="+sid;
		}

	});